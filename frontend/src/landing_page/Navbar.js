import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
 

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/about",   label: "About"   },
    { to: "/product", label: "Product" },
    { to: "/pricing", label: "Pricing" },
    { to: "/support", label: "Support" },
  ];

  return (
    <nav className="z-navbar" style={{ boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,.08)" : undefined }}>
      <div className="z-navbar__inner">
        <Link to="/" className="z-navbar__logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Zerodha Logo" />
        </Link>
        <div className="z-navbar__links">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className={`z-navbar__link ${location.pathname === to ? "active" : ""}`}>
              {label}
            </Link>
          ))}
          <Link to="/login"  className="z-navbar__link z-navbar__login" style={{ marginLeft: "8px" }}>
            Login
          </Link>
          <Link to="/signup" className="z-navbar__link z-navbar__cta" style={{ marginLeft: "8px" }}>
            Open an account
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
