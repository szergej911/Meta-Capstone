import { useState } from "react";

export default function BookingForm({ availableTimes }) {
  const [date, setDate] = useState("");
  const [guests, setGuest] = useState("");
  const [occasion] = useState(["Anniversary", "Birthday"]);

  return (
    <div>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          value={date}
          id="res-date"
          onChange={(e) => setDate(e.target.value)}
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
