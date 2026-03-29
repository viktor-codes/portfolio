/* eslint-disable react/no-unescaped-entities */

import ArrowDown from "@/assets/icons/arrow-down.svg";
import Braces from "@/assets/icons/braces.svg";
import CodeXml from "@/assets/icons/code-xml.svg";
import Cog from "@/assets/icons/cog.svg";
import grainImage from "@/assets/images/grain.jpg";

import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <Braces
            className="size-8 text-emerald-300 
/20"
          />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <Braces
            className="size-5 text-emerald-300 
/20"
          />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <Cog
            className="size-3 text-emerald-300 
/20"
          />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <Braces
            className="size-10 text-emerald-300 
/20"
          />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <CodeXml
            className="size-12 text-emerald-300 
"
          />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <CodeXml
            className="size-8 text-emerald-300 
"
          />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <Cog
            className="size-3 text-emerald-300 
/20"
          />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <Braces
            className="size-14 text-emerald-300 
/20"
          />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <Cog
            className="size-3 text-emerald-300 
/20"
          />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <CodeXml
            className="size-28 text-emerald-300 
"
          />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5  inline-flex items-center gap-4 rounded-lg">
            <div className="relative bg-green-500 size-2.5 rounded-full">
              <div className="absolute inset-0 animate-ping-large bg-green-500 size-2.5 rounded-full"></div>
            </div>
            <div className="text-sm font-medium ">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-6 line-height-1.5 tracking-wide md:text-5xl text-balance">
            Websites and integrations for small businesses
            <br />
            <span className="text-emerald-500">built to ship</span>
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I’m Viktor Rura, a full-stack developer in the Irish Midlands. Fast
            Next.js sites, solid APIs, forms, email, and light integrations —
            clear scope, no fluff.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span className="">🖖</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
