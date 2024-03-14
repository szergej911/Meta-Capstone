import BookingForm from "./BookingForm";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

export default function BookingPage() {
  const [availableTimes] = useState([
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const updateTimes = () => {};

  const initializeTimes = () => {
    return ["18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  return (
    <div>
      <Header />
      <BookingForm availableTimes={availableTimes} />
      <Footer />
    </div>
  );
}
