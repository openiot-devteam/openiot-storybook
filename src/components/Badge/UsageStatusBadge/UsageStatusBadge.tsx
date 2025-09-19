import React from "react";
import Badge from "@/components/Badge/Badge";
import { UsageStatusBadgeProps } from "@/components/Badge/UsageStatusBadge/UsageStatusBadgeProps";

const defaultText = {
  IN_USE: "이용중",
  COMPLETED: "이용 완료",
};

const defaultContainerStyle = {
  IN_USE: "badge-container-inuse",
  COMPLETED: "badge-container-completed",
};

function UsageStatusBadge({
  texts = defaultText,
  status,
}: UsageStatusBadgeProps) {
  return (
    <Badge className={`w-fit ${defaultContainerStyle[status]}`} tabIndex={-1}>
      {texts[status]}
    </Badge>
  );
}

export default UsageStatusBadge;
