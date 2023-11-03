import Header from "../components/Home/Header";
import ActivitiesCard from "../components/Home/Activities/Card";
import OfferingCard from "../components/Home/Offerings/Card";
import Layout from "../components/Layout";

const activities = [{}, {}, {}, {}];

export default function Home() {
  return (
    <Layout>
      <Header />

      <div className="pt-5">
        <h3 className="pl-5 text-[26px] text-darkBlue font-bold">
          Filter by Activities
        </h3>

        <div className="hide-scrollbar overflow-x-auto mt-3">
          <div className="flex w-max gap-x-4">
            {activities.map((_, index: number) => (
              <div
                key={index}
                className={`${index === 0 ? "pl-5" : ""} ${
                  activities.length - 1 === index ? "pr-5" : ""
                }`}
              >
                <ActivitiesCard />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-7 px-5">
        <h3 className="text-[26px] text-darkBlue font-bold">
          Filter by Activities
        </h3>

        <div className="hide-scrollbar overflow-x-auto mt-3">
          <div className="grid grid-cols-2 gap-4">
            {activities.map((_, index: number) => (
              <OfferingCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
