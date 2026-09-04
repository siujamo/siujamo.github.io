import { isRouteErrorResponse, Link, useRouteError } from "react-router"
import { btnGhost } from "@/components/ui"
import { useLanguage } from "@/i18n/context"

const copy = {
  title: { en: "Something went wrong", zh: "出错了" },
  body: { en: "An unexpected error occurred.", zh: "发生了未知错误。" },
  back: { en: "Back home", zh: "回到首页" },
}

/** Route-level error boundary, rendered via each route's `errorElement`. */
export function ErrorPage() {
  const error = useRouteError()
  const { lang } = useLanguage()
  const en = lang === "en"

  console.error(error)

  return (
    <main className="flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="font-mono text-2xl font-bold text-fg">{en ? copy.title.en : copy.title.zh}</h1>
      <p className="mt-3 text-muted">{en ? copy.body.en : copy.body.zh}</p>
      {isRouteErrorResponse(error) ? (
        <p className="mt-2 font-mono text-xs text-faint">
          {error.status} {error.statusText}
        </p>
      ) : null}
      <Link className={`${btnGhost} mt-8`} to="/">
        ← {en ? copy.back.en : copy.back.zh}
      </Link>
    </main>
  )
}
