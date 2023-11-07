import Layout from "../components/Layout";
import Card from "../components/Bookings/Card";
import Exclamation from "../components/Illustrations/Exclamation";

const bookings = [{}, {}, {}];
// const bookings = [];

export default function Bookings() {
  return (
    <Layout>
      <header className="p-5">
        <h2 className="text-[26px] text-darkBlue font-bold">
          Bookings
        </h2>
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
    </Layout>
  );
}
