import type { Bilingual } from "../lib/types"

/** A project shown in the portfolio grid. */
export interface Project {
  /** Unique id, used as an anchor. */
  id: string
  name: string
  kind: Bilingual
  tagline: Bilingual
  summary: Bilingual
  /** Core modules / things I built — the substance of the project. */
  highlights: Bilingual[]
  /** Concrete, defensible outcomes. Keep to facts you can stand behind. */
  impact?: Bilingual[]
  stack: string[]
  links?: { label: string; href: string }[]
}

/** Grouped skill set, e.g. languages / frameworks / infrastructure. */
export interface SkillGroup {
  group: Bilingual
  items: string[]
}

/** One entry under a category on the /uses page. */
export interface GearItem {
  name: string
  detail: Bilingual
  href?: string
}

export interface GearCategory {
  title: Bilingual
  /** Shown only when the category has no items yet. */
  hint?: Bilingual
  items: GearItem[]
}

export interface Bookmark {
  title: string
  href: string
  desc: Bilingual
}

export interface BookmarkCategory {
  title: Bilingual
  items: Bookmark[]
}

export interface Essay {
  slug: string
  title: Bilingual
  date: string // ISO date, e.g. 2026-09-04
  summary: Bilingual
  body: Bilingual[]
}
