import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";

export default function Auth() {
  const navigate = useNavigate();
  const [viewUI, setView] = useState<string>("login");

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      navigate("/");
    }
  }, [navigate]);

  return viewUI === "register" ? (
    <Register setView={setView} />
  ) : (
    <Login setView={setView} />
  );
}
