import { useCallback } from "react"
import type { Bilingual } from "../lib/types"
import { useLanguage } from "./context"
import { ui, type UIDict } from "./ui"

/** Current UI-chrome dictionary (nav labels, buttons, …). */
export function useDict(): UIDict {
  const { lang } = useLanguage()
  return ui[lang]
}

/** Returns a function that resolves a bilingual string for the active language. */
export function useText(): (value: Bilingual) => string {
  const { lang } = useLanguage()
  return useCallback((value: Bilingual) => value[lang], [lang])
}
