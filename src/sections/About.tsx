"use client";

import DirectusIcon from "@/assets/icons/directus.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import FastAPIIcon from "@/assets/icons/fastapi.svg";
import MapPinIcon from "@/assets/icons/map-pin.svg";
import NextJsIcon from "@/assets/icons/nextjs.svg";
import PostgreSQLIcon from "@/assets/icons/postgresql.svg";
import PydanticIcon from "@/assets/icons/pydantic.svg";
import PythonIcon from "@/assets/icons/python.svg";
import ReactIcon from "@/assets/icons/react.svg";
import SQLAlchemyIcon from "@/assets/icons/sqlalchemy.svg";
import TailwindCssIcon from "@/assets/icons/tailwindcss.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import VercelIcon from "@/assets/icons/vercel.svg";
import bookImage from "@/assets/images/offer2.png";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/Subject 2.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const STARTER_OFFER_PDF_HREF = "/ruramade-proposal.pdf";
const STARTER_OFFER_PDF_FILENAME = "ruramade-proposal.pdf";

const toolboxFrontendItems = [
  { title: "Next.js", iconType: NextJsIcon },
  { title: "React", iconType: ReactIcon },
  { title: "TypeScript", iconType: TypeScriptIcon },
  { title: "Tailwind CSS", iconType: TailwindCssIcon },
];

const toolboxBackendItems = [
  { title: "FastAPI", iconType: FastAPIIcon },
  { title: "Python", iconType: PythonIcon },
  { title: "Pydantic", iconType: PydanticIcon },
  { title: "PostgreSQL", iconType: PostgreSQLIcon },
  { title: "SQLAlchemy", iconType: SQLAlchemyIcon },
  { title: "Directus", iconType: DirectusIcon },
  { title: "Vercel", iconType: VercelIcon },
  { title: "Docker", iconType: DockerIcon },
];

const hobbies = [
  {
    title: "Surfing",
    emoji: "🏄🏻‍♂️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Cooking",
    emoji: "👨🏻‍🍳",
    left: "10%",
    top: "35%",
  },
  {
    title: "Camping",
    emoji: "🏕️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Dancing",
    emoji: "🕺🏻",
    left: "70%",
    top: "45%",
  },
  {
    title: "Diving",
    emoji: "🤿",
    left: "5%",
    top: "65%",
  },
  {
    title: "Yoga",
    emoji: "🧘🏻‍♂️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="How I work with clients"
          description="From initial concept to final launch, I focus on transparent communication and building scalable solutions that drive business growth"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <a
              href={STARTER_OFFER_PDF_HREF}
              download={STARTER_OFFER_PDF_FILENAME}
              className="group block rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 md:col-span-2 lg:col-span-1"
            >
              <Card className="h-[320px] cursor-pointer transition-[background-color,box-shadow] group-hover:bg-gray-800/80 group-hover:ring-1 group-hover:ring-white/10">
                <CardHeader
                  title="Starter Offer"
                  description="Get your website live in 10 days for a fixed fee. Click to download the full process"
                />
                <div className="pointer-events-none mx-auto mt-2 w-40 md:mt-0">
                  <Image src={bookImage} alt="Starter offer PDF preview" />
                </div>
              </Card>
            </a>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="Technical Stack"
                description="My go-to technologies for building fast and accessible web applications"
              />
              <ToolboxItems
                className=""
                items={toolboxFrontendItems}
                itemsWrapperClassName="animate-move-left [animation-duration:60s]"
              />
              <ToolboxItems
                className="mt-6"
                items={toolboxBackendItems}
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:45s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="flex h-[320px] flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Life Outside Logic"
                description="From the ocean waves to the kitchen..."
                className="px-6 py-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span className="">{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="relative h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map — based in the Irish Midlands, Ireland"
                className="h-full object-cover object-left-top"
              />
              <div
                className="-translate-x-1/5 absolute left-1/2 top-1/3 -translate-y-1/2"
                aria-hidden
              >
                <MapPinIcon className="size-16 text-gray-800" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
