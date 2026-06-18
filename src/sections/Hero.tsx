/* eslint-disable react/no-unescaped-entities */

import ArrowDown from "@/assets/icons/arrow-down.svg";
import Braces from "@/assets/icons/braces.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import CodeXml from "@/assets/icons/code-xml.svg";
import Cog from "@/assets/icons/cog.svg";
import grainImage from "@/assets/images/grain.jpg";

import { Button } from "@/components/button";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="relative z-0 overflow-x-clip py-48 lg:py-60">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <Braces className="size-8 text-emerald-300/20" aria-hidden />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <Braces className="size-5 text-emerald-300/20" aria-hidden />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <Cog className="size-3 text-emerald-300/20" aria-hidden />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <Braces className="size-10 text-emerald-300/20" aria-hidden />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <CodeXml className="size-12 text-emerald-300" aria-hidden />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <CodeXml className="size-8 text-emerald-300" aria-hidden />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <Cog className="size-3 text-emerald-300/20" aria-hidden />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <Braces className="size-14 text-emerald-300/20" aria-hidden />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <Cog className="size-3 text-emerald-300/20" aria-hidden />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <CodeXml className="size-28 text-emerald-300" aria-hidden />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="relative size-2.5 rounded-full bg-green-500">
              <div className="absolute inset-0 size-2.5 animate-ping-large rounded-full bg-green-500"></div>
            </div>
            {/* <div className="text-sm font-medium lowercase tracking-wide">
              4/4 SPOTS LEFT FOR MAY
            </div> */}
          </div>
        </div>
        <div className="mx-auto max-w-lg">
          <h1 className="mt-6 text-balance text-center font-serif text-3xl leading-normal tracking-wide md:text-5xl">
            High-performance websites that get you
            <br />
            <span className="text-emerald-500">more customers</span>
          </h1>
          <ul className="mx-auto mt-4 flex max-w-xl flex-col items-start justify-center space-y-5 text-left text-white/60 md:mt-12 md:text-lg">
            <li className="flex items-center gap-3">
              <CheckIcon
                className="size-5 shrink-0 text-emerald-500"
                aria-hidden
              />
              <span>
                A site that converts{" "}
                <span className="text-white">visitors into leads</span>
                {" \u2014 "}not just looks pretty.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon
                className="size-5 shrink-0 text-emerald-500"
                aria-hidden
              />
              <span>
                <span className="text-white">Go live in under two weeks. </span>
                No endless back-and-forth.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckIcon
                className="size-5 shrink-0 text-emerald-500"
                aria-hidden
              />
              <span>
                Bookings, enquiry forms, emails
                {" \u2014 "}
                <span className="text-white">
                  automations that save you hours/week
                </span>
                .
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button
            variant="outline"
            href="#projects"
            className="w-full md:w-auto"
          >
            Explore My Work
            <ArrowDown className="size-4 shrink-0" aria-hidden />
          </Button>
          <Button
            variant="inverse"
            href="#contact"
            className="w-full md:w-auto"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
