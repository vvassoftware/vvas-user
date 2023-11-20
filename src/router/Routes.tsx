import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import Bookings from "../screens/Bookings";
import Profile from "../screens/Profile";

import PastBookings from "../screens/Settings/PastBookings";
import PaymentsMethods from "../screens/Settings/PaymentsMethods";
import HoursRemaining from "../screens/Settings/HoursRemaining";

import Details from "../screens/Booking/Details";
import Method from "../screens/Payments/Method";
import Tickets from "../screens/Payments/Tickets";
import Reservation from "../screens/Booking/Reservation";
import Auth from "../screens/Auth";

export default function RoutesApp({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/booking/reservation/:id"
          element={<Reservation />}
        />

        {/* Settings */}
        <Route path="/past-bookings" element={<PastBookings />} />
        <Route
          path="/payments-methods"
          element={<PaymentsMethods />}
        />
        <Route path="/hours-remaining" element={<HoursRemaining />} />

        {/* Auth */}
        <Route path="/auth" element={<Auth />} />

        {/* Main */}
        <Route path="/booking/:id" element={<Details />} />
        <Route path="/payments" element={<Method />} />
        <Route path="/payments/ticket" element={<Tickets />} />
      </Routes>
      <div>{children}</div>
    </BrowserRouter>
  );
}
