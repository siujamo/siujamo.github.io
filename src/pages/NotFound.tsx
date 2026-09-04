import { Link } from "react-router"
import { Seo } from "@/components/Seo"
import { btnGhost, page } from "@/components/ui"
import { useText } from "@/i18n/useI18n"

const copy = {
  title: { en: "404 — page not found", zh: "404 — 页面不存在" },
  body: {
    en: "The page you are looking for has moved, or never existed.",
    zh: "你要找的页面要么已搬家，要么从未存在。",
  },
  goHome: { en: "Back home", zh: "回到首页" },
}

export default function NotFound() {
  const t = useText()

  return (
    <div className={page}>
      <Seo page="home" />
      <h1 className="font-mono text-2xl text-fg">{t(copy.title)}</h1>
      <p className="mt-3 text-muted">{t(copy.body)}</p>
      <p className="mt-6">
        <Link className={btnGhost} to="/">
          ← {t(copy.goHome)}
        </Link>
      </p>
    </div>
  )
}
