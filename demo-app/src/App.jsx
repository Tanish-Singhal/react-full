import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [listOfData, setListOfData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [btnName, setBtnName] = useState("Apply Filter");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_SWIGGY_MAIN_URL);

      const json = await response.json();

      const restaurants =
        json.data.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants;

      setListOfData(restaurants);
      setCopyData(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterLogic = () => {
    if (btnName === "Apply Filter") {
      const filtered = listOfData.filter((res) => res.info.avgRating > 4.3);
      setCopyData(filtered);
      setBtnName("Remove Filter");
    } else {
      setBtnName("Apply Filter");
      setCopyData(listOfData);
    }
  };

  return (
    <div className="App">
      <button
        onClick={handleFilterLogic}
        className="m-2 p-2 bg-blue-500 text-white rounded"
      >
        {btnName}
      </button>

      <div className="flex flex-wrap gap-4 p-4">
        {copyData.map((res) => (
          <Card resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
