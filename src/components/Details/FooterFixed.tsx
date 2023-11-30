export default function FooterFixed({
  dataToBooking,
  creditsOfSchool,
  school,
  setSelectedDay,
  setDataToBooking,
  formatWithUserTimeZone,
  setShowModalBooking,
}) {
  return (
    <div className="p-[10px] items-center grid grid-cols-[1fr,120px] gap-x-2 z-[100] fixed bottom-0 left-0 bg-darkBlue w-full h-[100px]">
      <div>
        <p className="text-white text-sm">
          You have{" "}
          <span className="font-bold">{creditsOfSchool || 0} h</span>{" "}
          remaning
        </p>
        <p className="text-white mt-[3px] text-sm">
          <span className="font-bold">Open from:</span>{" "}
          {formatWithUserTimeZone(
            false,
            school.data.startTime,
            "hh a"
          )}{" "}
          to{" "}
          {formatWithUserTimeZone(false, school.data.endTime, "hh a")}
        </p>
      </div>

      <button
        className="h-[50px] text-sm rounded-md bg-white text-darkBlue font-bold"
        onClick={() => {
          setSelectedDay(
            formatWithUserTimeZone(false, new Date(), "YYYY-MM-DD")
          );
          setDataToBooking({
            ...dataToBooking,
            selectedDay: formatWithUserTimeZone(
              false,
              new Date(),
              "YYYY-MM-DD"
            ),
          });
          setShowModalBooking(true);
        }}
      >
        Make a booking
      </button>
    </div>
  );
}
