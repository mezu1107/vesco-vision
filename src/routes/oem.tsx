import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  Reveal,
  TealButton,
} from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import cleanroom from "@/assets/cleanroom.jpg";

export const Route = createFileRoute("/oem")({
  head: () => ({
    meta: [
      { title: "OEM / ODM Manufacturing — Vesco Science" },
      {
        name: "description",
        content:
          "From concept to commercialization: OEM manufacturing, ODM development, prototyping, validation, regulatory documentation and global shipment.",
      },
      { property: "og:title", content: "OEM / ODM Manufacturing — Vesco Science" },
      {
        property: "og:description",
        content: "Your idea. Our science. One integrated development pathway from Korea.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Step = { num: string; title: string; body: string };

function Page() {
  const { t, tx } = useI18n();
  const oemSteps = tx<string[]>("oem.oemSteps") ?? [];
  const odmSteps = tx<string[]>("oem.odmSteps") ?? [];
  const process = tx<Step[]>("oem.process") ?? [];
  const inputs = tx<string[]>("oem.custom.inputs") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("oem.eyebrow")}
        title={t("oem.title")}
        lead={t("oem.subtitle")}
        image={cleanroom}
        imageAlt={t("intro.imageAlt")}
        crumb={{ label: t("nav.oem"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <div className="grid gap-px bg-hairline lg:grid-cols-2">
          {[
            { title: t("oem.oemTitle"), body: t("oem.oemBody"), steps: oemSteps },
            { title: t("oem.odmTitle"), body: t("oem.odmBody"), steps: odmSteps },
          ].map((col, i) => (
            <Reveal key={col.title} delay={i * 80}>
              <div className="h-full bg-card p-10">
                <h2 className="font-display text-[1.6rem] font-semibold text-navy">{col.title}</h2>
                <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">{col.body}</p>
                <ol className="mt-8 grid gap-3">
                  {col.steps.map((s, si) => (
                    <li key={s} className="flex items-center gap-4 border-b border-hairline pb-3">
                      <span className="font-display text-[0.72rem] font-bold tracking-[0.16em] text-teal">
                        {String(si + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.95rem] text-navy">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          invert
          eyebrow={t("oem.processEyebrow")}
          title={t("oem.processTitle")}
        />
        <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.num} delay={i * 50}>
              <article className="h-full bg-white/[0.04] p-7 outline outline-white/10">
                <span className="font-display text-[0.75rem] font-bold tracking-[0.18em] text-teal">
                  {p.num}
                </span>
                <h3 className="mt-4 text-[1.05rem] font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/60">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow={t("oem.custom.eyebrow")}
          title={t("oem.custom.title")}
          intro={t("oem.custom.intro")}
        />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {inputs.map((inp) => (
            <div key={inp} className="bg-card px-6 py-5 text-[0.95rem] text-navy">
              <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
              {inp}
            </div>
          ))}
        </div>
        <div className="mt-12">
          <TealButton to="/contact">{t("oem.custom.cta")}</TealButton>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
