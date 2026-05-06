interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "gold" | "muted" | "outline";
  className?: string;
}

const variantClasses = {
  accent: "bg-accent/20 text-accent-light border border-accent/30",
  gold: "bg-gold/20 text-gold border border-gold/30",
  muted: "bg-white/5 text-muted border border-white/10",
  outline: "bg-transparent text-cream border border-cream/20",
};

export function Badge({ children, variant = "accent", className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-medium tracking-wide uppercase",
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
