import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="font-bold text-center m-4 text-2xl">Cart</div>
      <div className="flex justify-center items-center">
        <button
          className="border p-1"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="flex justify-between p-4 m-2">
        {cartItems.length === 0 ? (
          <h1 className="font-bold text-3xl mx-auto">Your Cart is empty!</h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
