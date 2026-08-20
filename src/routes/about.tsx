import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vesco Science — Vesco Science" },
      { name: "description", content: "Korean biotechnology and regenerative manufacturing." },
      { property: "og:title", content: "About Vesco Science — Vesco Science" },
      { property: "og:description", content: "Korean biotechnology and regenerative manufacturing." },
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
        title="About Vesco Science"
        lead="Korean biotechnology and regenerative manufacturing."
        crumb={{ label: "About", homeLabel: "Home" }}
      />
      <Section>
        <SectionHeading eyebrow="About" title="About Vesco Science" intro="Korean biotechnology and regenerative manufacturing." />
      </Section>
    </>
  );
}
