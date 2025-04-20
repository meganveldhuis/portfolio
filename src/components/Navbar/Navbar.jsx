import "./Navbar.scss";
import { useEffect, useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${hamburgerOpen ? "navbar--open" : ""}`}>
      <div className="navbar__hamburger">
        <Hamburger
          hamburgerOpen={hamburgerOpen}
          toggleHamburger={toggleHamburger}
        />
      </div>
      <a className="navbar__left" href="/">
        MV.
      </a>
      <ul
        className={`navbar__list ${hamburgerOpen ? "navbar__list--open" : ""}`}
      >
        <li className="navbar__item">
          <a
            className="navbar__item"
            href="/#projects"
            onClick={() => setHamburgerOpen(false)}
          >
            Projects
          </a>
        </li>
        <li className="navbar__item">
          <a
            className="navbar__item"
            href="/Resume"
            onClick={() => setHamburgerOpen(false)}
          >
            Resume
          </a>
        </li>
        <li className="navbar__item">
          <a
            className="navbar__item"
            href="/#contact"
            onClick={() => setHamburgerOpen(false)}
          >
            Contact
          </a>
        </li>
        <li className="navbar__item">
          <a
            className="navbar__item"
            href="/#photography"
            onClick={() => setHamburgerOpen(false)}
          >
            Photography
          </a>
        </li>
        <li>
          <button>sun</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
