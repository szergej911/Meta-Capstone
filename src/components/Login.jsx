import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    if (passwordRegex.test(password)) {
      navigate("/");
    } else {
      setMessage(
        "The password must consists 1 uppercase, 1 lowercase, 1 number and a special character!"
      );
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Header />
      <form action="" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="check">Show Password</label>
        <input
          id="check"
          type="checkbox"
          value={showPassword}
          onChange={() => setShowPassword((prev) => !prev)}
        />
        <button type="submit">Submit</button>
      </form>
      <h2>{message}</h2>
      <Footer />
    </div>
  );
}
