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

type HomePageProps = {
  searchParams: { contactSuccess?: string | string[] };
};

export default function Home({ searchParams }: HomePageProps) {
  const contactSuccessParam = searchParams.contactSuccess;
  const isContactSuccessPreview =
    process.env.NODE_ENV === "development" &&
    (contactSuccessParam === "1" ||
      (Array.isArray(contactSuccessParam) && contactSuccessParam[0] === "1"));

  return (
    <div id="top">
      <HomeStructuredData />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <HeroSection />
        <ProjectsSection />
        <TapeSection />
        <ManifestoSection />
        {/* <TestimonialsSection /> */}
        <AboutSection />
        <FaqSection />
        <ContactSection showSuccessPreview={isContactSuccessPreview} />
      </main>
      <Footer />
    </div>
  );
}
