import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="border p-2 flex justify-evenly items-center">
      <ul className="flex gap-8">
        <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>
        <li>{loggedInUser}</li>
      </ul>
    </div>
  );
}

export default Header;
