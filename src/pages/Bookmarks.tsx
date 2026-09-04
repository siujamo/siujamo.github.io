import { PageHeader } from "@/components/PageHeader"
import { Seo } from "@/components/Seo"
import { h2, page } from "@/components/ui"
import { bookmarkCategories } from "@/content/bookmarks"
import { useText } from "@/i18n/useI18n"

const copy = {
  eyebrow: { en: "// bookmarks", zh: "// 书签" },
  title: { en: "Bookmarks", zh: "书签与工具清单" },
  lead: {
    en: "Blogs I read, libraries I admire and the DevOps tooling I lean on. Mostly a personal index — steal freely.",
    zh: "常读的博客、欣赏的开源库，以及我依赖的 DevOps 工具链。多半是个人索引，欢迎随意取用。",
  },
}

export default function Bookmarks() {
  const t = useText()

  return (
    <div className={page}>
      <Seo page="bookmarks" />
      <PageHeader eyebrow={t(copy.eyebrow)} title={t(copy.title)} lead={t(copy.lead)} />

      <div className="space-y-14">
        {bookmarkCategories.map((category) => (
          <section key={category.title.en}>
            <h2 className={h2}>{t(category.title)}</h2>
            <ul className="mt-4 list-none space-y-4 p-0">
              {category.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent">
                    {item.title} ↗
                  </a>
                  <p className="mt-0.5 text-muted">{t(item.desc)}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
