import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import type { Lang } from "@/lib/types"
import { LanguageContext } from "./context"

const STORAGE_KEY = "siujamo:lang"

function detectInitial(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "en" || stored === "zh") return stored
  } catch {
    /* localStorage unavailable — fall through to navigator */
  }
  const nav = typeof navigator !== "undefined" ? navigator.language : ""
  return nav.toLowerCase().startsWith("zh") ? "zh" : "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, [])

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "en" ? "zh" : "en"
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, setLang, toggle])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
