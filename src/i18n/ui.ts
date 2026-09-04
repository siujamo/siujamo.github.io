import type { Lang } from "../lib/types"

/** Shared UI chrome strings (nav, buttons, labels) — keyed by language. */
export interface UIDict {
  nav: {
    home: string
    about: string
    projects: string
    resume: string
    uses: string
    bookmarks: string
    essays: string
  }
  actions: {
    viewGitHub: string
    downloadResume: string
    viewAll: string
    readPost: string
    backToEssays: string
  }
  misc: {
    siteTitle: string
    siteDescription: string
    builtWith: string
    sourceOn: string
    lastUpdated: string
    addYours: string
  }
  seo: Record<PageKey, string>
}

export type PageKey = "home" | "about" | "projects" | "resume" | "uses" | "bookmarks" | "essays"

export const ui: Record<Lang, UIDict> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      uses: "Uses",
      bookmarks: "Bookmarks",
      essays: "Essays",
    },
    actions: {
      viewGitHub: "View on GitHub",
      downloadResume: "Download PDF",
      viewAll: "View all",
      readPost: "Read post",
      backToEssays: "← All essays",
    },
    misc: {
      siteTitle: "siujamo — Full-Stack · Architecture · DevOps",
      siteDescription:
        "Personal site of siujamo — full-stack developer, software architect and DevOps engineer.",
      builtWith: "Built with React & TypeScript",
      sourceOn: "Source on GitHub",
      lastUpdated: "Last updated",
      addYours: "TODO: replace this placeholder with your own content.",
    },
    seo: {
      home: "siujamo — Full-Stack · Architecture · DevOps",
      about: "About — siujamo",
      projects: "Projects — siujamo",
      resume: "Resume — siujamo",
      uses: "/uses — siujamo",
      bookmarks: "Bookmarks — siujamo",
      essays: "Essays — siujamo",
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我",
      projects: "项目",
      resume: "简历",
      uses: "/uses",
      bookmarks: "书签",
      essays: "随笔",
    },
    actions: {
      viewGitHub: "在 GitHub 上查看",
      downloadResume: "下载 PDF",
      viewAll: "查看全部",
      readPost: "阅读",
      backToEssays: "← 全部随笔",
    },
    misc: {
      siteTitle: "siujamo — 全栈 · 架构 · DevOps",
      siteDescription: "siujamo 的个人主页 — 全栈开发、软件架构与 DevOps 工程师。",
      builtWith: "使用 React 与 TypeScript 构建",
      sourceOn: "源码见 GitHub",
      lastUpdated: "最近更新",
      addYours: "TODO：请把这里的占位内容替换成你自己的。",
    },
    seo: {
      home: "siujamo — 全栈 · 架构 · DevOps",
      about: "关于我 — siujamo",
      projects: "项目 — siujamo",
      resume: "简历 — siujamo",
      uses: "/uses — siujamo",
      bookmarks: "书签 — siujamo",
      essays: "随笔 — siujamo",
    },
  },
}
