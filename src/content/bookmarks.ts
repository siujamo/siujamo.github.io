import type { BookmarkCategory } from "./types"

/*
 * ─────────────────────────────────────────────────────────────────────────
 *  Bookmarks — reading lists & tooling I reach for.
 *
 *  ⚠ TODO: the categories below are a starter kit. Replace / extend them with
 *  the blogs, libraries and DevOps tooling you actually follow.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const bookmarkCategories: BookmarkCategory[] = [
  {
    title: { en: "Blogs & writers", zh: "博客与作者" },
    items: [
      {
        title: "Julia Evans",
        href: "https://jvns.ca",
        desc: {
          en: "Debugging, systems and networking explained with wonderful zines.",
          zh: "用精美的 zine 讲解调试、系统与网络。",
        },
      },
      {
        title: "Martin Fowler",
        href: "https://martinfowler.com",
        desc: {
          en: "Software design, architecture and refactoring essays.",
          zh: "软件设计、架构与重构的文章。",
        },
      },
      {
        title: "Dan Luu",
        href: "https://danluu.com",
        desc: {
          en: "Long-form takes on performance, tooling and engineering culture.",
          zh: "关于性能、工具与工程文化的长文。",
        },
      },
    ],
  },
  {
    title: { en: "Open source & libraries", zh: "开源与库" },
    items: [
      {
        title: "awesome-* lists",
        href: "https://github.com/sindresorhus/awesome",
        desc: {
          en: "Curated starting points for exploring any ecosystem.",
          zh: "探索任何生态的精选清单入口。",
        },
      },
      {
        title: "GitHub Trending",
        href: "https://github.com/trending",
        desc: {
          en: "A quick pulse on what the community is building.",
          zh: "快速了解社区正在构建什么。",
        },
      },
    ],
  },
  {
    title: { en: "DevOps & tooling", zh: "DevOps 与工具" },
    items: [
      {
        title: "GitHub Actions docs",
        href: "https://docs.github.com/en/actions",
        desc: {
          en: "CI/CD reference for the workflow that ships this site.",
          zh: "发布本站所用工作流的 CI/CD 参考。",
        },
      },
      {
        title: "Gitea Actions docs",
        href: "https://docs.gitea.com/usage/actions/overview",
        desc: {
          en: "For the self-hosted Gitea instance at onixbyte.dev.",
          zh: "用于 onixbyte.dev 自托管的 Gitea 实例。",
        },
      },
      {
        title: "PostgreSQL docs",
        href: "https://www.postgresql.org/docs/",
        desc: {
          en: "The definitive reference for my go-to database.",
          zh: "我最常用数据库的权威文档。",
        },
      },
    ],
  },
  {
    title: { en: "References", zh: "参考资料" },
    items: [
      {
        title: "MDN Web Docs",
        href: "https://developer.mozilla.org",
        desc: {
          en: "Front-end platform reference — HTML, CSS, JavaScript.",
          zh: "前端平台参考——HTML、CSS、JavaScript。",
        },
      },
      {
        title: "Go by Example",
        href: "https://gobyexample.com",
        desc: { en: "Hands-on Go snippets.", zh: "上手即用的 Go 示例。" },
      },
    ],
  },
]
