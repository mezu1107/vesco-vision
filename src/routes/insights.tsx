import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Vesco Science" },
      { name: "description", content: "Perspectives on regenerative biotechnology and manufacturing practice." },
      { property: "og:title", content: "Insights — Vesco Science" },
      { property: "og:description", content: "Perspectives on regenerative biotechnology and manufacturing practice." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Vesco Science" title="Insights" lead="Perspectives on regenerative biotechnology and manufacturing practice." crumb={{ label: "Insights", homeLabel: "Home" }} />
      <Section>
        <SectionHeading eyebrow="Insights" title="Insights" intro="Perspectives on regenerative biotechnology and manufacturing practice." />
      </Section>
    </>
  );
}
