import { useLanguage } from "@/i18n/context"

/** EN ⇄ 中文 switch, persisted in localStorage. */
export function LangToggle() {
  const { lang, toggle } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "en" ? "切换到中文" : "Switch to English"}
      title={lang === "en" ? "切换到中文" : "Switch to English"}
      className="ml-3 shrink-0 cursor-pointer rounded-full border border-linestrong bg-canvas px-2.5 py-1 font-mono text-xs leading-none text-muted transition-colors hover:border-accent hover:text-fg print:hidden">
      <span className={lang === "en" ? "" : "text-faint"}>EN</span>
      <span aria-hidden="true"> / </span>
      <span className={lang === "zh" ? "" : "text-faint"}>中</span>
    </button>
  )
}
