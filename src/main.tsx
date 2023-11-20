import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import RoutesApp from "./router/Routes.tsx";
import WindowSizeProvider from "./context/WindowSize.tsx";
import UserAuthProvider from "./context/UserAuth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WindowSizeProvider>
      <UserAuthProvider>
        <RoutesApp>
          <App />
        </RoutesApp>
      </UserAuthProvider>
    </WindowSizeProvider>
  </React.StrictMode>
);
