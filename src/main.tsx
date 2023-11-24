import React from "react";
import ReactDOM from "react-dom/client";
import RoutesApp from "./router/Routes.tsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import UserAuthProvider from "./context/UserAuth.tsx";
import WindowSizeProvider from "./context/WindowSize.tsx";

import App from "./App.tsx";
import "./index.css";
import DataReservationProvider from "./context/DataReservation.tsx";
import TimezoneProvider from "./context/TimezoneContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TimezoneProvider>
        <UserAuthProvider>
          <DataReservationProvider>
            <WindowSizeProvider>
              <RoutesApp>
                <App />
              </RoutesApp>
            </WindowSizeProvider>
          </DataReservationProvider>
        </UserAuthProvider>
      </TimezoneProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
