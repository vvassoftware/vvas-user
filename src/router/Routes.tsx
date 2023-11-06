import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import Bookings from "../screens/Bookings";
import Profile from "../screens/Profile";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
