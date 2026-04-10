"use client";

import { useId } from "react";

export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  const gradientId = `tech-icon-gradient-${useId().replace(/:/g, "")}`;

  return (
    <>
      <Component
        className="size-10"
        style={{ fill: `url(#${gradientId})` }}
      />
      <svg className="absolute size-0" aria-hidden>
        <defs>
          <linearGradient id={gradientId}>
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
