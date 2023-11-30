import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import BackButton from "../../components/BackButton";
import { useHeight } from "../../hooks/useHeight";
import { TIME_SCHOOL } from "../../../data/time";
import { useSchool } from "../../actions/school";
import { DataReservationContext } from "../../context/DataReservation";
import {
  createBooking,
  getAllBookingsBySchool,
  useBookingsOldByUser,
} from "../../actions/booking";
import { canMakeReservation } from "../../helpers/canMakeReservation";
import { useBoats } from "../../actions/boats";
import { TimeZoneContext } from "../../context/TimezoneContext";
import { UserAuthContext } from "../../context/UserAuth";
import { updateCredit, useCredits } from "../../actions/credit";
import { genArrayTime } from "../../helpers/genArrayTime";
import {
  createReview,
  useGetAllReviewsBySchool,
} from "../../actions/review";
import Contact from "../../components/Details/Contact";
import Reviews from "../../components/Details/Reviews";
import MakeBooking from "../../components/Details/MakeBooking";
import Packages from "../../components/Details/Packages";
import Location from "../../components/Details/Location";
import ActivitiesSection from "../../components/Details/ActivitiesSection";
import FooterFixed from "../../components/Details/FooterFixed";
import ModalBoat from "../../components/Details/ModalBoat";
import ModalReview from "../../components/Details/ModalReview";
import ModalBookingHours from "../../components/Details/ModalBookingHours";
import ModalCalendar from "../../components/Details/ModalCalendar";

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { dataToBooking, setDataToBooking } = useContext(
    DataReservationContext
  );
  const { user } = useContext(UserAuthContext);

  const { formatWithUserTimeZone } = useContext(TimeZoneContext);
  const params = useParams();

  const today = formatWithUserTimeZone(true, new Date());
  const school = useSchool(+id! as number);
  const boats = useBoats();

  const currentDate = formatWithUserTimeZone(true, new Date());

  const { height } = useHeight();
  const valueHeight = +height.split("rem")[0] * 16;

  const { handleSubmit, register, setValue, watch } =
    useForm<FieldValues>({
      defaultValues: {
        stars: 0,
        review: "",
      },
    });

  const starsValue = watch("stars");
  const allReviews = useGetAllReviewsBySchool(id!);
  const booking = useBookingsOldByUser(user?.id);

  const handleCreateReview: SubmitHandler<FieldValues> = async (
    data
  ) => {
    if (booking?.data.length <= 0) {
      return toast.error("You cannot yet review the service");
    }

    const reviewDataToCreate = {
      content: data.review,
      stars: data.stars,
      userId: user?.id,
      schoolId: +id!,
    };

    const response = await createReview(reviewDataToCreate);

    if (response) {
      toast.success("Review created");
      setShowModalReview(false);
      allReviews.refetch();
      return;
    }

    return toast.error("Something went wrong. Try again");
  };

  const [showModalCalendar, setShowModalCalendar] =
    useState<boolean>(false);
  const [showModalBooking, setShowModalBooking] =
    useState<boolean>(false);
  const [showModalReview, setShowModalReview] =
    useState<boolean>(false);
  const [showModalBoat, setShowModalBoat] = useState<boolean>(false);

  const [boatSelected, setBoatSelected] = useState<number>(0);

  // eslint-disable-next-line
  const [hoursToBooking, setHoursToBooking] = useState<any[]>([]);

  const [selectedDay, setSelectedDay] = useState<string>(
    formatWithUserTimeZone(false, new Date(), "YYYY-MM-DD")
  );

  const startOfWeek = formatWithUserTimeZone(
    true,
    new Date()
  )?.startOf("week");

  const weekDates = [
    startOfWeek?.format("YYYY-MM-DD"),
    startOfWeek?.add(1, "day").format("YYYY-MM-DD"),
    startOfWeek?.add(2, "days").format("YYYY-MM-DD"),
    startOfWeek?.add(3, "days").format("YYYY-MM-DD"),
    startOfWeek?.add(4, "days").format("YYYY-MM-DD"),
    startOfWeek?.add(5, "days").format("YYYY-MM-DD"),
    startOfWeek?.add(6, "days").format("YYYY-MM-DD"),
    startOfWeek?.add(7, "days").format("YYYY-MM-DD"),
    startOfWeek?.add(8, "days").format("YYYY-MM-DD"),
    startOfWeek?.add(9, "days").format("YYYY-MM-DD"),
    startOfWeek?.add(10, "days").format("YYYY-MM-DD"),
    startOfWeek?.add(11, "days").format("YYYY-MM-DD"),
    startOfWeek?.add(12, "days").format("YYYY-MM-DD"),
    startOfWeek?.add(13, "days").format("YYYY-MM-DD"),
  ];

  function getSchedule(bookings) {
    if (bookings.length === 0) {
      return {
        startTime: "N/A",
        endTime: "N/A",
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
    setValue("review", "");
    setValue("stars", 0);
  }, [showModalBooking, showModalReview, setValue]);

  useEffect(() => {
    setDataToBooking({
      startTime: "",
      endTime: "",
      selectedDay: "",
      boatId: 0,
      schoolId: 0,
    });
  }, [setDataToBooking]);

  // eslint-disable-next-line
  const [reservations, setReservations] = useState<any>([]);

  const selectedDayTime = formatWithUserTimeZone(
    false,
    selectedDay,
    "YYYY-MM-DD"
  );

  const handleReservation = (startTime: string, endTime: string) => {
    const newReservations = TIME_SCHOOL.filter((time) => {
      const timeStart = formatWithUserTimeZone(
        true,
        `${selectedDayTime} ${time.startTime}`
      );
      const timeEnd = formatWithUserTimeZone(
        true,
        `${selectedDayTime} ${time.endTime}`
      );

      const selectedDayTimeStart = formatWithUserTimeZone(
        true,
        `${selectedDayTime} ${startTime}`
      );
      const selectedDayTimeEnd = formatWithUserTimeZone(
        true,
        `${selectedDayTime} ${endTime}`
      );

      return (
        (timeStart.isSameOrAfter(selectedDayTimeStart) ||
          timeStart.isSame(selectedDayTimeEnd)) &&
        timeEnd.isSameOrBefore(selectedDayTimeEnd)
      );
    });

    // eslint-disable-next-line
    setReservations((prevReservations: any) => [
      ...prevReservations,
      ...newReservations,
    ]);
  };

  // eslint-disable-next-line
  function parseTime(timeStr: string): Date | null {
    const matchResult = timeStr.match(/(\d{2}):(\d{2}) (am|pm)/i);

    if (!matchResult) {
      console.error("Formato de tiempo no válido:", timeStr);
      return null;
    }

    const [hours, minutes, meridiem] = matchResult.slice(1);
    let parsedHours = parseInt(hours, 10);

    // Convertir las horas a formato de 24 horas si es PM
    if (meridiem.toLowerCase() === "pm" && parsedHours !== 12) {
      parsedHours += 12;
    } else if (
      meridiem.toLowerCase() === "am" &&
      parsedHours === 12
    ) {
      parsedHours = 0;
    }

    const result = new Date();
    result.setHours(parsedHours, parseInt(minutes, 10), 0, 0);
    return result;
  }

  useEffect(() => {
    if (hoursToBooking.length > 2) {
      setReservations([]);
      setHoursToBooking([]);
      return;
    }

    if (hoursToBooking.length === 1) {
      handleReservation(
        hoursToBooking[0].startTime,
        hoursToBooking[0].endTime
      );
    }

    if (hoursToBooking.length > 1) {
      const minStartTimeObj = hoursToBooking.reduce(
        (min, current) => {
          // eslint-disable-next-line
          const minTime: any = parseTime(min.startTime);
          // eslint-disable-next-line
          const currentTime: any = parseTime(current.startTime);
          return minTime.getTime() < currentTime.getTime()
            ? min
            : current;
        }
      );

      const maxEndTimeObj = hoursToBooking.reduce((max, current) => {
        // eslint-disable-next-line
        const maxTime: any = parseTime(max.endTime);
        // eslint-disable-next-line
        const currentTime: any = parseTime(current.endTime);
        return maxTime.getTime() > currentTime.getTime()
          ? max
          : current;
      });

      const minStartTime = minStartTimeObj.startTime;
      const maxEndTime = maxEndTimeObj.endTime;

      setDataToBooking({
        ...dataToBooking,
        startTime: minStartTime,
        endTime: maxEndTime,
      });

      handleReservation(minStartTime, maxEndTime);
    }
    // eslint-disable-next-line
  }, [hoursToBooking]);

  const bookingSchedule = getSchedule(reservations);

  const credits = useCredits(user?.id);
  const creditsOfSchool = credits.data?.find(
    // eslint-disable-next-line
    (credit: any) => credit.school.id === +id!
  )?.value;

  const handleCreateReservation = async () => {
    const startTime = formatWithUserTimeZone(
      true,
      `${dataToBooking.selectedDay} ${dataToBooking.startTime}`
    );
    const endTime = formatWithUserTimeZone(
      true,
      `${dataToBooking.selectedDay} ${dataToBooking.endTime}`
    );

    const reservationsExisting = await getAllBookingsBySchool(+id!);
    const dataToCreateBooking = {
      schoolId: +id!,
      startTime: dayjs.utc(startTime).format(),
      endTime: dayjs.utc(endTime).format(),
      userId: user?.id,
      boats: [+boatSelected],
    };

    const existBookingHere = canMakeReservation(
      formatWithUserTimeZone,
      reservationsExisting,
      {
        startTime,
        endTime,
        boats: [boatSelected],
      }
    );

    const diffHours =
      dayjs.utc(endTime).diff(dayjs.utc(startTime), "minutes") / 60;

    if (existBookingHere) {
      return toast.error("Its not possible to create booking");
    }

    // consulting about credits
    const existRegisterOfCredit = credits?.data.find(
      // eslint-disable-next-line
      (credit: any) => +credit.school.id === +id!
    );

    if (!existRegisterOfCredit) {
      toast.error("You do not have purchased credits");
      return;
    }

    if (existRegisterOfCredit?.value < diffHours) {
      toast.error("You don't have enough credits");
      return;
    }

    const dataCreditToUpdate = {
      value: existRegisterOfCredit?.value - diffHours,
    };

    const responseCredits = await updateCredit(
      existRegisterOfCredit?.id,
      dataCreditToUpdate
    );

    const response = await createBooking(dataToCreateBooking);

    if (!responseCredits) {
      toast.error("Something went wrong. Try again");
      return;
    }

    if (response) {
      toast.success("Booking created");
      setShowModalBooking(false);
      setShowModalBoat(false);
      navigate("/bookings");
      return;
    }

    toast.error("Something went wrong. Try again");
  };

  if (school.isLoading) return <div>loading..</div>;
  if (school.isError) return <div>something went wrong</div>;

  const arrayTime = genArrayTime(
    school.data.startTime,
    school.data.endTime,
    formatWithUserTimeZone
  );

  return (
    <div className="mb-[128px]">
      <ModalCalendar
        showModalCalendar={showModalCalendar}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        setShowModalBooking={setShowModalBooking}
        setShowModalCalendar={setShowModalCalendar}
      />

      <ModalBookingHours
        id={id}
        setReservations={setReservations}
        showModalBooking={showModalBooking}
        formatWithUserTimeZone={formatWithUserTimeZone}
        valueHeight={valueHeight}
        arrayTime={arrayTime}
        selectedDay={selectedDay}
        setHoursToBooking={setHoursToBooking}
        bookingSchedule={bookingSchedule}
        hoursToBooking={hoursToBooking}
        reservations={reservations}
        setShowModalBooking={setShowModalBooking}
        setShowModalBoat={setShowModalBoat}
        setShowModalCalendar={setShowModalCalendar}
        setDataToBooking={setDataToBooking}
        dataToBooking={dataToBooking}
        setSelectedDay={setSelectedDay}
      />

      <ModalReview
        showModalReview={showModalReview}
        setShowModalReview={setShowModalReview}
        handleSubmit={handleSubmit}
        handleCreateReview={handleCreateReview}
        setValue={setValue}
        starsValue={starsValue}
        register={register}
      />

      <ModalBoat
        showModalBoat={showModalBoat}
        setShowModalBoat={setShowModalBoat}
        setShowModalBooking={setShowModalBooking}
        valueHeight={valueHeight}
        boats={boats}
        setBoatSelected={setBoatSelected}
        bookingSchedule={bookingSchedule}
        hoursToBooking={hoursToBooking}
        reservations={reservations}
        boatSelected={boatSelected}
        handleCreateReservation={handleCreateReservation}
      />

      <header className="p-5">
        <BackButton title={school.data.name} />
      </header>

      <FooterFixed
        dataToBooking={dataToBooking}
        creditsOfSchool={creditsOfSchool}
        school={school}
        setSelectedDay={setSelectedDay}
        setDataToBooking={setDataToBooking}
        formatWithUserTimeZone={formatWithUserTimeZone}
        setShowModalBooking={setShowModalBooking}
      />

      <div className="px-5">
        <img
          src={school.data.image}
          alt=""
          className="w-full h-[200px] object-cover rounded-md"
        />
        <p className="font-medium text-darkBlue mt-3">
          {school.data.locationName}
        </p>
        <p className="text-neutral-700 mt-2">
          {school.data.description}
        </p>
      </div>

      <ActivitiesSection school={school} />
      <Location school={school} />
      <Packages school={school} params={params} />

      <MakeBooking
        today={today}
        setSelectedDay={setSelectedDay}
        currentDate={currentDate}
        weekDates={weekDates}
        setDataToBooking={setDataToBooking}
        dataToBooking={dataToBooking}
        setShowModalBooking={setShowModalBooking}
        formatWithUserTimeZone={formatWithUserTimeZone}
        setShowModalCalendar={setShowModalCalendar}
      />

      <Reviews
        schoolId={id!}
        setShowModalReview={setShowModalReview}
        allReviews={allReviews}
      />
      <Contact school={school} />
    </div>
  );
}
