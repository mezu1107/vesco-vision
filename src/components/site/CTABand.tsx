import { useI18n } from "@/lib/i18n";
import { Reveal, TealButton } from "./primitives";

export function CTABand() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="absolute inset-0 navy-grid opacity-60" />
      <div
        className="absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle,rgba(53,184,176,0.28),transparent 70%)" }}
      />
      <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-24">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end">
            <div>
              <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.14] font-semibold text-white">
                {t("cta.title")}
              </h2>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-white/65">
                {t("cta.body")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <TealButton to="/contact">{t("cta.primary")}</TealButton>
              <TealButton to="/oem" variant="ghost">
                {t("cta.secondary")}
              </TealButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
