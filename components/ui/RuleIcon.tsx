"use client";

import {
  Footprints,
  MessageSquareOff,
  Ban,
  PhoneOff,
  Heart,
  Sparkles,
  type LucideProps,
} from "lucide-react";

const icons: Record<string, React.ComponentType<LucideProps>> = {
  footprints: Footprints,
  "message-square-off": MessageSquareOff,
  ban: Ban,
  "smartphone-off": PhoneOff,
  heart: Heart,
  sparkles: Sparkles,
};

interface RuleIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function RuleIcon({ name, size = 22, className = "" }: RuleIconProps) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.5} className={className} />;
}
