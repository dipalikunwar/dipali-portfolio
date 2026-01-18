import { useState } from "react";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Dipali</h2>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>

      {/* SINGLE DOWNLOAD BUTTON */}
      <a href={resume} download className="nav-btn">
        Download CV
      </a>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
