import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',       path: '/' },
  { label: 'Domain',     path: '/domain' },
  { label: 'Milestones', path: '/milestones' },
  { label: 'Documents',  path: '/documents' },
  { label: 'Slides',     path: '/slides' },
  { label: 'About Us',   path: '/about' },
  { label: 'Contact',    path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { pathname }            = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="10" stroke="url(#lg)" strokeWidth="1.5"/>
              <circle cx="11" cy="11" r="5" fill="url(#lg2)" opacity="0.8"/>
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="22" y2="22">
                  <stop stopColor="#5b6af5"/><stop offset="1" stopColor="#00d4b8"/>
                </linearGradient>
                <linearGradient id="lg2" x1="6" y1="6" x2="16" y2="16">
                  <stop stopColor="#7c8bff"/><stop offset="1" stopColor="#00d4b8"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="navbar__logo-text">Vision<span>AI</span></span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(l => (
            <li key={l.path}>
              <Link
                to={l.path}
                className={`navbar__link ${pathname === l.path ? 'navbar__link--active' : ''}`}
              >{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Badge */}
        <div className="navbar__cta">
          <span className="navbar__status">
            <span className="navbar__dot" />
            SLIIT · 25-26J-303
          </span>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__burger ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="navbar__mobile">
          {NAV_LINKS.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={`navbar__mobile-link ${pathname === l.path ? 'active' : ''}`}
            >{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
