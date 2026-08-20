import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Compliance — Vesco Science" },
      { name: "description", content: "Quality systems, validation and documentation." },
      { property: "og:title", content: "Quality & Compliance — Vesco Science" },
      { property: "og:description", content: "Quality systems, validation and documentation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Vesco Science"
        title="Quality & Compliance"
        lead="Quality systems, validation and documentation."
        crumb={{ label: "Quality", homeLabel: "Home" }}
      />
      <Section>
        <SectionHeading eyebrow="Quality" title="Quality & Compliance" intro="Quality systems, validation and documentation." />
      </Section>
    </>
  );
}
