import { Layout } from "@/components/Layout";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { PageHero } from "@/components/PageHero";

export default function Events() {
  return (
    <Layout>
      <PageHero
        eyebrow="Journey & Milestones"
        headline="Our Journey of Building Founders"
        sub="From first cohort to incorporated ventures — every milestone in the VVLF story, in order."
        image={`/images/cohort-milestone.jpg`}
      />
      <TimelineSection />
    </Layout>
  );
}
