import { useContext, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import dayjs from "dayjs";

import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DataReservationContext } from "../context/DataReservation";

dayjs.extend(customParseFormat);
dayjs.extend(isSameOrBefore);

// eslint-disable-next-line
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

interface CalendarProps {
  selectedDay: string;
  setSelectedDay: (value: string) => void;
  setShowModalBooking: (value: boolean) => void;
  setShowModalCalendar: (value: boolean) => void;
}

const Calendar = ({
  selectedDay,
  setSelectedDay,
  setShowModalBooking,
  setShowModalCalendar,
}: CalendarProps) => {
  const today = dayjs().startOf("day");
  const [currentMonth, setCurrentMonth] = useState(
    today.format("YYYY-MM-DD")
  );

  const { dataToBooking, setDataToBooking } = useContext(
    DataReservationContext
  );

  const [firstDayCurrentMonth, setFirstDayCurrentMonth] =
    // eslint-disable-next-line
    useState<any>(null);

  // eslint-disable-next-line
  const [days, setDays] = useState<any>(null);

  useEffect(() => {
    const firstDayCurrentMonth = dayjs(currentMonth).format();

    setFirstDayCurrentMonth(firstDayCurrentMonth);

    const getDaysInCalendar = () => {
      const startOfWeek = dayjs(firstDayCurrentMonth)
        .startOf("month")
        .startOf("week");
      const endOfWeek = dayjs(firstDayCurrentMonth)
        .endOf("month")
        .endOf("week");

      // eslint-disable-next-line
      const days: any = [];
      // eslint-disable-next-line
      let currentDay: any = startOfWeek;

      while (currentDay.isSameOrBefore(endOfWeek)) {
        days.push(currentDay);
        currentDay = currentDay.add(1, "day");
      }

      return days;
    };

    const days = getDaysInCalendar();
    setDays(days);
  }, [currentMonth]);

  const previousMonth = () => {
    const firstDayNextMonth = dayjs(currentMonth, {
      format: "YYYY-MM-DD",
    }).subtract(1, "month");
    setCurrentMonth(firstDayNextMonth.format("YYYY-MM-DD"));
  };

  // const previousYear = () => {
  //   let firstDayNextMonth = dayjs(currentMonth, {
  //     format: "YYYY-MM-DD",
  //   }).subtract(1, "year");
  //   setCurrentMonth(firstDayNextMonth.format("YYYY-MM-DD"));
  // };

  const nextMonth = () => {
    const firstDayNextMonth = dayjs(currentMonth, {
      format: "YYYY-MM-DD",
    }).add(1, "month");
    setCurrentMonth(firstDayNextMonth.format("YYYY-MM-DD"));
  };

  // const nextYear = () => {
  //   let firstDayNextMonth = dayjs(currentMonth, {
  //     format: "YYYY-MM-DD",
  //   }).add(1, "year");
  //   setCurrentMonth(firstDayNextMonth.format("YYYY-MM-DD"));
  // };

  if (!firstDayCurrentMonth) return null;

  return (
    <div className="max-w-sm">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={previousMonth}
            className="border border-gray-300 text-sm text-darkBlue rounded-md shadow-sm p-3"
          >
            <FaAngleLeft />
          </button>
        </div>
        <div className="font-medium text text-gray-500">
          {dayjs(firstDayCurrentMonth).format("MMM YYYY")}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={nextMonth}
            className="border border-gray-300 text-sm text-darkBlue rounded-md shadow-sm p-3"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-x-2 gap-y-3">
        <p className="text-center font-bold mb-3">S</p>
        <p className="text-center font-bold mb-3">M</p>
        <p className="text-center font-bold mb-3">T</p>
        <p className="text-center font-bold mb-3">W</p>
        <p className="text-center font-bold mb-3">T</p>
        <p className="text-center font-bold mb-3">F</p>
        <p className="text-center font-bold mb-3">S</p>
      </div>

      <div className="grid grid-cols-7 gap-x-2 gap-y-1">
        {/* eslint-disable-next-line */}
        {days?.map((day: any, index: number) => {
          return (
            <div
              onClick={() => {
                setSelectedDay(dayjs(day).format("YYYY-MM-DD"));
                setDataToBooking({
                  ...dataToBooking,
                  selectedDay: dayjs(day).format("YYYY-MM-DD"),
                });
                setShowModalCalendar(false);
                setShowModalBooking(true);
              }}
              key={day.toString()}
              className={classNames(
                index === 0 && colStartClasses[dayjs(day).day()],
                "cursor-pointer"
              )}
            >
              <p
                className={classNames(
                  day.isSame(selectedDay, "day") && "text-white",
                  !day.isSame(selectedDay, "day") &&
                    day.isSame(today, "day") &&
                    "text-darkYellow",
                  !day.isSame(selectedDay, "day") &&
                    !day.isSame(today, "day") &&
                    day.isSame(firstDayCurrentMonth, "month") &&
                    "text-darkBlue",
                  !day.isSame(selectedDay, "day") &&
                    !day.isSame(today, "day") &&
                    !day.isSame(firstDayCurrentMonth, "month") &&
                    "text-gray-400",
                  day.isSame(selectedDay, "day") &&
                    day.isSame(today, "day") &&
                    "bg-darkYellow text-white",
                  day.isSame(selectedDay, "day") && "bg-darkBlue",
                  !day.isSame(selectedDay, "day") &&
                    "hover:bg-gray-200",
                  (day.isSame(selectedDay, "day") ||
                    day.isSame(today, "day")) &&
                    "font-semibold",
                  "text-center w-full py-2 rounded-full grid place-items-center"
                )}
              >
                {dayjs(day).format("D")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
