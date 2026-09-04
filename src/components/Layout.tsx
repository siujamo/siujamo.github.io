import { useEffect } from "react"
import { Outlet, useLocation } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-50 focus:rounded-br-md focus:bg-accent focus:px-4 focus:py-2 focus:text-onaccent">
        Skip to content
      </a>
      <Header />
      <main id="main" className="min-h-[calc(100dvh-4rem)]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
