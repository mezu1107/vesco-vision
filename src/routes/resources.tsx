import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Vesco Science" },
      { name: "description", content: "Technical documentation available on request." },
      { property: "og:title", content: "Resources — Vesco Science" },
      { property: "og:description", content: "Technical documentation available on request." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Vesco Science" title="Resources" lead="Technical documentation available on request." crumb={{ label: "Resources", homeLabel: "Home" }} />
      <Section>
        <SectionHeading eyebrow="Resources" title="Resources" intro="Technical documentation available on request." />
      </Section>
    </>
  );
}
