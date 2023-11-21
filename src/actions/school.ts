import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

export const getAllSchools = async () => {
  const response = await axios({
    method: "GET",
    url: `/api/school`,
  });

  return response.data;
};

export const getSchool = async (id: number) => {
  const response = await axios({
    method: "GET",
    url: `/api/school/${id}`,
  });

  return response.data;
};

export const useSchools = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-all-schools"],
    queryFn: getAllSchools,
  });

  return { data, isLoading, isError };
};

export const useSchool = (id: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-school", id],
    queryFn: () => getSchool(id),
  });

  return { data, isLoading, isError };
};
