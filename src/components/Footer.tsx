import { Link } from "react-router"
import { site, socials } from "@/content/site"
import { useDict } from "@/i18n/useI18n"

export function Footer() {
  const dict = useDict()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-6 text-sm text-muted print:hidden">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <p>
          © {year} {site.name}
          <span className="text-faint"> · </span>
          <a href={site.sourceUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
            {dict.misc.sourceOn} ↗
          </a>
        </p>

        <div className="flex flex-wrap gap-4">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:text-accent">
              {s.label}
            </a>
          ))}
          <Link to="/bookmarks" className="no-underline hover:text-accent">
            {dict.nav.bookmarks}
          </Link>
        </div>
      </div>
    </footer>
  )
}
