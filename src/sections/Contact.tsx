/* eslint-disable react/no-unescaped-entities */

import grainImage from "@/assets/images/grain.jpg";
import { ContactForm } from "@/components/ContactForm";

export const ContactSection = () => {
  return (
    <div id="contact" className="scroll-mt-24 py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="relative z-0 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900 md:text-left">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            <div className="md:max-w-sm">
              <h2 className="font-serif text-2xl md:text-3xl">
                Tell me what you’re building
              </h2>
              <p className="mt-2 text-sm md:text-base">
                I reply within 24 hours. Share the goal, timeline, and any links
                — I’ll suggest the fastest path to launch.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
