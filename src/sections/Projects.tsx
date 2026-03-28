import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import Ruraphotography from "@/assets/images/ruraphotography.png";
import Zeeframe from "@/assets/images/zeeframe.png";
import Cosmiccase from "@/assets/images/cosmiccase.png";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

function projectHref(link: string) {
  if (link.startsWith("http://") || link.startsWith("https://")) {
    return link;
  }
  return `https://${link}`;
}

const portfolioProjects = [
  {
    eyebrow: "MVP — public preview",
    title: "ZeeFrame",
    results: [
      { title: "End-to-end build: idea to launch" },
      { title: "Seamless booking for studios" },
      { title: "Operational studio dashboard" },
    ],
    link: "https://zeeframe.vercel.app",
    image: Zeeframe,
  },
  {
    eyebrow: "Premium portfolio site",
    title: "Rura Photography",
    results: [
      { title: "High-end bespoke visual design" },
      { title: "Automated Resend lead delivery" },
      { title: "High-conversion enquiry flow" },
    ],
    link: "https://ruraphotography.vercel.app",
    image: Ruraphotography,
  },
  {
    eyebrow: "E-commerce MVP — in dev",
    title: "CosmicCase",
    results: [
      { title: "Optimized user purchase path" },
      { title: "Custom-built UI system (React)" },
      { title: "Scalable market-ready engine" },
    ],
    link: "https://cosmiccase.ie",
    image: Cosmiccase,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24 ">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-400 to-sky-400 font-semibold tracking-wide text-sm text-transparent bg-clip-text">
                    {project.eyebrow}
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={projectHref(project.link)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
