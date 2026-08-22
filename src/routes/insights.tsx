import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import molecular from "@/assets/molecular.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Science & Insights — Vesco Science" },
      {
        name: "description",
        content:
          "Perspectives on exosome science, PDRN/PN platforms, lyophilization, Korean biotechnology manufacturing and regulatory documentation.",
      },
      { property: "og:title", content: "Science & Insights — Vesco Science" },
      {
        property: "og:description",
        content: "Articles on regenerative biotechnology and manufacturing practice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Article = { category: string; title: string; excerpt: string };

function Page() {
  const { t, tx } = useI18n();
  const categories = tx<string[]>("insights.categories") ?? [];
  const articles = tx<Article[]>("insights.articles") ?? [];
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? articles.filter((a) => a.category === active) : articles;

  return (
    <>
      <PageHero
        eyebrow={t("insights.eyebrow")}
        title={t("insights.title")}
        lead={t("insights.intro")}
        image={molecular}
        imageAlt={t("exosome.imageAlt")}
        crumb={{ label: t("insights.eyebrow"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <SectionHeading eyebrow={t("insights.eyebrow")} title={t("insights.title")} />

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActive(null)}
            className={`rounded-sm border px-4 py-2 text-[0.78rem] font-medium transition-colors ${
              active === null
                ? "border-teal bg-teal text-[#05231f]"
                : "border-hairline text-navy hover:border-teal hover:text-science"
            }`}
          >
            {t("common.viewAll")}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-sm border px-4 py-2 text-[0.78rem] font-medium transition-colors ${
                active === c
                  ? "border-teal bg-teal text-[#05231f]"
                  : "border-hairline text-navy hover:border-teal hover:text-science"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <article className="card-flat group flex h-full flex-col p-8">
                <span className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science">
                  {a.category}
                </span>
                <h3 className="mt-5 text-[1.15rem] leading-snug font-semibold text-navy">
                  {a.title}
                </h3>
                <p className="mt-4 flex-1 text-[0.93rem] leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-science">
                  <span className="h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" />
                  {t("common.readMore")}
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-[0.85rem] text-muted-foreground">{t("insights.note")}</p>
      </Section>

      <CTABand />
    </>
  );
}
