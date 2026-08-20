import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/oem")({
  head: () => ({
    meta: [
      { title: "OEM & ODM Partnership — Vesco Science" },
      { name: "description", content: "End-to-end contract development and manufacturing." },
      { property: "og:title", content: "OEM & ODM Partnership — Vesco Science" },
      { property: "og:description", content: "End-to-end contract development and manufacturing." },
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
        title="OEM & ODM Partnership"
        lead="End-to-end contract development and manufacturing."
        crumb={{ label: "OEM / ODM", homeLabel: "Home" }}
      />
      <Section>
        <SectionHeading eyebrow="OEM / ODM" title="OEM & ODM Partnership" intro="End-to-end contract development and manufacturing." />
      </Section>
    </>
  );
}
