import React from "react";
import { BadgeProps } from "@/components/Badge/BadgeProps";

function Badge({ children, className, ...rest }: BadgeProps) {
  return (
    <button className={`badge-container ${className || ""}`} {...rest}>
      <span className={`badge-container-text`}>{children}</span>
    </button>
  );
}

export default Badge;
