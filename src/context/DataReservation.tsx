import { createContext, useState } from "react";

interface DataToBookingProps {
  startTime: string;
  endTime: string;
  selectedDay: string;
  boatId: number;
  schoolId: number;
}

interface DataReservationProviderProps {
  children: React.ReactNode;
}

// eslint-disable-next-line
export const DataReservationContext = createContext<any>(null);

export default function DataReservationProvider({
  children,
}: DataReservationProviderProps) {
  const [dataToBooking, setDataToBooking] =
    useState<DataToBookingProps>();

  return (
    <DataReservationContext.Provider
      value={{ dataToBooking, setDataToBooking }}
    >
      {children}
    </DataReservationContext.Provider>
  );
}
