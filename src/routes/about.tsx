import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import cleanroom from "@/assets/cleanroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vesco Science — Korean Regenerative Biotechnology" },
      {
        name: "description",
        content:
          "Vesco Science is a Korea-based biotechnology company uniting exosome R&D, regenerative formulation, manufacturing and quality control under one operation.",
      },
      { property: "og:title", content: "About Vesco Science — Korean Regenerative Biotechnology" },
      {
        property: "og:description",
        content:
          "Research, formulation, manufacturing and quality control handled as one connected operation in Korea.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Block = { title: string; body: string };

function Page() {
  const { t, tx } = useI18n();
  const blocks = tx<Block[]>("pages.about.blocks") ?? [];
  const points = tx<string[]>("intro.points") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("pages.about.eyebrow")}
        title={t("pages.about.title")}
        lead={t("pages.about.lead")}
        image={cleanroom}
        imageAlt={t("intro.imageAlt")}
        crumb={{ label: t("nav.about"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHeading
              eyebrow={t("intro.eyebrow")}
              title={t("intro.title")}
              intro={t("intro.body1")}
            />
            <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t("intro.body2")}
            </p>
          </div>
          <Reveal>
            <ul className="grid gap-px bg-hairline">
              {points.map((p) => (
                <li key={p} className="bg-card px-6 py-4 text-[0.95rem] text-navy">
                  <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-8 md:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <article className="card-flat h-full p-8">
                <h3 className="text-[1.15rem] font-semibold text-navy">{b.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow={t("research.eyebrow")}
          title={t("research.title")}
          intro={t("research.intro")}
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/research"
            className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
          >
            {t("research.title")}
          </Link>
          <Link
            to="/facility"
            className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
          >
            {t("facility.title")}
          </Link>
          <Link
            to="/quality"
            className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
          >
            {t("quality.eyebrow")}
          </Link>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
