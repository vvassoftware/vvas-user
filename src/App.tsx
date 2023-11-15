import { useEffect } from "react";

import WindowSizeProvider from "./context/WindowSize";
import RoutesApp from "./router/Routes";

export default function App() {
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");

    if (!access_token) {
      localStorage.setItem("access_token", "");
    }
  }, []);

  return (
    <WindowSizeProvider>
      <RoutesApp />
    </WindowSizeProvider>
  );
}
