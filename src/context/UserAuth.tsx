import { createContext, useEffect, useState } from "react";

import { tokenToUserInfo } from "../helpers/user";
import { getUserInfo } from "../actions/user";

interface UserAuthProps {
  children: React.ReactNode;
}

// eslint-disable-next-line
export const UserAuthContext = createContext<any>(null);

export default function UserAuthProvider({
  children,
}: UserAuthProps) {
  // eslint-disable-next-line
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const access_token = localStorage.getItem("access_token");

      if (access_token) {
        // eslint-disable-next-line
        const userCred: any = tokenToUserInfo(access_token);
        const user = await getUserInfo(userCred.id);
        setUser(user);
      }
    })();
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
}
