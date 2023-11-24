import { createContext, useEffect, useState } from "react";
import jstz from "jstz";
import dayjs from "dayjs";

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

// eslint-disable-next-line
export const TimeZoneContext = createContext<any>(null);

interface TimeZoneProviderProps {
  children: React.ReactNode;
}

export default function TimezoneProvider({
  children,
}: TimeZoneProviderProps) {
  const [userTimeZone, setUserTimeZone] = useState<string>("");

  useEffect(() => {
    const detectUserTimeZone = async () => {
      try {
        const detectedTimeZone = jstz.determine();
        setUserTimeZone(detectedTimeZone.name());
      } catch (error) {
        console.log(error, "TIMEZONE_CONTEXT");
      }
    };

    detectUserTimeZone();
  }, []);

  const formatWithUserTimeZone = (
    nativeFormat: boolean,
    date: string,
    formatString: string
  ) => {
    if (!userTimeZone) return;

    if (nativeFormat) {
      return dayjs(date, { locale: "es" }).tz(userTimeZone);
    }

    return dayjs(date).tz(userTimeZone).format(formatString);
  };

  return (
    <TimeZoneContext.Provider
      value={{ userTimeZone, formatWithUserTimeZone }}
    >
      {children}
    </TimeZoneContext.Provider>
  );
}
