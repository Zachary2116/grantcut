import { useState, useEffect } from "react";
import logo from "./assets/logo_transparent.png";
import "./index.css";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

function signout() {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.replace("/");
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const token = getCookie("token");

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <a href="/">
        <img src={logo} alt="GrantCut Logo" className="nav-logo" />
      </a>
      <ul id="headerTop">
        <li><a href="/mission">Mission</a></li>
        <li><a href="/journal">News</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/team">About</a></li>
        {token ? (
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); signout(); }}>
              Logout
            </a>
          </li>
        ) : (
          <li><a href="/login">Login</a></li>
        )}
      </ul>
    </nav>
  );
}
