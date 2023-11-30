interface MakeBookingProps {
  today: string;
  // eslint-disable-next-line
  currentDate: any;
  // eslint-disable-next-line
  weekDates: any[];
  // eslint-disable-next-line
  setDataToBooking: (value: any) => void;
  // eslint-disable-next-line
  dataToBooking: any;
  setShowModalBooking: (value: boolean) => void;
  // eslint-disable-next-line
  setSelectedDay: (value: any) => void;
  // eslint-disable-next-line
  formatWithUserTimeZone: any;
  setShowModalCalendar: (value: boolean) => void;
}

export default function MakeBooking({
  today,
  setSelectedDay,
  currentDate,
  weekDates,
  setDataToBooking,
  dataToBooking,
  setShowModalBooking,
  formatWithUserTimeZone,
  setShowModalCalendar,
}: MakeBookingProps) {
  return (
    <div className="mt-7 px-5">
      <h3 className="text-[26px] font-bold text-darkBlue">
        Make a booking
      </h3>

      <div className="mt-4">
        <p className="text-center text-darkBlue font-medium text-xl">
          {currentDate.format("MMMM YYYY")}
        </p>
      </div>

      <div className="grid grid-cols-7 gap-1">
        <div className="w-full h-11 grid place-items-center">
          <p className="text-darkBlue font-bold text-lg">S</p>
        </div>
        <div className="w-full h-11 grid place-items-center">
          <p className="text-darkBlue font-bold text-lg">M</p>
        </div>
        <div className="w-full h-11 grid place-items-center">
          <p className="text-darkBlue font-bold text-lg">T</p>
        </div>
        <div className="w-full h-11 grid place-items-center">
          <p className="text-darkBlue font-bold text-lg">W</p>
        </div>
        <div className="w-full h-11 grid place-items-center">
          <p className="text-darkBlue font-bold text-lg">T</p>
        </div>
        <div className="w-full h-11 grid place-items-center">
          <p className="text-darkBlue font-bold text-lg">F</p>
        </div>
        <div className="w-full h-11 grid place-items-center">
          <p className="text-darkBlue font-bold text-lg">S</p>
        </div>

        {weekDates.map((day) => (
          <button
            key={day}
            className={`${
              formatWithUserTimeZone(true, day).isBefore(today, "day")
                ? "bg-lightBlue"
                : today === day
                ? "bg-darkBlue"
                : "border-darkBlue/50 border"
            } rounded-md grid place-items-center h-11 w-full`}
            onClick={() => {
              if (
                formatWithUserTimeZone(true, day).isBefore(
                  today,
                  "day"
                )
              )
                return;
              setSelectedDay(
                formatWithUserTimeZone(true, day).format()
              );
              setDataToBooking({
                ...dataToBooking,
                selectedDay: formatWithUserTimeZone(
                  false,
                  day,
                  "YYYY-MM-DD"
                ),
              });
              setShowModalBooking(true);
            }}
          >
            <span
              className={`${
                today === day ? "text-white" : "text-darkBlue"
              } font-bold`}
            >
              {formatWithUserTimeZone(false, day, "DD")}
            </span>
          </button>
        ))}
      </div>

      <button
        className="text-white font-medium text-lg h-[50px] bg-darkBlue w-full rounded-md mt-5"
        onClick={() => setShowModalCalendar(true)}
      >
        View full calendar
      </button>
    </div>
  );
}
