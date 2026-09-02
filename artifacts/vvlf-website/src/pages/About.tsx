import { Layout } from "@/components/Layout";
import { AboutSection } from "@/components/sections/AboutSection";
import { PageHero } from "@/components/PageHero";

export default function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="Who We Are"
        headline="Building the Next Generation of Founders"
        sub="A not-for-profit innovation ecosystem inside BVRIT — turning campus ideas into companies that matter."
        image={`/images/startup-meet.jpg`}
      />
      <AboutSection />
    </Layout>
  );
}
