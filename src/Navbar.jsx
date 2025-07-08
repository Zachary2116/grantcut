import { useState, useEffect } from "react";
import logo from "./assets/logo_transparent.png";
import "./index.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen]           = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";  // lock scroll on mobile
  }, [open]);

  return (
    <header className={`nav ${isScrolled ? "scrolled" : ""}${open ? " open" : ""}`}>
      <a href="/"><img src={logo} alt="GrantCut Logo" className="nav-logo" /></a>

      {/* BUTTON SHOWN ONLY BY THE MOBILE CSS ABOVE */}
      <button className="nav-toggle" onClick={() => setOpen(o => !o)}>
        {open ? "Close" : "Show Menu"}
      </button>

      <ul onClick={() => setOpen(false)}>
        <li><a href="/services">Website Revamp&nbsp;2025</a></li>
        <li><a href="/mission">Mission</a></li>
        <li><a href="/journal">News</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/team">About</a></li>
      </ul>
    </header>
  );
}
