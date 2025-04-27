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
      <div className="navbar__top">
        <Hamburger
          hamburgerOpen={hamburgerOpen}
          toggleHamburger={toggleHamburger}
        />
        {hamburgerOpen ? (
          <></>
        ) : (
          <>
            <a className="navbar__logo" href="/">
              MV.
            </a>
            <button className="navbar__mode">sun</button>
          </>
        )}
      </div>

      <ul
        className={`navbar__list ${hamburgerOpen ? "navbar__list--open" : ""}`}
      >
        <li className="navbar__item">
          <a
            className="navbar__link"
            href="/#projects"
            onClick={() => setHamburgerOpen(false)}
          >
            Projects
          </a>
        </li>
        <li className="navbar__item">
          <a
            className="navbar__link"
            href="/Resume"
            onClick={() => setHamburgerOpen(false)}
          >
            Resume
          </a>
        </li>
        <li className="navbar__item">
          <a
            className="navbar__link"
            href="/#contact"
            onClick={() => setHamburgerOpen(false)}
          >
            Contact
          </a>
        </li>
        <li className="navbar__item">
          <a
            className="navbar__link"
            href="/#photography"
            onClick={() => setHamburgerOpen(false)}
          >
            Photography
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
