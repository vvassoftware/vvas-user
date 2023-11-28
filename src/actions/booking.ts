import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

export const getAllBookingsBySchool = async (schoolId: number) => {
  const response = await axios({
    method: "GET",
    url: `/api/booking/school/${schoolId}`,
  });

  return response.data;
};

// eslint-disable-next-line
export const createBooking = async (data: any) => {
  const response = await axios({
    method: "POST",
    url: "/api/booking",
    data,
  });

  return response.data;
};

export const getAllBookingsByUser = async (userId: string) => {
  const response = await axios({
    method: "GET",
    url: `/api/booking/all/${userId}`,
  });

  return response.data;
};

export const getAllOldBookingsByUser = async (userId: string) => {
  const response = await axios({
    method: "GET",
    url: `/api/booking/all/old/${userId}`,
  });

  return response.data;
};

export const useBookingsByUser = (userId: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-bookings-by-user", userId],
    queryFn: () => getAllBookingsByUser(userId),
  });

  return { data, isLoading, isError };
};

export const useBookingsOldByUser = (userId: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-bookings-old-by-user", userId],
    queryFn: () => getAllOldBookingsByUser(userId),
  });

  return { data, isLoading, isError };
};
