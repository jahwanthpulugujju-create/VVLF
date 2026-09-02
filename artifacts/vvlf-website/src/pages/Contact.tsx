import { Layout } from "@/components/Layout";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageHero } from "@/components/PageHero";

export default function Contact() {
  return (
    <Layout>
      <PageHero
        eyebrow="Contact & Apply"
        headline="Start Your Startup Journey Today"
        sub="Apply for incubation, explore partnerships, or simply reach out — we respond within 48 hours."
      />
      <ContactSection />
    </Layout>
  );
}
