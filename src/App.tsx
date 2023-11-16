import { useEffect } from "react";

import WindowSizeProvider from "./context/WindowSize";
import RoutesApp from "./router/Routes";

import { Toaster } from "react-hot-toast";

export default function App() {
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");

    if (!access_token) {
      localStorage.setItem("access_token", "");
    }
  }, []);

  return (
    <WindowSizeProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RoutesApp />
    </WindowSizeProvider>
  );
}
