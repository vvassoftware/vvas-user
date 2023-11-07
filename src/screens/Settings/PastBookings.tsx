import BackButton from "../../components/BackButton";
import Card from "../../components/Bookings/Card";
import Exclamation from "../../components/Illustrations/Exclamation";

const bookings = ["", ""];

export default function PastBookings() {
  return (
    <div>
      <header className="p-5">
        <BackButton title="Past bookings" />
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
          bookings.map((_, index: number) => <Card key={index} />)
        )}
      </div>
    </div>
  );
}
