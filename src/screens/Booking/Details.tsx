import { useState } from "react";
import dayjs from "dayjs";

import BackButton from "../../components/BackButton";
import ActivitiesCard from "../../components/Home/Activities/Card";
import PackagesCard from "../../components/Home/Packages/Card";
import Review from "../../components/Details/Review";
import Calendar from "../../components/Calendar";
import CardBookingHours from "../../components/Details/Booking/Card";
import Modal from "../../ui/Modal";
import { useHeight } from "../../hooks/useHeight";

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
  const { height } = useHeight();
  const valueHeight = +height.split("rem")[0] * 16;
  console.log(valueHeight);

  const [showModalCalendar, setShowModalCalendar] =
    useState<boolean>(false);
  const [showModalBooking, setShowModalBooking] =
    useState<boolean>(false);

  const [selectedDay, setSelectedDay] = useState<string>(
    dayjs().format()
  );

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
      <Modal show={showModalCalendar} setShow={setShowModalCalendar}>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-darkBlue">
            Calendar
          </h3>

          <button
            className="h-10 w-10 bg-darkBlue rounded-md grid place-items-center"
            onClick={() => setShowModalCalendar(false)}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.40799 6.00019L11.708 1.71019C11.8963 1.52188 12.0021 1.26649 12.0021 1.00019C12.0021 0.733884 11.8963 0.478489 11.708 0.290185C11.5197 0.101882 11.2643 -0.00390625 10.998 -0.00390625C10.7317 -0.00390625 10.4763 0.101882 10.288 0.290185L5.99799 4.59019L1.70799 0.290185C1.51968 0.101882 1.26429 -0.00390625 0.997986 -0.00390625C0.731684 -0.00390625 0.47629 0.101882 0.287986 0.290185C0.0996821 0.478489 -0.0061059 0.733884 -0.0061059 1.00019C-0.0061059 1.26649 0.0996821 1.52188 0.287986 1.71019L4.58799 6.00019L0.287986 10.2902C0.194257 10.3831 0.119863 10.4937 0.0690947 10.6156C0.018326 10.7375 -0.0078125 10.8682 -0.0078125 11.0002C-0.0078125 11.1322 0.018326 11.2629 0.0690947 11.3848C0.119863 11.5066 0.194257 11.6172 0.287986 11.7102C0.380949 11.8039 0.49155 11.8783 0.613409 11.9291C0.735268 11.9798 0.865974 12.006 0.997986 12.006C1.13 12.006 1.2607 11.9798 1.38256 11.9291C1.50442 11.8783 1.61502 11.8039 1.70799 11.7102L5.99799 7.41019L10.288 11.7102C10.3809 11.8039 10.4915 11.8783 10.6134 11.9291C10.7353 11.9798 10.866 12.006 10.998 12.006C11.13 12.006 11.2607 11.9798 11.3826 11.9291C11.5044 11.8783 11.615 11.8039 11.708 11.7102C11.8017 11.6172 11.8761 11.5066 11.9269 11.3848C11.9776 11.2629 12.0038 11.1322 12.0038 11.0002C12.0038 10.8682 11.9776 10.7375 11.9269 10.6156C11.8761 10.4937 11.8017 10.3831 11.708 10.2902L7.40799 6.00019Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="mt-5">
          <Calendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            setShowModalBooking={setShowModalBooking}
            setShowModalCalendar={setShowModalCalendar}
          />
        </div>
      </Modal>

      <Modal show={showModalBooking} setShow={setShowModalBooking}>
        <div className="flex items-center gap-x-4">
          <button
            className="h-10 w-10 bg-darkBlue rounded-md grid place-items-center"
            onClick={() => {
              setShowModalBooking(false);
              setShowModalCalendar(true);
            }}
          >
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.4 5.2L5.9 1.7C6.3 1.3 6.3 0.7 5.9 0.3C5.5 -0.1 4.9 -0.1 4.5 0.3L0.3 4.5C-0.1 4.9 -0.1 5.5 0.3 5.9L4.5 10.1C4.7 10.3 4.9 10.4 5.2 10.4C5.5 10.4 5.7 10.3 5.9 10.1C6.3 9.7 6.3 9.1 5.9 8.7L2.4 5.2Z"
                fill="white"
              />
            </svg>
          </button>

          <h3
            className={`${
              valueHeight <= 740 ? "text-[22px]" : "text-2xl"
            } font-bold text-darkBlue`}
          >
            Select booking hours
          </h3>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button className="p-2">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.336596 6.84188L6.84129 0.337192C7.29088 -0.112397 8.01787 -0.112397 8.46268 0.337192L9.54361 1.41812C9.99319 1.86771 9.99319 2.5947 9.54361 3.03951L4.93771 7.65497L9.54839 12.2656C9.99798 12.7152 9.99798 13.4422 9.54839 13.887L8.46746 14.9727C8.01787 15.4223 7.29088 15.4223 6.84607 14.9727L0.341379 8.46806C-0.112993 8.01847 -0.112993 7.29147 0.336596 6.84188Z"
                fill="#1B4965"
              />
            </svg>
          </button>
          <span className="font-bold text-darkBlue text-lg">
            {dayjs(selectedDay).format("MMMM DD YYYY")}
          </span>
          <button className="p-2">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.9759 9.15812L3.47121 15.6628C3.02162 16.1124 2.29463 16.1124 1.84982 15.6628L0.768894 14.5819C0.319305 14.1323 0.319305 13.4053 0.768894 12.9605L5.37479 8.34503L0.764112 3.73435C0.314523 3.28476 0.314523 2.55777 0.764112 2.11296L1.84504 1.02725C2.29463 0.577662 3.02162 0.577662 3.46643 1.02725L9.97112 7.53194C10.4255 7.98153 10.4255 8.70853 9.9759 9.15812Z"
                fill="#1B4965"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            valueHeight <= 740
              ? "max-h-[320px]"
              : valueHeight <= 850
              ? "max-h-[450px]"
              : "max-h-full"
          } bg-lightBlue p-3 mt-4 rounded-md grid grid-cols-3 gap-2 overflow-y-auto`}
        >
          <CardBookingHours variant="EXPIRED" />
          <CardBookingHours variant="EXPIRED" />
          <CardBookingHours variant="EXPIRED" />
          <CardBookingHours variant="EXPIRED" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="PARTIALLY" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="PARTIALLY" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="PARTIALLY" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
          <CardBookingHours variant="FREE" />
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM10 4C10.2449 4.00003 10.4813 4.08996 10.6644 4.25272C10.8474 4.41547 10.9643 4.63975 10.993 4.883L11 5V9.586L13.707 12.293C13.8863 12.473 13.9905 12.7144 13.9982 12.9684C14.006 13.2223 13.9168 13.4697 13.7488 13.6603C13.5807 13.8508 13.3464 13.9703 13.0935 13.9944C12.8406 14.0185 12.588 13.9454 12.387 13.79L12.293 13.707L9.293 10.707C9.13758 10.5514 9.03776 10.349 9.009 10.131L9 10V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4Z"
                fill="#1B4965"
              />
            </svg>

            <span className="font-bold text-darkBlue">
              08 to 10 am
            </span>
          </div>

          <div className="flex items-center gap-x-2">
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4Z"
                fill="#1B4965"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0V2H1V5C1 6.32608 1.52678 7.59785 2.46447 8.53553C3.40215 9.47322 4.67392 10 6 10C4.67392 10 3.40215 10.5268 2.46447 11.4645C1.52678 12.4021 1 13.6739 1 15V18H0V20H12V18H11V15C11 13.6739 10.4732 12.4021 9.53553 11.4645C8.59785 10.5268 7.32608 10 6 10C6.65661 10 7.30679 9.87067 7.91342 9.6194C8.52004 9.36812 9.07124 8.99983 9.53553 8.53553C9.99983 8.07124 10.3681 7.52004 10.6194 6.91342C10.8707 6.30679 11 5.65661 11 5V2H12V0H0ZM3 2H9V5C9 5.79565 8.68393 6.55871 8.12132 7.12132C7.55871 7.68393 6.79565 8 6 8C5.20435 8 4.44129 7.68393 3.87868 7.12132C3.31607 6.55871 3 5.79565 3 5V2ZM3 15V18H9V15C9 14.2044 8.68393 13.4413 8.12132 12.8787C7.55871 12.3161 6.79565 12 6 12C5.20435 12 4.44129 12.3161 3.87868 12.8787C3.31607 13.4413 3 14.2044 3 15Z"
                fill="#1B4965"
              />
            </svg>
            <span className="font-bold text-darkBlue">2 hours</span>
          </div>
        </div>

        <button className="font-medium mt-4 h-[50px] bg-darkBlue text-white rounded-md grid place-items-center w-full">
          Select
        </button>
      </Modal>

      <header className="p-5">
        <BackButton title="Florida Ski School" />
      </header>

      <div className="p-[10px] items-center grid grid-cols-[1fr,145px] z-[100] fixed bottom-0 left-0 bg-darkBlue w-full h-[100px]">
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
            {currentDate.format("MMMM YYYY")}
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
                  ? "bg-lightBlue"
                  : today === day
                  ? "bg-darkBlue"
                  : "border-darkBlue/50 border"
              } rounded-md grid place-items-center h-11 w-full`}
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

        <button
          className="text-white font-medium text-lg h-[50px] bg-darkBlue w-full rounded-md mt-5"
          onClick={() => setShowModalCalendar(true)}
        >
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
