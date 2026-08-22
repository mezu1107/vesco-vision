import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Download Center — Vesco Science" },
      {
        name: "description",
        content:
          "Product catalogue, company profile, OEM/ODM brochure and batch-specific certificates of analysis for verified partners.",
      },
      { property: "og:title", content: "Download Center — Vesco Science" },
      {
        property: "og:description",
        content: "Corporate and technical documents for Vesco Science partners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Doc = { title: string; meta: string; restricted: boolean };

function Page() {
  const { t, tx } = useI18n();
  const docs = tx<Doc[]>("resources.docs") ?? [];
  const [modal, setModal] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const close = () => {
    setModal(null);
    setSent(false);
  };

  return (
    <>
      <PageHero
        eyebrow={t("resources.eyebrow")}
        title={t("resources.title")}
        lead={t("resources.intro")}
        crumb={{ label: t("nav.resources"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <SectionHeading eyebrow={t("resources.eyebrow")} title={t("resources.title")} />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2">
          {docs.map((d, i) => (
            <Reveal key={d.title} delay={i * 60}>
              <div className="flex h-full flex-col bg-card p-8">
                <span
                  className={`inline-flex w-fit rounded-sm px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase ${
                    d.restricted ? "bg-navy/10 text-navy" : "bg-teal/15 text-science"
                  }`}
                >
                  {d.restricted ? t("resources.restricted") : t("resources.open")}
                </span>
                <h3 className="mt-6 text-[1.15rem] font-semibold text-navy">{d.title}</h3>
                <p className="mt-2 text-[0.85rem] text-muted-foreground">{d.meta}</p>
                <button
                  onClick={() => setModal(d.title)}
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
                >
                  {d.restricted ? t("common.requestAccess") : t("common.download")}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-[0.85rem] text-muted-foreground">{t("resources.demoNote")}</p>
      </Section>

      {modal ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/70 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={t("resources.modal.title")}
          onClick={close}
        >
          <div
            className="w-full max-w-md border border-hairline bg-card p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {sent ? (
              <>
                <h3 className="text-[1.2rem] font-semibold text-navy">
                  {t("resources.modal.success")}
                </h3>
                <button
                  onClick={close}
                  className="mt-8 rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]"
                >
                  {t("resources.modal.cancel")}
                </button>
              </>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <p className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science">
                  {modal}
                </p>
                <h3 className="mt-3 text-[1.25rem] font-semibold text-navy">
                  {t("resources.modal.title")}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {t("resources.modal.body")}
                </p>
                <div className="mt-6 grid gap-4">
                  {[
                    { k: "name", type: "text" },
                    { k: "company", type: "text" },
                    { k: "email", type: "email" },
                  ].map((f) => (
                    <label key={f.k} className="grid gap-2">
                      <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-navy/70">
                        {t(`resources.modal.${f.k}`)}
                      </span>
                      <input
                        required
                        type={f.type}
                        className="border border-hairline bg-background px-4 py-3 text-[0.95rem] text-navy outline-none focus:border-teal"
                      />
                    </label>
                  ))}
                </div>
                <div className="mt-7 flex gap-3">
                  <button
                    type="submit"
                    className="rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]"
                  >
                    {t("resources.modal.send")}
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-navy"
                  >
                    {t("resources.modal.cancel")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}

      <CTABand />
    </>
  );
}
