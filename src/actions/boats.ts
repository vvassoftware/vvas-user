import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

export const getAllBoats = async () => {
  const boats = await axios({
    method: "GET",
    url: "/api/boat",
  });

  return boats.data;
};

export const useBoats = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-all-boats"],
    queryFn: getAllBoats,
  });

  return { data, isLoading, isError };
};
