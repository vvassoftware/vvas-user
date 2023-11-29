import React from "react";

import RoutesApp from "../router/Routes.tsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import UserAuthProvider from "../context/UserAuth.tsx";
import WindowSizeProvider from "../context/WindowSize.tsx";

import DataReservationProvider from "../context/DataReservation.tsx";
import TimezoneProvider from "../context/TimezoneContext.tsx";

const queryClient = new QueryClient();

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <TimezoneProvider>
        <UserAuthProvider>
          <DataReservationProvider>
            <WindowSizeProvider>
              <RoutesApp>{children}</RoutesApp>
            </WindowSizeProvider>
          </DataReservationProvider>
        </UserAuthProvider>
      </TimezoneProvider>
    </QueryClientProvider>
  );
}
