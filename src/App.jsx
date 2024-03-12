import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/menu" element={<Homepage />} />
        <Route path="/reservations" element={<Homepage />} />
        <Route path="/order" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
