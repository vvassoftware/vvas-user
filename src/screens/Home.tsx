import Header from "../components/Home/Header";
import ActivitiesCard from "../components/Home/Activities/Card";
import OfferingCard from "../components/Home/Offerings/Card";
import Layout from "../components/Layout";

const activities = [
  {
    id: 1,
    name: "WaterSport Rental",
    location: "Tampa, Florida",
    stars: 4,
    price: 150,
    image: "https://example.com/water-sport-image1.jpg",
  },
  {
    id: 2,
    name: "Aquatic Adventures",
    location: "Miami, Florida",
    stars: 5,
    price: 200,
    image: "https://example.com/water-sport-image2.jpg",
  },
  {
    id: 3,
    name: "WaveRiders Academy",
    location: "San Diego, California",
    stars: 4,
    price: 180,
    image: "https://example.com/water-sport-image3.jpg",
  },
  {
    id: 4,
    name: "Ocean Explorers",
    location: "Hawaii",
    stars: 5,
    price: 250,
    image: "https://example.com/water-sport-image4.jpg",
  },
  {
    id: 5,
    name: "Surf 'n Sail",
    location: "Los Angeles, California",
    stars: 3,
    price: 120,
    image: "https://example.com/water-sport-image5.jpg",
  },
  {
    id: 6,
    name: "BlueWave Watersports",
    location: "Key West, Florida",
    stars: 4,
    price: 175,
    image: "https://example.com/water-sport-image6.jpg",
  },
];

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
          <div className="grid grid-cols-2 gap-y-4 gap-x-3">
            {activities.map((school, index: number) => (
              <OfferingCard key={index} school={school} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
