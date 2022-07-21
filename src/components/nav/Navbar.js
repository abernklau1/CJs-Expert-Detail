import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const navlinks = ["home", "services", "contact", "about"]

const Navbar = () => {

  // Creates a state to control the navbar background depending on page
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

  // Creates a state to control navbar color on scroll on the home screen so user can still see navbar on white
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollState(window.scrollY > 30)
      return document.removeEventListener("scroll");
    })
  }, [scrollState])

  return (
    <section className={isHome ? scrollState ? "nav-container-home scroll" : "nav-container-home" : "nav-container"}>
      <nav className="navbar">
        <Logo />
        <ul className="nav-list">
          {navlinks.map((link, i) => {
            return (<li key={i} className="nav-list-items">
              <NavLink
                name={link}
                className="nav-link"
                to={link === "home" ? "/" : "/" + link}
                onClick={ChangeNavColor}
              >
                {link}
              </NavLink>
            </li>)
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
