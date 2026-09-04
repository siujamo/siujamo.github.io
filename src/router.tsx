import type { ComponentType } from "react"
import { createHashRouter } from "react-router"
import { ErrorPage } from "@/components/ErrorPage"
import { Layout } from "@/components/Layout"
import { LoadingFallback } from "@/components/LoadingFallback"

/**
 * Route-level lazy loading: defers each page chunk until it is needed and
 * adapts it to the data-router `lazy` contract ({ Component }).
 */
function lazyRoute(importer: () => Promise<{ default: ComponentType }>) {
  return async () => {
    const module = await importer()
    return { Component: module.default }
  }
}

/**
 * Main application router (React Router data router).
 *
 * `createHashRouter` is used instead of `createBrowserRouter` because the
 * site is served as static GitHub Pages with no server rewrites — hash URLs
 * survive hard refreshes on any route.
 */
const router = createHashRouter(
  [
    {
      path: "/",
      element: <Layout />,
      hydrateFallbackElement: <LoadingFallback />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, lazy: lazyRoute(() => import("@/pages/Home")) },
        { path: "about", lazy: lazyRoute(() => import("@/pages/About")) },
        { path: "projects", lazy: lazyRoute(() => import("@/pages/Projects")) },
        { path: "resume", lazy: lazyRoute(() => import("@/pages/Resume")) },
        { path: "uses", lazy: lazyRoute(() => import("@/pages/Uses")) },
        { path: "bookmarks", lazy: lazyRoute(() => import("@/pages/Bookmarks")) },
        { path: "essays", lazy: lazyRoute(() => import("@/pages/Essays")) },
        { path: "essays/:slug", lazy: lazyRoute(() => import("@/pages/EssayView")) },
        { path: "*", lazy: lazyRoute(() => import("@/pages/NotFound")) },
      ],
    },
  ],
  { basename: "/" },
)

export default router
