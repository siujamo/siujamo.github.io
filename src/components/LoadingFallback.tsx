import { useLanguage } from "@/i18n/context"

/** Shown while the initial lazy route chunk is being fetched. */
export function LoadingFallback() {
  const { lang } = useLanguage()
  return (
    <div className="px-4 py-12 text-center font-mono text-sm text-faint">
      {lang === "en" ? "Loading…" : "页面加载中…"}
    </div>
  )
}
