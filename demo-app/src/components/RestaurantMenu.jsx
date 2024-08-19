import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

function RestaurantMenu() {
  const params = useParams();

  const resInfo = useRestaurantsMenu(params.resid);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, avgRating, locality, city } = resInfo?.data?.cards[2]?.card?.card?.info || {};
  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const filterCategories = categories.filter(c =>
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold">
        {name}
        <span> (Rating: {avgRating})</span>
      </h1>

      <h3 className="text-xl font-semibold">
        {locality}, {city}
      </h3>
      <br />
      
      <h2 className="text-lg font-semibold">Menu</h2>

      {filterCategories.map((category) => (
        <ResCategory key={category.card?.card?.title} data={category.card?.card} />
      ))}
    </div>
  );
}

export default RestaurantMenu;
