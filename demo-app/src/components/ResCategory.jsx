import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  }

  return (
    <div>
      <div className="w-[55rem] mx-auto my-4 p-4 border-2 rounded-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <div className="font-bold text-lg">
            {data?.title} ({data.itemCards.length})
          </div>
          <div>⬇️</div>
        </div>

        {showItem ? <ItemList items={data.itemCards} /> : ""}
      </div>
    </div>
  );
};

export default ResCategory;
