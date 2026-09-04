import type { ReactNode } from "react"

interface PageHeaderProps {
  eyebrow: string
  title: string
  lead?: string
  children?: ReactNode
}

/** Consistent heading block at the top of content pages. */
export function PageHeader({ eyebrow, title, lead, children }: PageHeaderProps) {
  return (
    <header className="mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
      <h1 className="mt-3 text-[clamp(1.7rem,4vw,2.3rem)] text-fg">{title}</h1>
      {lead ? (
        <p className="mt-4 max-w-[64ch] text-[clamp(1.05rem,2vw,1.2rem)] leading-relaxed text-muted">
          {lead}
        </p>
      ) : null}
      {children}
    </header>
  )
}
