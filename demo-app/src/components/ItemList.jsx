import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleCartAdding = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="m-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between p-4 border rounded-lg m-2"
        >
          <div>
            <div className="flex item-center gap-7">
              <span className="font-bold text-lg">{item.card.info.name}</span>
              <span className="font-bold text-lg">
                Rs.{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="my-4">{item.card.info.description}</p>

            <button
              className="border-2 p-1 border-green-400"
              onClick={() => handleCartAdding(item)}
            >
              ADD
            </button>
          </div>
          
          <img
            className="w-20"
            src={
              import.meta.env.VITE_MENU_ITEM_IMG +
              item.card.info.imageId
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
