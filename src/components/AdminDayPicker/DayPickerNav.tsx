'use client'
import React, { useCallback } from "react";
import ArrowLeft from "../Icons/arrow-left.svg";
import { NavProps, useDayPicker } from "react-day-picker";

function DayPickerNav({
  onPreviousClick,
  onNextClick,
  nextMonth,
  previousMonth,
  ...navProps
}: NavProps) {
  const {
    labels: { labelPrevious, labelNext },
  } = useDayPicker();

  const handleNextClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (nextMonth) {
        onNextClick?.(e);
      }
    },
    [nextMonth, onNextClick],
  );

  const handlePreviousClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (previousMonth) {
        onPreviousClick?.(e);
      }
    },
    [previousMonth, onPreviousClick],
  );
;
  return (
    <nav {...navProps}>
      <div className="flex gap-2 items-center">
        <button
          className="rdp-month_caption_button"
          onClick={handlePreviousClick}
          tabIndex={previousMonth ? undefined : -1}
          aria-disabled={previousMonth ? undefined : true}
          aria-label={labelPrevious(previousMonth)}
        >
          <ArrowLeft className="scale-166 *:stroke-[#161C24]" />
        </button>
        <span className="w-15"></span>
        <button
          className="rdp-month_caption_button"
          onClick={handleNextClick}
          tabIndex={nextMonth ? undefined : -1}
          aria-disabled={nextMonth ? undefined : true}
          aria-label={labelNext(nextMonth)}
        >
          <ArrowLeft className="rotate-180 scale-166 *:stroke-[#161C24]" />
        </button>
      </div>

      <button className="px-2 border-grey-300 border rounded-lg h-7.5 w-12">
        <span className="text-grey-900 text-xs font-bold leading-4.5">
          오늘
        </span>
      </button>
    </nav>
  );
}

export default DayPickerNav;
