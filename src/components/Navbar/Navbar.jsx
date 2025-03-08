import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">MV.</div>
      <nav className="navbar__list">
        <a className="navbar__item">Projects</a>
        <a className="navbar__item">Resume</a>
        <a className="navbar__item">Contact</a>
        <a className="navbar__item">Photography</a>
        <button>sun</button>
      </nav>
    </div>
  );
}

export default Navbar;
