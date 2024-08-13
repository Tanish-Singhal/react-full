import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [listOfData, setListOfData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SWIGGY_MAIN_URL
      );

      const json = await response.json();

      const restaurants =
        json.data.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants;

      setListOfData(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <div className="flex flex-wrap gap-4 p-4">
        {listOfData.map((res) => (
          <Card resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
