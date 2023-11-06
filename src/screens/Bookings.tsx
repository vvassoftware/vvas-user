import Layout from "../components/Layout";
import Card from "../components/Bookings/Card";

export default function Bookings() {
  return (
    <Layout>
      <header className="p-5">
        <h2 className="text-[26px] text-darkBlue font-bold">Bookings</h2>
      </header>

      <div className="flex flex-col gap-y-5 px-5 mb-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
}
