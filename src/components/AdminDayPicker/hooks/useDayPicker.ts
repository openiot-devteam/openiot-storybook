import { useState } from "react";
import dayjs from "dayjs";

function useDayPicker() {
  const [selected, setSelected] = useState<Date>();

  const formatCaption = (date: Date) => {
    return dayjs(date).format("YYYY.MM");
  };

  const formatDay = (date: Date) => {
    return dayjs(date).format("D");
  };
  return {
    selected,
    setSelected,
    formatCaption,
    formatDay,
  };
}

export default useDayPicker;
