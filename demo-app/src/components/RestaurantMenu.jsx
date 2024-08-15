import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_RESTAURANT_MENU_URL+params.resid
      );

      // 655882
      // 53774

      const json = await response.json();
      setResInfo(json);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, avgRating, locality, city } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];

  return (
    <div>
      <h1>
        {name}
        <span> (Rating: {avgRating})</span>
      </h1>
      <h3>
        {locality}, {city}
      </h3>
      <br />
      <h2>Menu</h2>
      <ul class="list-none p-0 space-y-4">
        {itemCards.map((item) => (
          <li key={item.card.info.id} class="border p-4 rounded-lg shadow-sm">
            <div class="flex justify-between items-center">
              <span class="text-lg font-medium">{item.card.info.name}</span>
              <span class="text-lg">
                Rs.
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
