import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm({ availableTimes, updateTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [guests, setGuest] = useState("");
  const [occasion] = useState(["Anniversary", "Birthday"]);

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          value={date}
          id="res-date"
          onChange={handleDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuest(e.target.value)}
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          {occasion.map((occasions) => (
            <option key={occasions} value={occasions}>
              {occasions}
            </option>
          ))}
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}
