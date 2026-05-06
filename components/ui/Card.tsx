interface CardProps {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
}

export function Card({ children, glow = false, className = "" }: CardProps) {
  return (
    <div
      className={[
        "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6",
        "transition-all duration-300",
        glow
          ? "hover:border-accent/40 hover:bg-accent/5 hover:shadow-[0_0_30px_rgba(107,79,160,0.15)]"
          : "hover:border-white/20 hover:bg-white/8",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
