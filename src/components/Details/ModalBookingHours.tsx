import Modal from "../../ui/Modal";
import CardBookingHours from "../../components/Details/Booking/Card";

export default function ModalBookingHours({
  id,
  setReservations,
  showModalBooking,
  formatWithUserTimeZone,
  valueHeight,
  arrayTime,
  selectedDay,
  setHoursToBooking,
  bookingSchedule,
  hoursToBooking,
  reservations,
  setShowModalBooking,
  setShowModalBoat,
  setShowModalCalendar,
  setDataToBooking,
  dataToBooking,
  setSelectedDay,
}) {
  return (
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
        <button
          onClick={() => {
            const dateSubtrack = formatWithUserTimeZone(
              true,
              selectedDay
            ).subtract(1, "day");

            setSelectedDay(
              formatWithUserTimeZone(
                false,
                dateSubtrack,
                "YYYY-MM-DD"
              )
            );
            setDataToBooking({
              ...dataToBooking,
              selectedDay: formatWithUserTimeZone(
                false,
                dateSubtrack,
                "YYYY-MM-DD"
              ),
            });
          }}
          className="p-2"
        >
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
          {formatWithUserTimeZone(false, selectedDay, "MMMM DD YYYY")}
        </span>
        <button
          className="p-2"
          onClick={() => {
            const dateSubtrack = formatWithUserTimeZone(
              true,
              selectedDay
            ).add(1, "day");
            setSelectedDay(
              formatWithUserTimeZone(
                false,
                dateSubtrack,
                "YYYY-MM-DD"
              )
            );
            setDataToBooking({
              ...dataToBooking,
              selectedDay: formatWithUserTimeZone(
                false,
                dateSubtrack,
                "YYYY-MM-DD"
              ),
            });
          }}
        >
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
        {arrayTime?.map((time: any, index: number) => {
          return (
            <div key={index}>
              <CardBookingHours
                selectedDay={selectedDay}
                variant="AVAILABLE"
                reservations={reservations}
                startTime={time.startTime}
                endTime={time.endTime}
                schoolId={+id!}
                onClick={() => {
                  if (reservations.length > 2) {
                    setHoursToBooking([]);
                    setReservations([]);
                    return;
                  }

                  if (hoursToBooking.includes(time)) {
                    setHoursToBooking((prevValue) =>
                      prevValue.filter(
                        (item) => item.startTime !== time.startTime
                      )
                    );
                    return;
                  }

                  setHoursToBooking([...hoursToBooking, time]);
                }}
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
              {bookingSchedule.startTime} to {bookingSchedule.endTime}
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
              {hoursToBooking.length === 1
                ? "0.5"
                : reservations?.length - 1 / 2 > 0
                ? (reservations?.length - 1) / 2
                : "0"}
            </span>{" "}
            h
          </span>
        </div>
      </div>

      <button
        disabled={reservations?.length <= 2}
        className={`${
          reservations?.length <= 2 ? "opacity-60" : "opacity-100"
        } font-medium mt-4 h-[50px] bg-darkBlue text-white rounded-md grid place-items-center w-full`}
        onClick={() => {
          setShowModalBooking(false);
          setShowModalBoat(true);
        }}
      >
        Select
      </button>
    </Modal>
  );
}
