import { PropsWithChildren } from "react";

export interface StackProps extends PropsWithChildren {
  dir?: "row" | "column";
  gap?: number;
  className?: string;
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  items?: "start" | "end" | "center" | "stretch" | "baseline";
}
