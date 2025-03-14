import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <a className="navbar__left" href="/">
        MV.
      </a>
      <nav className="navbar__list">
        <a className="navbar__item" href="">
          Projects
        </a>
        <a className="navbar__item" href="/Resume">
          Resume
        </a>
        <a className="navbar__item">Contact</a>
        <a className="navbar__item">Photography</a>
        <button>sun</button>
      </nav>
    </div>
  );
}

export default Navbar;
