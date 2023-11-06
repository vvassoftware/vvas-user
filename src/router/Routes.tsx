import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Bookings from '../screens/Bookings';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}
