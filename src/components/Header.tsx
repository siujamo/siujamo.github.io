import { Link, NavLink } from "react-router"
import { site } from "@/content/site"
import { useDict } from "@/i18n/useI18n"
import { LangToggle } from "./LangToggle"

const NAV_ROUTES = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/projects", key: "projects" },
  { to: "/resume", key: "resume" },
  { to: "/uses", key: "uses" },
  { to: "/bookmarks", key: "bookmarks" },
  { to: "/essays", key: "essays" },
] as const

export function Header() {
  const dict = useDict()

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-canvas/85 backdrop-blur-md print:hidden">
      <div className="wrap flex h-16 items-center gap-4">
        <Link
          to="/"
          className="shrink-0 font-mono text-lg font-bold tracking-tight no-underline hover:text-fg">
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        <nav
          aria-label="Main"
          className="ml-auto flex items-center gap-0.5 overflow-x-auto whitespace-nowrap scrollbar-none">
          {NAV_ROUTES.map(({ to, key }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `inline-block rounded-md px-2.5 py-1.5 text-sm no-underline transition-colors hover:bg-soft hover:text-fg ${
                  isActive ? "bg-accentsoft text-fg" : "text-muted"
                }`
              }>
              {dict.nav[key]}
            </NavLink>
          ))}
        </nav>

        <LangToggle />
      </div>
    </header>
  )
}
