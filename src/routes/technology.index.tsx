import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal, NumberedCard, ProcessFlow } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import molecular from "@/assets/molecular.jpg";

export const Route = createFileRoute("/technology/")({
  head: () => ({
    meta: [
      { title: "Technology Platforms — Exosome, PDRN/PN, Lyophilization" },
      {
        name: "description",
        content:
          "Six in-house platforms: exosome technology, PDRN/PN, lyophilization, regenerative formulation, cold chain and custom development.",
      },
      { property: "og:title", content: "Technology Platforms — Vesco Science" },
      {
        property: "og:description",
        content: "Technology at the cellular level — six platforms behind every Vesco product.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Card = { num: string; slug: string; title: string; body: string };

function Page() {
  const { t, tx } = useI18n();
  const cards = tx<Card[]>("technology.cards") ?? [];
  const steps = tx<string[]>("exosome.steps") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("technology.eyebrow")}
        title={t("technology.title")}
        lead={t("pages.technologyIndex.lead")}
        image={molecular}
        imageAlt={t("exosome.imageAlt")}
        crumb={{ label: t("nav.technology"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <SectionHeading
          eyebrow={t("technology.eyebrow")}
          title={t("technology.title")}
          intro={t("technology.intro")}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <NumberedCard
                num={c.num}
                title={c.title}
                body={c.body}
                to="/technology/$slug"
                params={{ slug: c.slug }}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          invert
          eyebrow={t("exosome.eyebrow")}
          title={t("exosome.processTitle")}
          intro={t("exosome.body2")}
        />
        <div className="mt-12">
          <ProcessFlow steps={steps} invert />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
