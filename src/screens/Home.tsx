import { useNavigate } from "react-router-dom";

import Header from "../components/Home/Header";
import ActivitiesCard from "../components/Home/Activities/Card";
import OfferingCard from "../components/Home/Offerings/Card";
import Layout from "../components/Layout";

import { useSchools } from "../actions/school";
import { useActivities } from "../actions/activities";

export default function Home() {
  const navigate = useNavigate();

  const schools = useSchools();
  const activities = useActivities();

  return (
    <Layout>
      <Header />

      <div className="pt-5">
        <h3 className="pl-5 text-[26px] text-darkBlue font-bold">
          Filter by Activities
        </h3>

        <div className="hide-scrollbar overflow-x-auto mt-3">
          <div className="flex w-max gap-x-4">
            {activities.isLoading ? (
              <div>loading..</div>
            ) : activities.isError ? (
              <div>something went wrong</div>
            ) : (
              activities.data.map((activity, index: number) => (
                <div
                  key={index}
                  className={`${index === 0 ? "pl-5" : ""} ${
                    activities.data.length - 1 === index ? "pr-5" : ""
                  }`}
                >
                  <ActivitiesCard activity={activity} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="my-7 px-5">
        <h3 className="text-[26px] text-darkBlue font-bold">
          Offerings
        </h3>

        <div className="hide-scrollbar overflow-x-auto mt-3">
          <div className="grid grid-cols-2 gap-y-4 gap-x-3">
            {schools.isLoading ? (
              <div>loading...</div>
            ) : schools.isError ? (
              <div>something went wrong</div>
            ) : (
              schools.data.map((school, index: number) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => navigate(`/booking/${school.id}`)}
                >
                  <OfferingCard school={school} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
