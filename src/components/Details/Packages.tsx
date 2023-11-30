import PackagesCard from "../../components/Home/Packages/Card";

export default function Packages({ school, params }) {
  return (
    <div className="mt-7">
      <h3 className="pl-5 text-[26px] font-bold text-darkBlue">
        Buy packages
      </h3>

      <div className="hide-scrollbar overflow-x-auto mt-3">
        <div className="flex w-max gap-x-3">
          {school.data.packages.map(
            // eslint-disable-next-line
            (packageData: any, index: number) => (
              <div
                key={index}
                className={`border border-b-4 rounded-md border-darkBlue/50 ${
                  index === 0 ? "ml-5" : ""
                } ${
                  school.data.packages.length - 1 === index
                    ? "mr-5"
                    : ""
                }`}
              >
                <PackagesCard
                  key={index}
                  price={packageData.price}
                  value={packageData.value}
                  schoolId={params.id as string}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
