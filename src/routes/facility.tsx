import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal, ProcessFlow } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import vials from "@/assets/vials.jpg";

export const Route = createFileRoute("/facility")({
  head: () => ({
    meta: [
      { title: "Manufacturing Facility — Vesco Science" },
      {
        name: "description",
        content:
          "R&D laboratory, cleanroom, production, aseptic filling, QC laboratory, controlled storage and cold chain in one Korean facility.",
      },
      { property: "og:title", content: "Manufacturing Facility — Vesco Science" },
      {
        property: "og:description",
        content: "Where a validated laboratory process becomes a repeatable commercial batch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Area = { title: string; body: string };

function Page() {
  const { t, tx } = useI18n();
  const areas = tx<Area[]>("facility.areas") ?? [];
  const flow = tx<string[]>("quality.flow") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("facility.eyebrow")}
        title={t("facility.title")}
        lead={t("facility.intro")}
        image={vials}
        imageAlt={t("facility.imageAlt")}
        crumb={{ label: t("facility.eyebrow"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <article className="h-full bg-card p-8">
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[1.1rem] font-semibold text-navy">{a.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          invert
          eyebrow={t("quality.eyebrow")}
          title={t("quality.title")}
          intro={t("quality.intro")}
        />
        <div className="mt-12">
          <ProcessFlow steps={flow} invert />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
