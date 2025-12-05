import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to={"/"}>
        <img src="/public/images/Bottlesea.png" alt="logo cafeteria"/>
        <h1 className="logo-cafeteria"> Bottle Sea</h1>
        </Link>
        <Nav />
      </div>
    </header>
  );
};