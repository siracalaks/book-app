import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar p-4 border-bottom border-warning">
      <Link to="/">
        <h1>React Books App</h1>
      </Link>
      <div class="vr text-warning"></div>
      <Link to="/favorites">
        <h3>Your Favorites</h3>
      </Link>
    </div>
  );
};

export default Navbar;
