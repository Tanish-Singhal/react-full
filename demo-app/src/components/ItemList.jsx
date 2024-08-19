import React from "react";

const ItemList = ({ items }) => {
  console.log(items);

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
