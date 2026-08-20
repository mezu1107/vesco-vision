import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/technology/$slug")({
  head: () => ({
    meta: [
      { title: "Technology detail — Vesco Science" },
      { name: "description", content: "Technology detail page for Vesco Science." },
      { property: "og:title", content: "Technology detail — Vesco Science" },
      { property: "og:description", content: "Technology detail page for Vesco Science." },
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
        eyebrow="Technology"
        title={label}
        crumb={{ label: "Technology", homeLabel: "Home" }}
      />
      <Section>
        <SectionHeading eyebrow="Technology" title={label} intro="Detailed specifications are issued on request under confidentiality." />
      </Section>
    </>
  );
}
