import { useEffect } from "react"
import { useDict } from "@/i18n/useI18n"
import type { PageKey } from "@/i18n/ui"

function setMeta(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute("name", name)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

interface SeoProps {
  page: PageKey
  /** Optional page-specific description; falls back to the site description. */
  description?: string
}

/** Keeps <title>, meta description and OpenGraph tags in sync per page. */
export function Seo({ page, description }: SeoProps) {
  const dict = useDict()

  useEffect(() => {
    const title = dict.seo[page]
    const desc = description ?? dict.misc.siteDescription
    document.title = title
    setMeta("description", desc)
    setMeta("og:title", title)
    setMeta("og:description", desc)
    setMeta("og:type", "website")
  }, [dict, page, description])

  return null
}
