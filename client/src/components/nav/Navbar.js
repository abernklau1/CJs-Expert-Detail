import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="nav-container">
      <nav className="navbar">
        <Logo />
        <ul className="nav-list">
          <li className="nav-list-items">
            <NavLink id="home" className="nav-link" to="/#home">
              Home
            </NavLink>
          </li>
          <li className="nav-list-items">
            <NavLink id="services" className="nav-link" to="/services#services">
              Services
            </NavLink>
          </li>
          <li className="nav-list-items">
            <NavLink id="contact" className="nav-link" to="/contact#contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-list-items">
            <NavLink id="about" className="nav-link" to="/about#about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
