import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>Goals 🎯</h1>
      <div className="links">
        <Link className="sub-links" to="/">
          Home
        </Link>
        <Link className="sub-links" to="/about">
          About
        </Link>
        <Link className="sub-links" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
