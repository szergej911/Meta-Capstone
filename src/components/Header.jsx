import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img
            src="./public/Logo .svg"
            alt="Little Lemon Logo"
            className="header-img"
          />
        </Link>

        <Nav />
      </div>
    </header>
  );
}
