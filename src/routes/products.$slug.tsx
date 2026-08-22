import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { en } from "@/locales/en";

const ALL_SLUGS = en.products.categories.flatMap((c) => c.items.map((i) => i.slug));

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    if (!ALL_SLUGS.includes(params.slug as (typeof ALL_SLUGS)[number])) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const label = (params.slug ?? "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const title = `${label} — Vesco Science Product`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: `${label}: overview, manufacturing process, quality parameters, storage and documentation available from Vesco Science.`,
        },
        { property: "og:title", content: title },
        { property: "og:description", content: `${label} manufactured in Korea under OEM/ODM.` },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Page,
});

type Category = { key: string; title: string; items: { slug: string; name: string }[] };

function Page() {
  const { slug } = Route.useParams();
  const { t, tx } = useI18n();
  const categories = tx<Category[]>("products.categories") ?? [];
  const category = categories.find((c) => c.items.some((i) => i.slug === slug));
  const item = category?.items.find((i) => i.slug === slug);
  const name = item?.name ?? slug.replace(/-/g, " ");

  const s = (k: string) => t(`products.detail.sections.${k}`);
  const rows: { label: string; value: string }[] = [
    { label: s("overview"), value: t("products.detail.genericOverview") },
    { label: s("source"), value: t("products.detail.genericSource") },
    { label: s("composition"), value: t("products.detail.genericComposition") },
    { label: s("process"), value: t("products.detail.genericProcess") },
    { label: s("specs"), value: t("products.detail.genericSpecs") },
    { label: s("qualityParams"), value: t("products.detail.genericQuality") },
    { label: s("storage"), value: t("products.detail.genericStorage") },
    { label: s("packaging"), value: t("products.detail.genericPackaging") },
    { label: s("application"), value: t("products.detail.genericApplication") },
    { label: s("formats"), value: t("products.detail.genericFormats") },
    { label: s("documentation"), value: t("products.detail.genericDocs") },
  ];

  const buttons = ["coa", "tds", "info", "sample"] as const;

  return (
    <>
      <PageHero
        eyebrow={category?.title ?? t("products.eyebrow")}
        title={name}
        lead={t("products.detail.genericOverview")}
        crumb={{ label: name, homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow={t("products.eyebrow")} title={s("overview")} />
            <dl className="mt-10 grid gap-px bg-hairline">
              {rows.map((r) => (
                <div key={r.label} className="grid gap-2 bg-card p-6 sm:grid-cols-[200px_1fr]">
                  <dt className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science">
                    {r.label}
                  </dt>
                  <dd className="text-[0.95rem] leading-relaxed text-muted-foreground">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-[0.85rem] text-muted-foreground">
              {t("products.detail.demoNote")}
            </p>
          </div>

          <Reveal>
            <aside className="card-flat sticky top-28 p-8">
              <h3 className="text-[1.05rem] font-semibold text-navy">{s("documentation")}</h3>
              <div className="mt-6 grid gap-3">
                {buttons.map((b) => (
                  <Link
                    key={b}
                    to="/contact"
                    className="flex items-center justify-between border border-hairline px-5 py-3.5 text-[0.82rem] font-medium text-navy transition-colors hover:border-teal hover:text-science"
                  >
                    {t(`products.detail.buttons.${b}`)}
                    <span className="h-px w-5 bg-teal" />
                  </Link>
                ))}
              </div>
              {category ? (
                <>
                  <h4 className="mt-9 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science">
                    {category.title}
                  </h4>
                  <ul className="mt-4 grid gap-2">
                    {category.items
                      .filter((i) => i.slug !== slug)
                      .map((i) => (
                        <li key={i.slug}>
                          <Link
                            to="/products/$slug"
                            params={{ slug: i.slug }}
                            className="text-[0.9rem] text-muted-foreground transition-colors hover:text-science"
                          >
                            {i.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </>
              ) : null}
            </aside>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
