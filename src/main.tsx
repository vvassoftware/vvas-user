import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import RoutesApp from "./router/Routes.tsx";
import WindowSizeProvider from "./context/WindowSize.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WindowSizeProvider>
      <RoutesApp>
        <App />
      </RoutesApp>
    </WindowSizeProvider>
  </React.StrictMode>
);
