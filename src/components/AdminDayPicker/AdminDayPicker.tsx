import DayPickerNav from "@/components/AdminDayPicker/DayPickerNav";
import { DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import "react-day-picker/style.css";
import DayPickerChevron from "@/components/AdminDayPicker/DayPickerChevron";
import useDayPicker from "@/components/AdminDayPicker/hooks/useDayPicker";
import DayPickerDayButton from "@/components/AdminDayPicker/DayPickerDayButton";

function AdminDayPicker() {
  const { selected, setSelected, formatCaption } = useDayPicker();

  return (
    <DayPicker
      classNames={{
        // root 클래스는 대체하지 않는다.
        months: "rdp-months-grid-custom",
        month_grid: "rdp-month-grid-custom",
        month_caption: "rdp-month-caption-custom",
        weekday: "rdp-weekday-custom",
        weeks: "rdp-weeks-custom",
        nav: "rdp-nav-custom",
        day: "rdp-day-custom",
        outside: "rdp-outside-custom",
        day_button: "rdp-day-button-custom",
        selected: "rdp-selected-custom",
        chevron: "rdp-chevron-custom",
      }}
      components={{
        DayButton: DayPickerDayButton,
        Nav: DayPickerNav,
        Chevron: DayPickerChevron,
      }}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      locale={ko}
      // 월요일부터 시작
      weekStartsOn={1}
      showOutsideDays
      fixedWeeks
      formatters={{ formatCaption }}
    />
  );
}

export default AdminDayPicker;
