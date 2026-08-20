import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vesco Science — Vesco Science" },
      { name: "description", content: "Start a project or request documentation." },
      { property: "og:title", content: "Contact Vesco Science — Vesco Science" },
      { property: "og:description", content: "Start a project or request documentation." },
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
        title="Contact Vesco Science"
        lead="Start a project or request documentation."
        crumb={{ label: "Contact", homeLabel: "Home" }}
      />
      <Section>
        <SectionHeading eyebrow="Contact" title="Contact Vesco Science" intro="Start a project or request documentation." />
      </Section>
    </>
  );
}
