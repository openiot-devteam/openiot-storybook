import { BadgeProps } from "@/components/Badge/BadgeProps";

export interface UsageStatusBadgeTextVariants {
  IN_USE: string;
  COMPLETED: string;
}
export interface UsageStatusBadgeProps extends BadgeProps {
  texts?: UsageStatusBadgeTextVariants;
  status: keyof UsageStatusBadgeTextVariants;
}
