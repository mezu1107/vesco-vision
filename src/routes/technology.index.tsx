import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology Platforms — Vesco Science" },
      { name: "description", content: "Six in-house platforms across our portfolio." },
      { property: "og:title", content: "Technology Platforms — Vesco Science" },
      { property: "og:description", content: "Six in-house platforms across our portfolio." },
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
        title="Technology Platforms"
        lead="Six in-house platforms across our portfolio."
        crumb={{ label: "Technology", homeLabel: "Home" }}
      />
      <Section>
        <SectionHeading eyebrow="Technology" title="Technology Platforms" intro="Six in-house platforms across our portfolio." />
      </Section>
    </>
  );
}
