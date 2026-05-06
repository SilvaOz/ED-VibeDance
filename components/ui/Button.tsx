import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsButton extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLink extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-cream hover:bg-accent-light border border-accent hover:border-accent-light",
  outline:
    "bg-transparent text-cream border border-cream/30 hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-muted hover:text-cream hover:bg-white/5 border border-transparent",
  gold: "bg-gold text-dark border border-gold hover:bg-gold/90 font-medium",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

function buildClasses(variant: ButtonVariant, size: ButtonSize, extra?: string): string {
  return [
    "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium",
    "transition-all duration-200 cursor-pointer whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    extra ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = buildClasses(variant, size, className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest} />
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
