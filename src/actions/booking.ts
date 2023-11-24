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
