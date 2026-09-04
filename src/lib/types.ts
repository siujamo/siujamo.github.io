/** Supported site languages. */
export type Lang = "en" | "zh"

/**
 * A string that exists in both languages. Content renders the entry that
 * matches the currently active language.
 */
export interface Bilingual {
  en: string
  zh: string
}
