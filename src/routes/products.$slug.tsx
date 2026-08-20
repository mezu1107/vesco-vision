import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/products/$slug")({
  head: () => ({
    meta: [
      { title: "Products detail — Vesco Science" },
      { name: "description", content: "Products detail page for Vesco Science." },
      { property: "og:title", content: "Products detail — Vesco Science" },
      { property: "og:description", content: "Products detail page for Vesco Science." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  const label = slug.replace(/-/g, " ");
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={label}
        crumb={{ label: "Products", homeLabel: "Home" }}
      />
      <Section>
        <SectionHeading eyebrow="Products" title={label} intro="Detailed specifications are issued on request under confidentiality." />
      </Section>
    </>
  );
}
