import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

// eslint-disable-next-line
export const createCredit = async (data: any) => {
  const response = await axios({
    method: "POST",
    url: "/api/credit",
    data,
  });

  return response.data;
};

export const getAllCredits = async (userId: string) => {
  const response = await axios({
    method: "GET",
    url: `api/credit/all-by-user/${userId}`,
  });

  return response.data;
};

export const useCredits = (userId: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["get-all-credits", userId],
    queryFn: () => getAllCredits(userId),
  });

  return { data, isError, isLoading };
};
