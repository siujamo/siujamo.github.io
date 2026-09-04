/** Shared Tailwind class recipes, reused across pages (never inline styles). */

export const page = "wrap pt-12 pb-20"

export const eyebrow = "font-mono text-xs uppercase tracking-[0.14em] text-accent"

export const h2 = "text-xl md:text-2xl text-fg"

export const btnBase =
  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium no-underline transition-colors active:translate-y-px"

export const btnPrimary = `${btnBase} bg-accent text-onaccent hover:bg-accentstrong hover:text-onaccent`

export const btnGhost = `${btnBase} border border-linestrong bg-card text-fg hover:border-accent hover:text-accent`

export const chip =
  "inline-block rounded-full border border-line bg-soft px-2.5 py-1 font-mono text-xs text-muted"

export const plainList = "list-none p-0"

export const plainLink = "no-underline hover:text-accent"
