import dayjs from "dayjs";

import BackButton from "../../components/BackButton";
import ActivitiesCard from "../../components/Home/Activities/Card";
import PackagesCard from "../../components/Home/Packages/Card";
import Review from "../../components/Details/Review";

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

const packages = ["", "", "", ""];

export default function Details() {
  const currentDate = dayjs();

  const startOfWeek = currentDate.startOf("week");
  const today = currentDate.format("YYYY-MM-DD");

  const weekDates = [
    startOfWeek.format("YYYY-MM-DD"),
    startOfWeek.add(1, "day").format("YYYY-MM-DD"),
    startOfWeek.add(2, "days").format("YYYY-MM-DD"),
    startOfWeek.add(3, "days").format("YYYY-MM-DD"),
    startOfWeek.add(4, "days").format("YYYY-MM-DD"),
    startOfWeek.add(5, "days").format("YYYY-MM-DD"),
    startOfWeek.add(6, "days").format("YYYY-MM-DD"),
    startOfWeek.add(7, "days").format("YYYY-MM-DD"),
    startOfWeek.add(8, "days").format("YYYY-MM-DD"),
    startOfWeek.add(9, "days").format("YYYY-MM-DD"),
    startOfWeek.add(10, "days").format("YYYY-MM-DD"),
    startOfWeek.add(11, "days").format("YYYY-MM-DD"),
    startOfWeek.add(12, "days").format("YYYY-MM-DD"),
    startOfWeek.add(13, "days").format("YYYY-MM-DD"),
  ];

  return (
    <div className="mb-[128px]">
      <header className="p-5">
        <BackButton title="Florida Ski School" />
      </header>

      <div className="p-[10px] items-center grid grid-cols-[1fr,145px] fixed bottom-0 left-0 bg-darkBlue w-full h-[100px]">
        <div>
          <p className="text-white">
            You have <span className="font-bold">7 hours</span>{" "}
            remaning
          </p>
          <p className="text-white mt-[3px]">
            <span className="font-bold">Open from:</span> 05am to 08pm
          </p>
        </div>

        <button className="h-[50px] rounded-md bg-white text-darkBlue font-bold px-3">
          Make a booking
        </button>
      </div>

      <div className="px-5">
        <img
          src="/images/booking-cover.png"
          alt=""
          className="w-full h-[200px] object-cover rounded-md"
        />
        <p className="font-medium text-darkBlue mt-3">
          Orlando, Florida
        </p>
        <p className="text-neutral-700 mt-2">
          At FLORIDA SKI SCHOOL you pay hourly for the boat with all
          you need included. One on one coaching for surf, ski,
          wakeboard and foil. You can bring up to 13 people and ski,
          surf, foil, wakeboard, tube, go for a sunset cocktail cruise
          or just hang out with your friends and family!
        </p>
      </div>

      <div className="hide-scrollbar overflow-x-auto mt-5">
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

      <div className="mt-7 px-5">
        <h3 className="text-[26px] font-bold text-darkBlue">
          Location
        </h3>

        <div className="mt-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449614.5130699682!2d-81.77209088121924!3d28.310033468939324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e781e1488bfeb3%3A0x777f0ec9db140146!2sFlorida%20Ski%20School!5e0!3m2!1ses!2spy!4v1699462787427!5m2!1ses!2spy"
            width="100%"
            height="260"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="mt-7">
        <h3 className="pl-5 text-[26px] font-bold text-darkBlue">
          Buy packages
        </h3>

        <div className="hide-scrollbar overflow-x-auto mt-3">
          <div className="flex w-max gap-x-3">
            {packages.map((_, index: number) => (
              <div
                key={index}
                className={`border rounded-md border-darkBlue/90 ${
                  index === 0 ? "ml-5" : ""
                } ${packages.length - 1 === index ? "mr-5" : ""}`}
              >
                <PackagesCard />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7 px-5">
        <h3 className="text-[26px] font-bold text-darkBlue">
          Make a booking
        </h3>

        <div className="mt-4">
          <p className="text-center text-darkBlue font-medium text-xl">
            {currentDate.format("MMMM")}
          </p>
        </div>

        <div className="grid grid-cols-7 gap-1">
          <div className="w-full h-11 grid place-items-center">
            <p className="text-darkBlue font-bold text-lg">S</p>
          </div>
          <div className="w-full h-11 grid place-items-center">
            <p className="text-darkBlue font-bold text-lg">M</p>
          </div>
          <div className="w-full h-11 grid place-items-center">
            <p className="text-darkBlue font-bold text-lg">T</p>
          </div>
          <div className="w-full h-11 grid place-items-center">
            <p className="text-darkBlue font-bold text-lg">W</p>
          </div>
          <div className="w-full h-11 grid place-items-center">
            <p className="text-darkBlue font-bold text-lg">T</p>
          </div>
          <div className="w-full h-11 grid place-items-center">
            <p className="text-darkBlue font-bold text-lg">F</p>
          </div>
          <div className="w-full h-11 grid place-items-center">
            <p className="text-darkBlue font-bold text-lg">S</p>
          </div>

          {weekDates.map((day) => (
            <button
              key={day}
              className={`${
                dayjs(day).isBefore(today, "day")
                  ? "bg-darkBlue/20"
                  : today === day
                  ? "bg-darkBlue"
                  : "bg-darkBlue/40"
              } grid place-items-center h-11 w-full`}
            >
              <span
                className={`${
                  today === day ? "text-white" : "text-darkBlue"
                } font-bold`}
              >
                {dayjs(day).format("DD")}
              </span>
            </button>
          ))}
        </div>

        <button className="text-white font-medium text-lg h-[50px] bg-darkBlue w-full rounded-md mt-5">
          View full calendar
        </button>
      </div>

      <div className="mt-7 px-5">
        <h3 className="text-[26px] font-bold text-darkBlue">
          Reviews
        </h3>
        <p className="text-darkBlue -mt-1">Leave a review</p>

        <button className="w-full grid place-items-center mt-5">
          <svg
            width="277"
            height="33"
            viewBox="0 0 277 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0654 1.98114C15.5614 0.672955 17.4384 0.672955 17.9359 1.98114L21.1444 10.8687C21.3691 11.4577 21.9411 11.8498 22.5797 11.8498H30.4644C31.9214 11.8498 32.5569 13.6633 31.4114 14.5514L25.8005 19.5997C25.5492 19.7929 25.3655 20.0608 25.2758 20.3649C25.1862 20.669 25.1951 20.9936 25.3014 21.2923L27.3505 29.9768C27.8496 31.3718 26.2345 32.5699 25.0131 31.7112L17.3919 26.8753C17.1309 26.6919 16.8196 26.5935 16.5006 26.5935C16.1816 26.5935 15.8704 26.6919 15.6094 26.8753L7.98817 31.7112C6.76834 32.5699 5.15171 31.3702 5.65081 29.9768L7.69988 21.2923C7.80617 20.9936 7.81513 20.669 7.72546 20.3649C7.6358 20.0608 7.45212 19.7929 7.20078 19.5997L1.58987 14.5514C0.442884 13.6633 1.08147 11.8498 2.53535 11.8498H10.4201C10.7305 11.8509 11.034 11.7576 11.2903 11.5824C11.5466 11.4072 11.7436 11.1583 11.8554 10.8687L15.0638 1.98114H15.0654Z"
              stroke="#1B4965"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M76.0654 1.98114C76.5614 0.672955 78.4384 0.672955 78.9359 1.98114L82.1444 10.8687C82.3691 11.4577 82.9411 11.8498 83.5797 11.8498H91.4644C92.9214 11.8498 93.5569 13.6633 92.4114 14.5514L86.8005 19.5997C86.5492 19.7929 86.3655 20.0608 86.2758 20.3649C86.1862 20.669 86.1951 20.9936 86.3014 21.2923L88.3505 29.9768C88.8496 31.3718 87.2345 32.5699 86.0131 31.7112L78.3919 26.8753C78.1309 26.6919 77.8196 26.5935 77.5006 26.5935C77.1816 26.5935 76.8704 26.6919 76.6094 26.8753L68.9882 31.7112C67.7683 32.5699 66.1517 31.3702 66.6508 29.9768L68.6999 21.2923C68.8062 20.9936 68.8151 20.669 68.7255 20.3649C68.6358 20.0608 68.4521 19.7929 68.2008 19.5997L62.5899 14.5514C61.4429 13.6633 62.0815 11.8498 63.5354 11.8498H71.4201C71.7305 11.8509 72.034 11.7576 72.2903 11.5824C72.5466 11.4072 72.7436 11.1583 72.8554 10.8687L76.0638 1.98114H76.0654Z"
              stroke="#1B4965"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M137.065 1.98114C137.561 0.672955 139.438 0.672955 139.936 1.98114L143.144 10.8687C143.369 11.4577 143.941 11.8498 144.58 11.8498H152.464C153.921 11.8498 154.557 13.6633 153.411 14.5514L147.801 19.5997C147.549 19.7929 147.365 20.0608 147.276 20.3649C147.186 20.669 147.195 20.9936 147.301 21.2923L149.35 29.9768C149.85 31.3718 148.234 32.5699 147.013 31.7112L139.392 26.8753C139.131 26.6919 138.82 26.5935 138.501 26.5935C138.182 26.5935 137.87 26.6919 137.609 26.8753L129.988 31.7112C128.768 32.5699 127.152 31.3702 127.651 29.9768L129.7 21.2923C129.806 20.9936 129.815 20.669 129.725 20.3649C129.636 20.0608 129.452 19.7929 129.201 19.5997L123.59 14.5514C122.443 13.6633 123.081 11.8498 124.535 11.8498H132.42C132.731 11.8509 133.034 11.7576 133.29 11.5824C133.547 11.4072 133.744 11.1583 133.855 10.8687L137.064 1.98114H137.065Z"
              stroke="#1B4965"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M198.065 1.98114C198.561 0.672955 200.438 0.672955 200.936 1.98114L204.144 10.8687C204.369 11.4577 204.941 11.8498 205.58 11.8498H213.464C214.921 11.8498 215.557 13.6633 214.411 14.5514L208.801 19.5997C208.549 19.7929 208.365 20.0608 208.276 20.3649C208.186 20.669 208.195 20.9936 208.301 21.2923L210.35 29.9768C210.85 31.3718 209.234 32.5699 208.013 31.7112L200.392 26.8753C200.131 26.6919 199.82 26.5935 199.501 26.5935C199.182 26.5935 198.87 26.6919 198.609 26.8753L190.988 31.7112C189.768 32.5699 188.152 31.3702 188.651 29.9768L190.7 21.2923C190.806 20.9936 190.815 20.669 190.725 20.3649C190.636 20.0608 190.452 19.7929 190.201 19.5997L184.59 14.5514C183.443 13.6633 184.081 11.8498 185.535 11.8498H193.42C193.731 11.8509 194.034 11.7576 194.29 11.5824C194.547 11.4072 194.744 11.1583 194.855 10.8687L198.064 1.98114H198.065Z"
              stroke="#1B4965"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M259.065 1.98114C259.561 0.672955 261.438 0.672955 261.936 1.98114L265.144 10.8687C265.369 11.4577 265.941 11.8498 266.58 11.8498H274.464C275.921 11.8498 276.557 13.6633 275.411 14.5514L269.801 19.5997C269.549 19.7929 269.365 20.0608 269.276 20.3649C269.186 20.669 269.195 20.9936 269.301 21.2923L271.35 29.9768C271.85 31.3718 270.234 32.5699 269.013 31.7112L261.392 26.8753C261.131 26.6919 260.82 26.5935 260.501 26.5935C260.182 26.5935 259.87 26.6919 259.609 26.8753L251.988 31.7112C250.768 32.5699 249.152 31.3702 249.651 29.9768L251.7 21.2923C251.806 20.9936 251.815 20.669 251.725 20.3649C251.636 20.0608 251.452 19.7929 251.201 19.5997L245.59 14.5514C244.443 13.6633 245.081 11.8498 246.535 11.8498H254.42C254.731 11.8509 255.034 11.7576 255.29 11.5824C255.547 11.4072 255.744 11.1583 255.855 10.8687L259.064 1.98114H259.065Z"
              stroke="#1B4965"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Lists reviews */}
        <div className="mt-2">
          {["", "", ""].map((_, index: number) => (
            <Review key={index} />
          ))}
        </div>
      </div>

      <div className="my-7 px-5">
        <h3 className="text-[26px] font-bold text-darkBlue">
          Contact
        </h3>

        <div className="mt-2 flex w-full items-center justify-between">
          <div className="flex items-center gap-x-3">
            <div className="w-12 h-12 bg-lightBlue rounded-full"></div>
            <div>
              <h4 className="text-sm font-bold text-darkBlue">
                Franck Desbouyaux
              </h4>
              <p className="text-sm text-darkBlue">
                floridaskischool@gmail.com
              </p>
            </div>
          </div>

          <button className="h-[50px] w-[50px] bg-darkBlue rounded-md grid place-items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" fill="#1B4965" />
              <path
                d="M13.8058 18.3325C14.0271 18.3337 14.2464 18.2909 14.4511 18.2065C14.6557 18.1221 14.8414 17.9978 14.9974 17.8408L17.2558 15.5825C17.411 15.4263 17.4981 15.2151 17.4981 14.995C17.4981 14.7748 17.411 14.5636 17.2558 14.4075L13.9224 11.0741C13.7663 10.9189 13.5551 10.8318 13.3349 10.8318C13.1148 10.8318 12.9036 10.9189 12.7474 11.0741L11.4141 12.3991C10.491 12.153 9.63602 11.6999 8.91409 11.0741C8.29002 10.3511 7.83712 9.49652 7.58909 8.57414L8.91409 7.24081C9.0693 7.08467 9.15642 6.87346 9.15642 6.65331C9.15642 6.43315 9.0693 6.22194 8.91409 6.06581L5.58076 2.73247C5.42462 2.57727 5.21341 2.49015 4.99326 2.49015C4.7731 2.49015 4.56189 2.57727 4.40576 2.73247L2.15576 4.99914C1.99878 5.15518 1.87446 5.34091 1.79005 5.54551C1.70563 5.75011 1.66281 5.96948 1.66409 6.19081C1.73969 9.39272 3.01915 12.4485 5.24742 14.7491C7.54802 16.9774 10.6038 18.2569 13.8058 18.3325ZM4.99742 4.50747L7.15576 6.66581L6.08076 7.74081C5.97894 7.83618 5.9027 7.95559 5.85902 8.08808C5.81534 8.22058 5.80562 8.36191 5.83076 8.49914C6.14223 9.89112 6.80168 11.1813 7.74742 12.2491C8.81439 13.1961 10.1049 13.8557 11.4974 14.1658C11.6326 14.1941 11.7726 14.1883 11.905 14.149C12.0374 14.1097 12.1579 14.0382 12.2558 13.9408L13.3308 12.8408L15.4891 14.9991L13.8224 16.6658C11.0589 16.5946 8.42201 15.4917 6.43076 13.5741C4.50818 11.5821 3.4021 8.94173 3.33076 6.17414L4.99742 4.50747ZM16.6641 9.16581H18.3308C18.3524 8.17497 18.1731 7.19002 17.8039 6.27031C17.4346 5.3506 16.883 4.51518 16.1822 3.81439C15.4814 3.11359 14.646 2.56195 13.7263 2.19269C12.8065 1.82342 11.8216 1.6442 10.8308 1.66581V3.33247C11.604 3.30573 12.3745 3.43832 13.0943 3.722C13.8142 4.00569 14.468 4.43441 15.0151 4.98151C15.5622 5.52861 15.9909 6.18239 16.2746 6.90223C16.5582 7.62206 16.6908 8.39255 16.6641 9.16581Z"
                fill="white"
              />
              <path
                d="M10.8359 6.66667C12.5859 6.66667 13.3359 7.41667 13.3359 9.16667H15.0026C15.0026 6.48333 13.5193 5 10.8359 5V6.66667Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
