import axios from "../config/axios";
import { InputRegister } from "../components/Auth/Register";

export const createUser = async (data: InputRegister) => {
  const response = await axios({
    method: "POST",
    url: "/api/user",
    data: JSON.stringify(data),
  });

  return response.data;
};

export const loginUser = async (data: InputRegister) => {
  const response = await axios({
    method: "POST",
    url: "/api/user/login",
    data: JSON.stringify(data),
  });

  return response.data;
};
