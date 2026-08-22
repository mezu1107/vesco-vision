import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import vials from "@/assets/vials.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "B2B Product Catalogue — Exosome, PDRN/PN, Aesthetic" },
      {
        name: "description",
        content:
          "Vesco Science B2B catalogue: lyophilized exosome, PDRN/PN formulations, skin boosters, HA and peptide systems, and custom development.",
      },
      { property: "og:title", content: "B2B Product Catalogue — Vesco Science" },
      {
        property: "og:description",
        content: "A scientific catalogue organised by technology platform, supplied under OEM/ODM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Category = { key: string; title: string; items: { slug: string; name: string }[] };

function Page() {
  const { t, tx } = useI18n();
  const categories = tx<Category[]>("products.categories") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("products.eyebrow")}
        title={t("products.title")}
        lead={t("products.intro")}
        image={vials}
        imageAlt={t("facility.imageAlt")}
        crumb={{ label: t("nav.products"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <div className="grid gap-14">
          {categories.map((cat, ci) => (
            <Reveal key={cat.key} delay={ci * 60}>
              <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
                <div>
                  <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-[1.5rem] font-semibold text-navy">{cat.title}</h2>
                </div>
                <div className="grid gap-px bg-hairline sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <Link
                      key={item.slug}
                      to="/products/$slug"
                      params={{ slug: item.slug }}
                      className="group flex items-center justify-between bg-card px-6 py-6 transition-colors hover:bg-secondary"
                    >
                      <span className="text-[1rem] font-medium text-navy group-hover:text-science">
                        {item.name}
                      </span>
                      <span className="h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-14 text-[0.85rem] text-muted-foreground">
          {t("products.detail.demoNote")}
        </p>
      </Section>

      <CTABand />
    </>
  );
}
