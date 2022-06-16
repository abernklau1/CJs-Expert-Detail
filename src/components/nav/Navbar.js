import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const url = window.location.pathname;
  const [isHome, setIsHome] = useState(url === "/" ? true : false);
  const ChangeNavColor = (e) => {
    const linkName = e.target.name;

    if (linkName !== "home") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  };
  return (
    <section className={isHome ? "nav-container" : "nav-container not-home"}>
      <nav className="navbar">
        <Logo />
        <ul className="nav-list">
          <li className="nav-list-items">
            <NavLink
              name="home"
              exact="true"
              className="nav-link"
              to="/"
              onClick={ChangeNavColor}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-list-items">
            <NavLink
              name="services"
              exact="true"
              className="nav-link"
              to="/services"
              onClick={ChangeNavColor}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-list-items">
            <NavLink
              name="contact"
              exact="true"
              className="nav-link"
              to="/contact"
              onClick={ChangeNavColor}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-list-items">
            <NavLink
              name="about"
              exact="true"
              className="nav-link"
              to="/about"
              onClick={ChangeNavColor}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
