import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="./public/Logo .svg" alt="Little Lemon Logo" />
        <Nav />
      </div>
    </header>
  );
}
