import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ManifestoSection } from "@/sections/Manifesto";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
// import { TestimonialsSection } from '@/sections/Testimonials'

export default function Home() {
  return (
    <div id="top">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <ManifestoSection />
      {/* <TestimonialsSection /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
