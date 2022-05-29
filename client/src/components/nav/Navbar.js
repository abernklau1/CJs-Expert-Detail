import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="nav-container">
      <nav className="navbar">
        <Logo />
        <ul className="nav-list">
          <li className="nav-list-items">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-list-items">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
