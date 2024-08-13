import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border p-2 flex justify-evenly items-center">
      <ul className="flex gap-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
