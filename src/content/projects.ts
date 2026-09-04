import type { Project } from "./types"

/*
 * ─────────────────────────────────────────────────────────────────────────
 *  Portfolio ("Projects / Portfolio").
 *
 *  Add further projects as they ship by copying one of the objects below and
 *  filling in the fields — the grid renders however many you provide.
 *
 *  `impact` is optional but recommended: concrete, defensible outcomes
 *  ("cut query time by ~50%") beat vague adjectives.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const projects: Project[] = [
  {
    id: "spotlight-wallpaper-copier",
    name: "Spotlight Wallpaper Copier",
    kind: { en: "Desktop CLI tool", zh: "桌面命令行工具" },
    tagline: {
      en: "One command to rescue Windows Spotlight wallpapers",
      zh: "一条命令救出 Windows 聚焦壁纸",
    },
    summary: {
      en: "A tiny .NET 9 CLI that grabs the current Spotlight lock-screen wallpaper from TranscodedWallpaper and copies it into the user’s Downloads folder — with collision-proof file naming and an MSI installer.",
      zh: "轻量 .NET 9 CLI：从 TranscodedWallpaper 取出当前聚焦锁屏壁纸，拷贝到用户的「下载」目录，自带防重命名与 MSI 安装包。",
    },
    highlights: [
      {
        en: "MSI packaging — a distributable installer for non-technical users.",
        zh: "MSI 打包——面向普通用户的即装即用安装包。",
      },
      {
        en: "Custom naming — --dst-file-name flag (defaults to UntitledWallpaper).",
        zh: "自定义命名——支持 --dst-file-name 参数（默认为 UntitledWallpaper）。",
      },
      {
        en: "Never overwrites — existing files get a numeric suffix, e.g. MyWallpaper (1).jpg.",
        zh: "绝不覆盖——同名文件自动追加序号，如 MyWallpaper (1).jpg。",
      },
    ],
    impact: [
      {
        en: "Shipped as an MSI so end users can install and run it without a build toolchain.",
        zh: "以 MSI 形式交付，终端用户无需构建工具链即可安装运行。",
      },
    ],
    stack: ["C#", ".NET 9", "MSI"],
    links: [{ label: "GitHub", href: "https://github.com/siujamo/SpotlightWallperCopier" }],
  },
  {
    id: "ahsarah-guide",
    name: "Ahasrah Guide",
    kind: { en: "Community project", zh: "社区项目" },
    tagline: {
      en: "Community guide for Delta Force (三角洲行动)",
      zh: "《三角洲行动》社区攻略",
    },
    summary: {
      en: "A community-maintained guide covering tactics, weapon statistics, map callouts and meta analysis — built to serve newcomers and seasoned operators alike.",
      zh: "由社区持续维护的攻略：战术打法、枪械数值、地图点位与版本 meta 分析，兼顾新手与老玩家。",
    },
    highlights: [
      {
        en: "Weapon stats & meta analysis across balance patches.",
        zh: "持续跟进平衡性补丁的枪械数值与 meta 分析。",
      },
      {
        en: "Map callouts and movement/positioning notes.",
        zh: "地图报点与走位 / 架点要点。",
      },
      {
        en: "Onboarding content that lowers the barrier for new players.",
        zh: "降低新手门槛的上手内容。",
      },
    ],
    stack: ["Community", "Content", "Data analysis"],
  },
]
