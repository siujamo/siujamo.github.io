import { PageHeader } from "@/components/PageHeader"
import { Seo } from "@/components/Seo"
import { h2, page } from "@/components/ui"
import { gearCategories } from "@/content/uses"
import { useText } from "@/i18n/useI18n"

const copy = {
  eyebrow: { en: "// uses", zh: "// 极客装备" },
  title: { en: "/uses", zh: "/uses" },
  lead: {
    en: "The gear I reach for every day — machines, editors, terminal and tooling. A living list, updated as things change.",
    zh: "我每天都会用到的东西——设备、编辑器、终端与工具链。这是一份会持续更新的清单。",
  },
}

export default function Uses() {
  const t = useText()

  return (
    <div className={page}>
      <Seo page="uses" />
      <PageHeader eyebrow={t(copy.eyebrow)} title={t(copy.title)} lead={t(copy.lead)} />

      <div className="space-y-14">
        {gearCategories.map((category) => (
          <section key={category.title.en}>
            <h2 className={h2}>{t(category.title)}</h2>

            {category.items.length > 0 ? (
              <ul className="mt-4 list-none space-y-4 p-0">
                {category.items.map((item) => (
                  <li key={item.name}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono hover:text-accent">
                        {item.name}
                      </a>
                    ) : (
                      <span className="font-mono">{item.name}</span>
                    )}
                    <p className="mt-0.5 text-muted">{t(item.detail)}</p>
                  </li>
                ))}
              </ul>
            ) : category.hint ? (
              <p className="mt-4 font-mono text-sm text-faint">{t(category.hint)}</p>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  )
}
