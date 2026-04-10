import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import Ruraphotography from "@/assets/images/ruraphotography.png";
import Zeeframe from "@/assets/images/zeeframe.png";
import Cosmiccase from "@/assets/images/cosmiccase.png";
import { Button } from "@/components/button";
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
    <section id="projects" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="A selection of digital products built to solve complex problems through clean architecture and intuitive design."
        />

        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="sticky px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-sm font-semibold tracking-wide text-transparent">
                    {project.eyebrow}
                  </div>

                  <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                        key={result.title}
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={projectHref(project.link)}
                    variant="inverse"
                    className="mt-8 w-full md:w-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpIcon className="size-4" />
                  </Button>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
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
