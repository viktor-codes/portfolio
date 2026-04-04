import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  descriptionParagraphs?: readonly string[];
};

export const SectionHeader = ({
  title,
  eyebrow,
  description,
  descriptionParagraphs,
}: SectionHeaderProps) => {
  const hasParagraphs =
    descriptionParagraphs !== undefined && descriptionParagraphs.length > 0;

  return (
    <>
      <div className="flex justify-center">
        <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-6 text-balance text-center font-serif text-3xl md:text-5xl">
        {title}
      </h2>
      {hasParagraphs ? (
        <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-6 text-pretty text-center text-white/70 md:mt-16 md:text-lg lg:text-start lg:text-xl">
          {descriptionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : description ? (
        <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
          {description}
        </p>
      ) : null}
    </>
  );
};
