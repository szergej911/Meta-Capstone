import BookingForm from "./BookingForm";
import Footer from "./Footer";
import Header from "./Header";
import { useReducer } from "react";

const initialState = ["18:00", "19:00", "20:00", "21:00", "22:00"];

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return state;
    default:
      return state;
  }
};

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(reducer, initialState);

  const updateTimes = () => {
    // Placeholder function to update times
  };

  return (
    <div>
      <Header />
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        dispatch={dispatch}
      />
      <Footer />
    </div>
  );
}
