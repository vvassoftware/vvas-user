import { createContext, useState } from "react";

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

  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
}
