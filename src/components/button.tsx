import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const buttonVariants = {
  primary:
    "inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 font-semibold text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 disabled:cursor-not-allowed disabled:opacity-60",
  outline:
    "inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 px-6 font-semibold transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40",
  inverse:
    "inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white bg-white px-6 font-semibold text-gray-900 transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

type ButtonAsButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "className"
> & {
  variant?: ButtonVariant;
  className?: string;
  href?: undefined;
};

type ButtonAsAnchorProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "className"
> & {
  variant?: ButtonVariant;
  className?: string;
  href: string;
};

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const mergedClassName = twMerge(buttonVariants[variant], props.className);

  if ("href" in props && props.href !== undefined) {
    const { href, children, variant: _v, className: _c, ...rest } =
      props as ButtonAsAnchorProps;
    return (
      <a href={href} className={mergedClassName} {...rest}>
        {children}
      </a>
    );
  }

  const {
    children,
    type = "button",
    variant: _v,
    className: _c,
    ...rest
  } = props as ButtonAsButtonProps;

  return (
    <button type={type} className={mergedClassName} {...rest}>
      {children}
    </button>
  );
}
