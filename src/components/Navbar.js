import React, { useEffect, useState } from "react";
// import profilePic from "../assets/portfolio-pic1.png"; // <-- save your image in src/assets

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

        {/* Links */}
        <ul className="nav-links d-flex mb-0">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Profile Picture */}
        <div className="profile-pic">
          <img src="https://i.postimg.cc/wj7vmjTJ/portfolio-pic1.png" alt="Profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
