import React from "react";
import { StackProps } from "@/components/Stack/StackProps";

const stackDirection = {
  column: "flex-col",
  row: "flex-row",
};

const stackJustifyContent = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const stackItems = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

function Stack({
  dir = "column",
  children,
  gap,
  className,
  justify,
  items,
}: StackProps) {
  return (
    <div
      className={`flex ${stackDirection[dir]} ${
        justify ? stackJustifyContent[justify] : ""
      } ${items ? stackItems[items] : ""} ${className || ""}`.trim()}
      style={{ gap }}
    >
      {children}
    </div>
  );
}

export default Stack;
