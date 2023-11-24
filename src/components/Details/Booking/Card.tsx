import { useContext, useEffect, useState } from "react";

import {
  boatsReserved,
  statusReservation,
} from "../../../helpers/canMakeReservation";
import { getAllBookingsBySchool } from "../../../actions/booking";
import { DataReservationContext } from "../../../context/DataReservation";
import { getAllBoats } from "../../../actions/boats";
import { TimeZoneContext } from "../../../context/TimezoneContext";

interface CardProps {
  variant: "PARTIALLY" | "AVAILABLE" | "EXPIRED";
  startTime: string;
  // eslint-disable-next-line
  reservations: any;
  endTime: string;
  schoolId: number;
  onClick?: () => void;
}

export default function Card({
  startTime,
  reservations,
  endTime,
  schoolId,
  onClick,
}: CardProps) {
  const { dataToBooking } = useContext(DataReservationContext);
  const { formatWithUserTimeZone } = useContext(TimeZoneContext);

  const isSelected = reservations.find(
    // eslint-disable-next-line
    (item: any) => (item.startTime === startTime ? true : false)
  );

  // eslint-disable-next-line
  const [listBoats, setListBoats] = useState<any>(null);
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const startTimeNew = formatWithUserTimeZone(
        true,
        `${dataToBooking.selectedDay} ${startTime}`
      );
      const endTimeNew = formatWithUserTimeZone(
        true,
        `${dataToBooking.selectedDay} ${endTime}`
      );

      const boats = await getAllBoats();
      const reservations = await getAllBookingsBySchool(schoolId);
      // eslint-disable-next-line
      const boatsIds = boats.map((boat: any) => boat.id);

      const response = statusReservation(
        formatWithUserTimeZone,
        reservations,
        {
          startTime: startTimeNew,
          endTime: endTimeNew,
        }
      );
      setStatus(response);

      const existsBoatsWithReservations = boatsReserved(
        formatWithUserTimeZone,
        reservations,
        {
          startTime: startTimeNew,
          endTime: endTimeNew,
          boats: boatsIds,
        }
      );

      // eslint-disable-next-line
      const boatsFiltered = boats?.filter((boat: any) => {
        const hasReservation = existsBoatsWithReservations?.some(
          // eslint-disable-next-line
          (boatReserved: any) => boatReserved.id === boat.id
        );

        // true si no hay ninguna reserva con el mismo id
        return !hasReservation;
      });

      setListBoats(boatsFiltered);
    })();
  }, [
    startTime,
    endTime,
    schoolId,
    dataToBooking,
    formatWithUserTimeZone,
  ]);

  if (!listBoats)
    return (
      <div className="bg-neutral-200 animate-pulse h-[400px] w-full"></div>
    );

  return (
    <div
      className={`${
        listBoats?.length === 0
          ? "bg-red-500"
          : status
          ? "bg-[#92ACD3] cursor-none"
          : "bg-white cursor-pointer"
      } ${
        isSelected ? "ring-darkBlue" : "ring-transparent"
      } ring-2 rounded-sm p-1 flex flex-col gap-y-[2px]`}
      onClick={listBoats?.length === 0 ? () => {} : onClick}
    >
      <div
        className={`text-xs font-bold ${
          status ? "text-white" : "text-darkBlue"
        }`}
      >
        {startTime.split(" ")[0]}
        <span className="font-normal lowercase text-[10px]">
          {startTime.split(" ")[1]}
        </span>{" "}
        - {endTime.split(" ")[0]}
        <span className="font-normal lowercase text-[10px]">
          {endTime.split(" ")[1]}
        </span>
      </div>
      <div className="flex items-center gap-x-1">
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.90909 3.63636H11.6364V6.51636L7.27273 5.09091L2.90909 6.51636M1.41091 13.0909H1.45455C2.61818 13.0909 3.63636 12.4509 4.36364 11.6364C5.09091 12.4509 6.10909 13.0909 7.27273 13.0909C8.43636 13.0909 9.45455 12.4509 10.1818 11.6364C10.9091 12.4509 11.9273 13.0909 13.0909 13.0909H13.1273L14.5091 8.22546C14.5673 8.04364 14.5455 7.84 14.4655 7.66545C14.3709 7.49091 14.2182 7.36 14.0291 7.30182L13.0909 6.99636V3.63636C13.0909 3.25059 12.9377 2.88062 12.6649 2.60784C12.3921 2.33506 12.0221 2.18182 11.6364 2.18182H9.45455V0H5.09091V2.18182H2.90909C2.52332 2.18182 2.15335 2.33506 1.88057 2.60784C1.60779 2.88062 1.45455 3.25059 1.45455 3.63636V6.99636L0.516364 7.30182C0.327273 7.36 0.174545 7.49091 0.0799999 7.66545C-7.58605e-08 7.84 -0.0218182 8.04364 0.0363636 8.22546M13.0909 14.5455C12.08 14.5455 11.0691 14.2036 10.1818 13.5782C8.40727 14.8218 6.13818 14.8218 4.36364 13.5782C3.47636 14.2036 2.46545 14.5455 1.45455 14.5455H0V16H1.45455C2.45091 16 3.44727 15.7455 4.36364 15.2727C6.18182 16.2182 8.36364 16.2182 10.1818 15.2727C11.0982 15.7455 12.0873 16 13.0909 16H14.5455V14.5455H13.0909Z"
            fill={`${status ? "#FFFFFF" : "#1B4965"}`}
          />
        </svg>

        <span
          className={`font-medium text-sm ${
            status ? "text-white" : "text-darkBlue"
          }`}
        >
          {listBoats?.length}
        </span>
      </div>
      <span
        className={`block ${
          status ? "text-white" : "text-darkBlue"
        } font-medium text-sm`}
      >
        {listBoats?.length === 0
          ? "FULL"
          : status
          ? "PARTIALLY"
          : "AVAILABLE"}
      </span>
    </div>
  );
}
