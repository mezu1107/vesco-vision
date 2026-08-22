import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  Reveal,
  ProcessFlow,
} from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import qcLab from "@/assets/qc-lab.jpg";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Management — Vesco Science" },
      {
        name: "description",
        content:
          "Documented control from raw material intake through in-process QC, batch release, storage and distribution, with full traceability.",
      },
      { property: "og:title", content: "Quality Management — Vesco Science" },
      {
        property: "og:description",
        content: "Quality from source to shipment: control points defined, executed and recorded.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t, tx } = useI18n();
  const flow = tx<string[]>("quality.flow") ?? [];
  const systems = tx<string[]>("quality.systems") ?? [];
  const groups = tx<{ title: string; items: string[] }[]>("characterization.groups") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("quality.eyebrow")}
        title={t("quality.title")}
        lead={t("quality.intro")}
        image={qcLab}
        imageAlt={t("quality.imageAlt")}
        crumb={{ label: t("nav.quality"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <SectionHeading eyebrow={t("quality.eyebrow")} title={t("quality.title")} />
        <div className="mt-12">
          <ProcessFlow steps={flow} />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow={t("quality.eyebrow")} title={t("quality.systemsTitle")} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((sys, i) => (
            <Reveal key={sys} delay={i * 50}>
              <div className="h-full bg-card p-7">
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[0.98rem] font-medium text-navy">{sys}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow={t("characterization.eyebrow")}
          title={t("characterization.title")}
          intro={t("characterization.intro")}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="card-flat h-full p-7">
                <h3 className="text-[1.02rem] font-semibold text-navy">{g.title}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-[0.9rem] text-muted-foreground">
                      <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
