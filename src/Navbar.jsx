import { useState, useEffect } from 'react';
import logo from './assets/logo_transparent.png';
import "./index.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Shrink the navbar after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <a href="/">
        <img src={logo} alt="GrantCut Logo" className="nav-logo" />
      </a>
      <ul>
        <li><a href="/mission">Mission</a></li>
        <li><a href="/journal">News</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/team">About</a></li>
      </ul>
    </nav>
  );
}
