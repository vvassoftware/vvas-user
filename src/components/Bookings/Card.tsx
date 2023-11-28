import dayjs from "dayjs";

// eslint-disable-next-line
export default function Card({ booking }: any) {
  return (
    <div
      role="button"
      className="rounded-md overflow-hidden h-[120px] w-full flex bg-darkBlue"
    >
      <div className="w-[150px] h-full">
        <img
          src={booking.school.image}
          alt=""
          className="w-full object-cover h-full"
        />
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="p-[10px] flex flex-col items-start">
          <h3 className="text-white text-sm font-semibold">
            {booking.school.name}
          </h3>
          <p className="text-xs text-white">
            {booking.school.locationName}
          </p>
        </div>

        <div className="p-[10px]">
          <div className="flex gap-x-1 justify-start">
            <p className="text-xs font-bold text-white">Date:</p>
            <p className="text-xs text-white">
              {dayjs(booking.startTime).format("MMMM DD, YYYY")}
            </p>
          </div>
          <div className="flex gap-x-1 justify-start">
            <p className="text-xs font-bold text-white">Time:</p>
            <p className="text-xs text-white">
              {dayjs(booking.startTime).format("hh:mm a")} to{" "}
              {dayjs(booking.endTime).format("hh:mm a")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
