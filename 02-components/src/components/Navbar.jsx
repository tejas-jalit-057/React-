import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        Click n Code
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
