import { Layout } from "@/components/Layout";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { PageHero } from "@/components/PageHero";
export default function Programs() {
  return (
    <Layout>
      <PageHero
        eyebrow="Programs & Initiatives"
        headline="A Program for Every Stage of Your Journey"
        sub="From hackathons to year-long incubation cohorts — we build pathways for every kind of innovator."
        image={`/images/cohort-launch.jpg`}
      />
      <ProgramsSection />
    </Layout>
  );
}
