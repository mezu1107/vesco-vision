import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Catalogue — Vesco Science" },
      { name: "description", content: "A scientific catalogue organised by platform." },
      { property: "og:title", content: "Product Catalogue — Vesco Science" },
      { property: "og:description", content: "A scientific catalogue organised by platform." },
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
        title="Product Catalogue"
        lead="A scientific catalogue organised by platform."
        crumb={{ label: "Products", homeLabel: "Home" }}
      />
      <Section>
        <SectionHeading eyebrow="Products" title="Product Catalogue" intro="A scientific catalogue organised by platform." />
      </Section>
    </>
  );
}
