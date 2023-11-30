import ActivitiesCard from "../../components/Home/Activities/Card";

export default function ActivitiesSection({ school }) {
  return (
    <div className="hide-scrollbar overflow-x-auto mt-5">
      <div className="flex w-max gap-x-4">
        {school.data.activities.map((activity, index: number) => (
          <div
            key={index}
            className={`${index === 0 ? "pl-5" : ""} ${
              school.data.activities.length - 1 === index
                ? "pr-5"
                : ""
            }`}
          >
            <ActivitiesCard activity={activity} />
          </div>
        ))}
      </div>
    </div>
  );
}
