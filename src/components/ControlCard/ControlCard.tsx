import React from "react";
import Link from "next/link";
import { ControlCardProps } from "@/components/ControlCard/ControlCardProps";

const defaultStatusText = {
  ACTIVE: "이용중",
  INACTIVE: "이용불가",
  READY: "결제 시 이용가능",
};

const defaultContainerStyle = {
  ACTIVE: "control-card-container-active",
  INACTIVE: "control-card-container-inactive",
  READY: "control-card-container-ready",
};

const defaultNameStyle = {
  ACTIVE: "control-card-name-active",
  INACTIVE: "control-card-name-inactive",
  READY: "control-card-name-ready",
};

function ControlCard({
  name,
  icon,
  status,
  href = "/",
  statusText = defaultStatusText,
  containerStyle = defaultContainerStyle,
  nameStyle = defaultNameStyle,
  ...rest
}: ControlCardProps) {
  return (
    <Link
      href={href}
      className={`control-card-container ${containerStyle[status]}`}
      {...rest}
    >
      <div className="control-card-inner">
        {icon}
        <div>
          <h2 className={`control-card-name ${nameStyle[status]}`}>{name}</h2>
          <span className="control-card-status">{statusText[status]}</span>
        </div>
      </div>
    </Link>
  );
}

export default ControlCard;
