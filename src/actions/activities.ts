import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

export const getAllActivities = async () => {
  const response = await axios({
    method: "GET",
    url: `/api/activity`,
  });

  return response.data;
};

export const useActivities = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-all-activities"],
    queryFn: getAllActivities,
  });

  return { data, isLoading, isError };
};
