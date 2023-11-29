import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

// eslint-disable-next-line
export const createReview = async (data: any) => {
  const response = await axios({
    method: "POST",
    url: "/api/review",
    data: JSON.stringify(data),
  });

  return response.data;
};

export const getAllReviewsBySchool = async (schoolId: string) => {
  const response = await axios({
    method: "",
    url: `/api/review/all-school/${schoolId}`,
  });

  return response.data;
};

export const useGetAllReviewsBySchool = (schoolId: string) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["get-all-review-school", schoolId],
    queryFn: () => getAllReviewsBySchool(schoolId),
  });

  return { data, isLoading, isError, refetch };
};
