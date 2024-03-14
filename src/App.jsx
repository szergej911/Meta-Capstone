import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/menu" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
