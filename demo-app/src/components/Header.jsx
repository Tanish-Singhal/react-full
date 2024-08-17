import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Header() {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="border p-2 flex justify-evenly items-center">
      <ul className="flex gap-8">
        <li>
          Online Status: {onlineStatus ? "🟢" : "🔴"}
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
