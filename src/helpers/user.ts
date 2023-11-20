import { jwtDecode } from "jwt-decode";
import { getUserInfo } from "../actions/user";

export const tokenToUserInfo = (token: string) => {
  const user = jwtDecode(token);
  return user;
};

export const login = async (
  token: string,
  // eslint-disable-next-line
  setUser: (value: any) => void
) => {
  localStorage.setItem("access_token", token);
  // eslint-disable-next-line
  const userJwtPayload: any = tokenToUserInfo(token);
  const user = await getUserInfo(userJwtPayload?.id);
  setUser(user);
};
