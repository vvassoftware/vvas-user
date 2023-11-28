import { useContext } from "react";
import { useBookingsOldByUser } from "../../actions/booking";
import BackButton from "../../components/BackButton";
import Card from "../../components/Bookings/Card";
import Exclamation from "../../components/Illustrations/Exclamation";
import { UserAuthContext } from "../../context/UserAuth";

export default function PastBookings() {
  const { user } = useContext(UserAuthContext);

  const bookings = useBookingsOldByUser(user?.id);

  if (bookings.isLoading) return <div>Loading...</div>;
  if (bookings.isError) return <div>Something went wrong</div>;

  return (
    <div>
      <header className="p-5">
        <BackButton title="Past bookings" />
      </header>

      <div className="flex flex-col gap-y-5 px-5 mb-5">
        {bookings.data.length === 0 ? (
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
          bookings.data.map((booking, index: number) => (
            <Card key={index} booking={booking} />
          ))
        )}
      </div>
    </div>
  );
}
