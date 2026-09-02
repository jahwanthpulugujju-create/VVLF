import { Layout } from "@/components/Layout";
import { TeamSection } from "@/components/sections/TeamSection";
import { PageHero } from "@/components/PageHero";

export default function Team() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our People"
        headline="Meet the Team"
        sub="Visionaries, directors, mentors, and partners driving the VVLF ecosystem forward."
        image={`/images/startup-meet.jpg`}
      />
      <TeamSection />
    </Layout>
  );
}
