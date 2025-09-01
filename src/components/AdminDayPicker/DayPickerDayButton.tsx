import React, { useEffect, useRef } from "react";
import { DayButtonProps } from "react-day-picker";
// import OvalIcon from "@/components/Icons/oval.svg";

function DayPickerDayButton({ day, modifiers, ...rest }: DayButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <button {...rest}>
      <span className="text-sm font-normal leading-5 text-grey-900">
        {day.date.getDate()}
      </span>

      <div className="flex justify-center h-3 py-0.5 gap-1">
        {/* <OvalIcon className="scale-800 *:fill-[#00C7C7]" />
        <OvalIcon className="scale-800 *:fill-[#00C7C7]" />
        <OvalIcon className="scale-800 *:fill-[#00C7C7]" /> */}
      </div>
    </button>
  );
}

export default DayPickerDayButton;
