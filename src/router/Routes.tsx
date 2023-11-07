import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import Bookings from "../screens/Bookings";
import Profile from "../screens/Profile";

import PastBookings from "../screens/Settings/PastBookings";
import PaymentsMethods from "../screens/Settings/PaymentsMethods";
import HoursRemaining from "../screens/Settings/HoursRemaining";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/profile" element={<Profile />} />

        {/* Settings */}
        <Route path="/past-bookings" element={<PastBookings />} />
        <Route
          path="/payments-methods"
          element={<PaymentsMethods />}
        />
        <Route path="/hours-remaining" element={<HoursRemaining />} />
      </Routes>
    </BrowserRouter>
  );
}
