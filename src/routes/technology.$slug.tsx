import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  Reveal,
  ProcessFlow,
  TealButton,
} from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import exosomeImg from "@/assets/exosome.jpg";

const SLUGS = ["exosome", "pdrn-pn", "lyophilization", "formulation", "cold-chain", "custom"];

export const Route = createFileRoute("/technology/$slug")({
  loader: ({ params }) => {
    if (!SLUGS.includes(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const label = (params.slug ?? "").replace(/-/g, " ");
    const title = `${label.replace(/\b\w/g, (c) => c.toUpperCase())} — Vesco Science Technology`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: `Vesco Science ${label} platform: development approach, process control and finished-product implications.`,
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: `Vesco Science ${label} platform for regenerative and aesthetic manufacturing.`,
        },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Page,
});

type Block = { title: string; body: string };
type Card = { num: string; slug: string; title: string; body: string };
type Group = { title: string; items: string[] };

function Page() {
  const { slug } = Route.useParams();
  const { t, tx } = useI18n();
  const cards = tx<Card[]>("technology.cards") ?? [];
  const card = cards.find((c) => c.slug === slug);

  const pageKey =
    slug === "pdrn-pn"
      ? "pages.pdrnPage"
      : slug === "lyophilization"
        ? "pages.lyoPage"
        : slug === "formulation"
          ? "pages.formulationPage"
          : null;

  const blocks = pageKey ? (tx<Block[]>(`${pageKey}.blocks`) ?? []) : [];
  const isExosome = slug === "exosome";
  const groups = tx<Group[]>("characterization.groups") ?? [];
  const steps = tx<string[]>("exosome.steps") ?? [];

  const title = pageKey ? t(`${pageKey}.title`) : isExosome ? t("exosome.title") : (card?.title ?? slug);
  const lead = pageKey
    ? t(`${pageKey}.lead`)
    : isExosome
      ? t("pages.exosomePage.lead")
      : (card?.body ?? "");

  return (
    <>
      <PageHero
        eyebrow={t("technology.eyebrow")}
        title={title}
        lead={lead}
        image={isExosome ? exosomeImg : undefined}
        imageAlt={t("exosome.imageAlt")}
        crumb={{ label: title, homeLabel: t("common.breadcrumbHome") }}
      />

      {isExosome ? (
        <>
          <Section>
            <div className="grid gap-12 lg:grid-cols-2">
              <SectionHeading
                eyebrow={t("exosome.eyebrow")}
                title={t("exosome.title")}
                intro={t("exosome.body1")}
              />
              <p className="text-[1.0625rem] leading-relaxed text-muted-foreground lg:pt-24">
                {t("exosome.body2")}
              </p>
            </div>
          </Section>

          <Section tone="navy">
            <SectionHeading invert eyebrow={t("exosome.eyebrow")} title={t("exosome.processTitle")} />
            <div className="mt-12">
              <ProcessFlow steps={steps} invert />
            </div>
          </Section>

          <Section tone="white">
            <SectionHeading
              eyebrow={t("characterization.eyebrow")}
              title={t("characterization.title")}
              intro={t("characterization.intro")}
            />
            <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {groups.map((g, i) => (
                <Reveal key={g.title} delay={i * 60}>
                  <div className="h-full bg-card p-7">
                    <h3 className="text-[1.05rem] font-semibold text-navy">{g.title}</h3>
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
        </>
      ) : (
        <Section>
          <SectionHeading
            eyebrow={t("technology.eyebrow")}
            title={title}
            intro={card?.body ?? t("technology.intro")}
          />
          {blocks.length ? (
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {blocks.map((b, i) => (
                <Reveal key={b.title} delay={i * 70}>
                  <article className="card-flat h-full p-8">
                    <h3 className="text-[1.1rem] font-semibold text-navy">{b.title}</h3>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {b.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : null}
        </Section>
      )}

      <Section tone="muted">
        <SectionHeading eyebrow={t("technology.eyebrow")} title={t("technology.title")} />
        <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {cards
            .filter((c) => c.slug !== slug)
            .map((c) => (
              <Link
                key={c.slug}
                to="/technology/$slug"
                params={{ slug: c.slug }}
                className="group bg-card p-7 transition-colors hover:bg-card/60"
              >
                <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                  {c.num}
                </span>
                <h3 className="mt-4 text-[1.02rem] font-semibold text-navy group-hover:text-science">
                  {c.title}
                </h3>
              </Link>
            ))}
        </div>
        <div className="mt-10">
          <TealButton to="/products">{t("products.title")}</TealButton>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
