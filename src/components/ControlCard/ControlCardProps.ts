import { LinkProps } from "next/link";

export interface ControlCardStatusVariants {
  ACTIVE: string;
  INACTIVE: string;
  READY: string;
}

export interface ControlCardProps extends LinkProps {
  name: string;
  status: "ACTIVE" | "INACTIVE" | "READY";
  icon: React.ReactNode;
  href: string;
  statusText?: ControlCardStatusVariants;
  containerStyle?: ControlCardStatusVariants;
  nameStyle?: ControlCardStatusVariants;
}
