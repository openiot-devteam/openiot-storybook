import React from "react";
import ControlCard from "@/components/ControlCard/ControlCard";
import {
  ControlCardProps,
  ControlCardStatusVariants,
} from "@/components/ControlCard/ControlCardProps";
import PlugIcon from "@/components/Icons/Icon=plug.svg";

function PlugControlCard({
  name,
  status = "INACTIVE",
  ...rest
}: Omit<ControlCardProps, "icon">) {
  const iconStyle: ControlCardStatusVariants = {
    ACTIVE: "control-card-icon-active",
    INACTIVE: "control-card-icon-inactive",
    READY: "control-card-icon-ready",
  };

  return (
    <ControlCard
      name={name}
      icon={
        <PlugIcon
          className={`*:scale-150 ${iconStyle[status]}`}
          viewBox="0 0 36 36"
          width={36}
          height={36}
        />
      }
      status={status}
      {...rest}
    />
  );
}

export default PlugControlCard;
