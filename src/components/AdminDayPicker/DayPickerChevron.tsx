import React from "react";
import ArrowLeft from "@/components/Icons/arrow-left.svg";
import { ChevronProps } from "react-day-picker";

function DayPickerChevron({ orientation, className, ...rest }: ChevronProps) {
  return (
    <ArrowLeft
      className={`${className} ${orientation === "right" ? "rotate-180" : ""}`}
      {...rest}
    />
  );
}

export default DayPickerChevron;
