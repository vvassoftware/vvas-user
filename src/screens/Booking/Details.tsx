import { useEffect, useState } from "react";
import dayjs from "dayjs";

import BackButton from "../../components/BackButton";
import ActivitiesCard from "../../components/Home/Activities/Card";
import PackagesCard from "../../components/Home/Packages/Card";
import Review from "../../components/Details/Review";
import Calendar from "../../components/Calendar";
import CardBookingHours from "../../components/Details/Booking/Card";
import Modal from "../../ui/Modal";
import { useHeight } from "../../hooks/useHeight";

import { TIME_SCHOOL } from "../../../data/time";

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

  const [showModalCalendar, setShowModalCalendar] =
    useState<boolean>(false);
  const [showModalBooking, setShowModalBooking] =
    useState<boolean>(false);

  // eslint-disable-next-line
  const [hoursToBooking, setHoursToBooking] = useState<any[]>([]);

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

  function getSchedule(bookings) {
    if (bookings.length === 0) {
      return {
        startTime: "N/A", // No bookings, so no minimum startTime
        endTime: "N/A", // No bookings, so no maximum endTime
      };
    }

    bookings.sort((a, b) => {
      return (
        convertToMinutes(a.startTime) - convertToMinutes(b.startTime)
      );
    });

    const lowestStartTime = bookings[0].startTime;

    bookings.sort((a, b) => {
      return (
        convertToMinutes(b.endTime) - convertToMinutes(a.endTime)
      );
    });

    const highestEndTime = bookings[0].endTime;

    return {
      startTime: lowestStartTime,
      endTime: highestEndTime,
    };
  }

  function convertToMinutes(time) {
    const [hour, minutes, period] = time.split(/[:\s]/);
    let totalMinutes = parseInt(hour) * 60 + parseInt(minutes);

    if (period.toUpperCase() === "PM" && parseInt(hour) !== 12) {
      totalMinutes += 12 * 60;
    }

    return totalMinutes;
  }

  useEffect(() => {
    setHoursToBooking([]);
  }, [showModalBooking]);

  const bookingSchedule = getSchedule(hoursToBooking);

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
        <div className="flex items-center gap-x-3">
          <button
            className={`${
              valueHeight <= 740 ? "w-[36px] h-[36px]" : "h-10 w-10"
            } bg-darkBlue rounded-md grid place-items-center`}
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
              valueHeight <= 740 ? "text-lg" : "text-2xl"
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
          <span
            className={`${
              valueHeight <= 740 ? "text-base" : "text-lg"
            } font-bold text-darkBlue`}
          >
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
              ? "max-h-[400px]"
              : "max-h-full"
          } bg-lightBlue p-3 mt-4 -mx-1 rounded-md grid grid-cols-3 gap-2 overflow-y-auto`}
        >
          {/* eslint-disable-next-line */}
          {TIME_SCHOOL.map((time: any, index: number) => {
            return (
              <div
                key={index}
                onClick={() => {
                  if (hoursToBooking.includes(time)) {
                    setHoursToBooking((prevValue) =>
                      prevValue.filter(
                        (item) => item.starTime !== time.starTime
                      )
                    );
                    return;
                  }
                  setHoursToBooking([...hoursToBooking, time]);
                }}
              >
                <CardBookingHours
                  variant="FREE"
                  hoursToBooking={hoursToBooking}
                  startTime={time.startTime}
                  endTime={time.endTime}
                />
              </div>
            );
          })}
        </div>

        <div className="-mx-1 flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0026 0.333984C10.6846 0.333984 13.6693 3.31865 13.6693 7.00065C13.6693 10.6827 10.6846 13.6673 7.0026 13.6673C3.3206 13.6673 0.335938 10.6827 0.335938 7.00065C0.335938 3.31865 3.3206 0.333984 7.0026 0.333984ZM7.0026 1.66732C5.58812 1.66732 4.23156 2.22922 3.23137 3.22941C2.23117 4.22961 1.66927 5.58616 1.66927 7.00065C1.66927 8.41514 2.23117 9.77169 3.23137 10.7719C4.23156 11.7721 5.58812 12.334 7.0026 12.334C8.41709 12.334 9.77365 11.7721 10.7738 10.7719C11.774 9.77169 12.3359 8.41514 12.3359 7.00065C12.3359 5.58616 11.774 4.22961 10.7738 3.22941C9.77365 2.22922 8.41709 1.66732 7.0026 1.66732ZM7.0026 3.00065C7.16589 3.00067 7.3235 3.06062 7.44552 3.16913C7.56754 3.27763 7.6455 3.42715 7.6646 3.58932L7.66927 3.66732V6.72465L9.47394 8.52932C9.5935 8.64929 9.66292 8.81027 9.66809 8.97957C9.67326 9.14887 9.61379 9.31379 9.50177 9.44084C9.38975 9.56788 9.23357 9.64752 9.06495 9.66358C8.89634 9.67965 8.72793 9.63092 8.59394 9.52732L8.53127 9.47198L6.53127 7.47198C6.42766 7.36828 6.36111 7.23332 6.34194 7.08798L6.33594 7.00065V3.66732C6.33594 3.49051 6.40618 3.32094 6.5312 3.19591C6.65622 3.07089 6.82579 3.00065 7.0026 3.00065Z"
                  fill="#1B4965"
                />
              </svg>

              <span className="font-medium text-darkBlue text-sm lowercase">
                {bookingSchedule.startTime} to{" "}
                {bookingSchedule.endTime}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66927 4H7.33594V4.66667C7.33594 4.84348 7.40618 5.01305 7.5312 5.13807C7.65622 5.2631 7.82579 5.33333 8.0026 5.33333C8.17942 5.33333 8.34898 5.2631 8.47401 5.13807C8.59903 5.01305 8.66927 4.84348 8.66927 4.66667V4Z"
                fill="#1B4965"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 1.33398V2.66732H4.66667V4.66732C4.66667 5.55137 5.01786 6.39922 5.64298 7.02434C6.2681 7.64946 7.11595 8.00065 8 8.00065C7.11595 8.00065 6.2681 8.35184 5.64298 8.97696C5.01786 9.60208 4.66667 10.4499 4.66667 11.334V13.334H4V14.6673H12V13.334H11.3333V11.334C11.3333 10.4499 10.9821 9.60208 10.357 8.97696C9.7319 8.35184 8.88406 8.00065 8 8.00065C8.43774 8.00065 8.87119 7.91443 9.27561 7.74692C9.68003 7.5794 10.0475 7.33387 10.357 7.02434C10.6666 6.71481 10.9121 6.34735 11.0796 5.94293C11.2471 5.53851 11.3333 5.10506 11.3333 4.66732V2.66732H12V1.33398H4ZM6 2.66732H10V4.66732C10 5.19775 9.78929 5.70646 9.41421 6.08153C9.03914 6.4566 8.53043 6.66732 8 6.66732C7.46957 6.66732 6.96086 6.4566 6.58579 6.08153C6.21071 5.70646 6 5.19775 6 4.66732V2.66732ZM6 11.334V13.334H10V11.334C10 10.8036 9.78929 10.2948 9.41421 9.91977C9.03914 9.5447 8.53043 9.33398 8 9.33398C7.46957 9.33398 6.96086 9.5447 6.58579 9.91977C6.21071 10.2948 6 10.8036 6 11.334Z"
                fill="#1B4965"
              />
            </svg>

            <span className="font-medium text-darkBlue text-sm">
              <span className="font-bold">
                {hoursToBooking.length / 2}
              </span>{" "}
              h
            </span>
          </div>
        </div>

        <button className="font-medium mt-4 h-[50px] bg-darkBlue text-white rounded-md grid place-items-center w-full">
          Select
        </button>
      </Modal>

      <header className="p-5">
        <BackButton title="Florida Ski School" />
      </header>

      <div className="p-[10px] items-center grid grid-cols-[1fr,120px] gap-x-2 z-[100] fixed bottom-0 left-0 bg-darkBlue w-full h-[100px]">
        <div>
          <p className="text-white text-sm">
            You have <span className="font-bold">7 h</span> remaning
          </p>
          <p className="text-white mt-[3px] text-sm">
            <span className="font-bold">Open from:</span> 05am to 08pm
          </p>
        </div>

        <button className="h-[50px] text-sm rounded-md bg-white text-darkBlue font-bold">
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
              onClick={() => {
                if (dayjs(day).isBefore(today, "day")) return;

                setSelectedDay(dayjs(day).format());
                setShowModalBooking(true);
              }}
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
            width="200"
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
              <p className="text-sm text-darkBlue">Florida, Miami</p>
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
