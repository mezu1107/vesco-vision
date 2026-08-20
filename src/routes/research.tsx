import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Development — Vesco Science" },
      {
        name: "description",
        content:
          "Exosome science, formulation engineering, stability and analytical method development at Vesco Science.",
      },
      { property: "og:title", content: "Research & Development — Vesco Science" },
      {
        property: "og:description",
        content: "Research areas and scientific capability behind Vesco Science products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t, tx } = useI18n();
  const areas = tx<string[]>("research.areas") ?? [];
  const team = tx<string[]>("research.team") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("research.eyebrow")}
        title={t("research.title")}
        lead={t("research.intro")}
        crumb={{ label: t("research.title"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <SectionHeading eyebrow={t("research.eyebrow")} title={t("research.areasTitle")} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a} delay={i * 60}>
              <div className="group h-full bg-card p-8 transition-colors hover:bg-secondary">
                <span className="font-display text-[0.75rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[1.1rem] font-semibold text-navy">{a}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading invert eyebrow={t("research.eyebrow")} title={t("research.teamTitle")} />
        <div className="mt-12 flex flex-wrap gap-3">
          {team.map((m) => (
            <span
              key={m}
              className="rounded-sm border border-white/15 px-5 py-2.5 text-[0.85rem] text-white/75"
            >
              {m}
            </span>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
