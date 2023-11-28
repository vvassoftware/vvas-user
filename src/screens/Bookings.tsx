import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Card from "../components/Bookings/Card";
import Exclamation from "../components/Illustrations/Exclamation";
import { useBookingsByUser } from "../actions/booking";
import { UserAuthContext } from "../context/UserAuth";

export default function Bookings() {
  const navigate = useNavigate();

  const { user } = useContext(UserAuthContext);

  const bookings = useBookingsByUser(user?.id);

  if (bookings.isLoading) return <div>Loading...</div>;
  if (bookings.isError) return <div>Something went wrong</div>;

  return (
    <Layout>
      <header className="p-5">
        <h2 className="text-[26px] text-darkBlue font-bold">
          Bookings
        </h2>
      </header>
      <div className="flex flex-col gap-y-5 px-5 mb-5">
        {bookings.data.length === 0 ? (
          <div className="grid place-items-center h-[calc(100vh_-_149px_-_20px)]">
            <div className="flex flex-col items-center">
              <Exclamation />
              <p className="text-darkBlue mt-3">
                You have no fun planned as of right now.
              </p>
              <button
                onClick={() => navigate("/profile")}
                className="mt-3 bg-darkBlue w-full h-[50px] text-lg text-white font-medium rounded-md"
              >
                Booking now
              </button>
            </div>
          </div>
        ) : (
          // eslint-disable-next-line
          bookings.data.map((booking: any, index: number) => (
            <button
              key={index}
              onClick={() =>
                navigate(`/booking/reservation/${booking.school.id}`)
              }
            >
              <Card booking={booking} />
            </button>
          ))
        )}
      </div>
    </Layout>
  );
}
