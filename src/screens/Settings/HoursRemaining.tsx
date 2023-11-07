import BackButton from "../../components/BackButton";
import Exclamation from "../../components/Illustrations/Exclamation";
import HoursRemainingCard from "../../components/Settings/HoursRemaining/Card";

const bookings = [""];

export default function HoursRemaining() {
  return (
    <div>
      <header className="p-5">
        <BackButton title="Hours/classes remaining" />
      </header>

      <div className="flex flex-col gap-y-5 px-5 mb-5">
        {bookings.length === 0 ? (
          <div className="grid place-items-center h-[calc(100vh_-_149px_-_20px)]">
            <div className="flex flex-col items-center">
              <Exclamation />
              <p className="text-darkBlue mt-3">
                You have no fun planned as of right now.
              </p>
              <button className="mt-3 bg-darkBlue w-full h-[50px] text-lg text-white font-medium rounded-md">
                Booking now
              </button>
            </div>
          </div>
        ) : (
          bookings.map((_, index: number) => (
            <HoursRemainingCard key={index} />
          ))
        )}
      </div>
    </div>
  );
}
