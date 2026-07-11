import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TimelineSection from "@/components/timeline/TimelineSection";
import CertificatesSection from "@/components/certificates/CertificatesSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="pb-10">
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
}
