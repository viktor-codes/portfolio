import { HomeStructuredData } from "@/components/seo/home-structured-data";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { FaqSection } from "@/sections/Faq";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ManifestoSection } from "@/sections/Manifesto";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
// import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div id="top">
      <HomeStructuredData />
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <ManifestoSection />
      {/* <TestimonialsSection /> */}
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
