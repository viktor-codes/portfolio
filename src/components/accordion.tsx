"use client";

import { useId, useState, type ReactNode } from "react";

export interface AccordionItem {
  id: string;
  label: ReactNode;
  panel: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Stable prefix for aria ids (recommended when multiple accordions exist). */
  idPrefix?: string;
  className?: string;
}

export function Accordion({ items, idPrefix, className }: AccordionProps) {
  const generatedId = useId();
  const baseId = idPrefix ?? generatedId.replaceAll(":", "");
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const triggerDomId = `${baseId}-trigger-${index}`;
        const panelDomId = `${baseId}-panel-${index}`;

        return (
          <div key={item.id} className="p-0">
            <button
              type="button"
              className="w-full cursor-pointer py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
              aria-expanded={isOpen}
              aria-controls={panelDomId}
              id={triggerDomId}
              onClick={() =>
                setOpenId((current) =>
                  current === item.id ? null : item.id,
                )
              }
            >
              <div className="flex items-start justify-between gap-6">
                <div>{item.label}</div>
                <div
                  className="mt-1 inline-flex size-8 flex-shrink-0 items-center justify-center text-white/70"
                  aria-hidden
                >
                  <span
                    className={`inline-flex size-8 select-none items-center justify-center text-2xl font-light leading-none transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </div>
              </div>
            </button>

            {isOpen ? (
              <div
                id={panelDomId}
                role="region"
                aria-labelledby={triggerDomId}
                className="pb-6"
              >
                {item.panel}
              </div>
            ) : null}

            <hr className="border-white/10" />
          </div>
        );
      })}
    </div>
  );
}
