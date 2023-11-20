import { useEffect } from "react";

import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");

    if (!access_token) {
      localStorage.setItem("access_token", "");
    }
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      navigate("/auth");
    }
  }, [navigate]);

  return <Toaster position="top-center" reverseOrder={false} />;
}
