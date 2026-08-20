import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import {
  Eyebrow,
  NumberedCard,
  ProcessFlow,
  Reveal,
  Section,
  SectionHeading,
  Stat,
  TealButton,
} from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import heroLab from "@/assets/hero-lab.jpg";
import exosomeImg from "@/assets/exosome.jpg";
import cleanroom from "@/assets/cleanroom.jpg";
import vials from "@/assets/vials.jpg";
import qcLab from "@/assets/qc-lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vesco Science — Korean Regenerative Biotechnology & OEM/ODM" },
      {
        name: "description",
        content:
          "Vesco Science develops and manufactures exosome, PDRN/PN and regenerative formulations in Korea, with OEM/ODM, lyophilization and cold chain capability for global partners.",
      },
      { property: "og:title", content: "Vesco Science — Advanced Regenerative Biotechnology" },
      {
        property: "og:description",
        content:
          "From cellular science to scalable manufacturing: exosome technology, PDRN/PN platforms and OEM/ODM development from Korea.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, tx } = useI18n();

  const capabilities = tx<{ title: string; body: string }[]>("capabilities.items");
  const metrics = tx<{ label: string; value: string }[]>("capabilities.metrics");
  const techCards = tx<{ num: string; slug: string; title: string; body: string }[]>(
    "technology.cards",
  );
  const introPoints = tx<string[]>("intro.points");
  const facilityAreas = tx<{ title: string; body: string }[]>("facility.areas");
  const qualityFlow = tx<string[]>("quality.flow");
  const productCats = tx<{ key: string; title: string; items: { slug: string; name: string }[] }[]>(
    "products.categories",
  );

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-navy-deep">
        <img
          src={heroLab}
          alt={t("hero.imageAlt")}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          style={{ animation: "vs-slow-zoom 26s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/30" />
        <div className="absolute inset-0 navy-grid opacity-40" />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 pt-28 pb-24 md:px-10">
          <Reveal>
            <Eyebrow invert>{t("hero.eyebrow")}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 max-w-4xl text-[clamp(2.4rem,5.6vw,4.4rem)] leading-[1.03] font-semibold text-white">
              {t("hero.title")}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 font-display text-[clamp(1.05rem,1.7vw,1.4rem)] text-teal">
              {t("hero.subtitle")}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70">
              {t("hero.body")}
            </p>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-11 flex flex-wrap gap-3">
              <TealButton to="/technology">{t("hero.ctaPrimary")}</TealButton>
              <TealButton to="/oem" variant="ghost">
                {t("hero.ctaSecondary")}
              </TealButton>
            </div>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent" />
      </section>

      {/* ---------- CAPABILITIES ---------- */}
      <Section tone="white">
        <Reveal>
          <SectionHeading eyebrow={t("capabilities.eyebrow")} title={t("capabilities.title")} />
        </Reveal>
        <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="h-full border-t-2 border-teal/70 bg-background p-7">
                <h3 className="text-[1.02rem] font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-16 border border-hairline bg-background p-8 md:p-10">
            <h3 className="eyebrow">{t("capabilities.metricsTitle")}</h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {metrics.map((m) => (
                <Stat key={m.label} label={m.label} value={m.value} />
              ))}
            </div>
            <p className="mt-8 text-[0.8rem] text-muted-foreground">
              {t("capabilities.metricsNote")}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ---------- COMPANY INTRO ---------- */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <SectionHeading eyebrow={t("intro.eyebrow")} title={t("intro.title")} />
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                {t("intro.body1")}
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                {t("intro.body2")}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {introPoints.map((p) => (
                  <li
                    key={p}
                    className="border border-hairline bg-card px-3.5 py-2 text-[0.78rem] font-medium text-navy"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <TealButton to="/about" variant="outline">
                  {t("common.learnMore")}
                </TealButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <img
                src={cleanroom}
                alt={t("intro.imageAlt")}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 -left-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                <p className="eyebrow">{t("meta.company")}</p>
                <p className="mt-2 text-[0.9rem] text-navy">{t("meta.tagline")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- TECHNOLOGY ---------- */}
      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow={t("technology.eyebrow")}
            title={t("technology.title")}
            intro={t("technology.intro")}
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techCards.map((card, i) => (
            <Reveal key={card.slug} delay={i * 70}>
              <NumberedCard
                num={card.num}
                title={card.title}
                body={card.body}
                to="/technology/$slug"
                params={{ slug: card.slug }}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- EXOSOME FEATURE ---------- */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img
          src={exosomeImg}
          alt={t("exosome.imageAlt")}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/95 via-navy/85 to-navy-deep/95" />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow={t("exosome.eyebrow")}
              title={t("exosome.title")}
              invert
            />
          </Reveal>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <Reveal delay={100}>
              <p className="text-[1rem] leading-relaxed text-white/70">{t("exosome.body1")}</p>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-[1rem] leading-relaxed text-white/70">{t("exosome.body2")}</p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <h3 className="eyebrow mt-16 !text-teal">{t("exosome.processTitle")}</h3>
            <ol className="mt-6 grid gap-px sm:grid-cols-2 lg:grid-cols-5">
              {tx<string[]>("exosome.steps").map((step, i) => (
                <li key={step} className="bg-white/[0.05] p-5 outline outline-white/10">
                  <span className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2.5 text-[0.88rem] leading-snug text-white/85">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <TealButton to="/technology/$slug">{t("exosome.cta")}</TealButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PRODUCTS ---------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={t("products.eyebrow")}
            title={t("products.title")}
            intro={t("products.intro")}
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productCats.map((cat, i) => (
            <Reveal key={cat.key} delay={i * 80}>
              <div className="card-flat h-full p-7">
                <h3 className="text-[1.05rem] font-semibold text-navy">{cat.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to="/products/$slug"
                        params={{ slug: item.slug }}
                        className="text-[0.9rem] text-muted-foreground transition-colors hover:text-science"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-12">
            <TealButton to="/products" variant="outline">
              {t("common.viewAll")}
            </TealButton>
          </div>
        </Reveal>
      </Section>

      {/* ---------- FACILITY ---------- */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <img
              src={vials}
              alt={t("facility.imageAlt")}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow={t("facility.eyebrow")}
                title={t("facility.title")}
                intro={t("facility.intro")}
              />
              <dl className="mt-10 grid gap-px sm:grid-cols-2">
                {facilityAreas.map((area) => (
                  <div key={area.title} className="bg-background p-5 outline outline-hairline">
                    <dt className="text-[0.92rem] font-semibold text-navy">{area.title}</dt>
                    <dd className="mt-1.5 text-[0.85rem] text-muted-foreground">{area.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- QUALITY ---------- */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow={t("quality.eyebrow")}
                title={t("quality.title")}
                intro={t("quality.intro")}
              />
              <div className="mt-10">
                <ProcessFlow steps={qualityFlow} />
              </div>
              <div className="mt-10">
                <TealButton to="/quality" variant="outline">
                  {t("common.learnMore")}
                </TealButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={qcLab}
              alt={t("quality.imageAlt")}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
