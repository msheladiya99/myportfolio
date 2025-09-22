import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Brand */}
        <a href="#home" className="brand">
          Meet<span>Sheladiya</span>
        </a>

        {/* Hamburger Icon */}
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        {/* Profile Picture */}
        <div className="profile-pic">
          <img
            src="https://i.postimg.cc/wj7vmjTJ/portfolio-pic1.png"
            alt="Profile"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
