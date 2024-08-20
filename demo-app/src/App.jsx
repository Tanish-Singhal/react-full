import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Shimmer from "./components/Shimmer";
import Appbar from "./components/Appbar";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { RatingBannerCard } from "./components/Card";
import UserContext from "./utils/UserContext";

const App = () => {
  const [listOfData, setListOfData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [btnName, setBtnName] = useState("Apply Filter");
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState();

  const onlineStatus = useOnlineStatus();

  const RatingCard = RatingBannerCard(Card);

  useEffect(() => {
    if (onlineStatus !== false) {
      fetchData();
    }
  }, [onlineStatus]);

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
    } finally {
      setIsLoading(false);
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

  useEffect(() => {
    const data = {
      name: "John Doe",
    };
    setUsername(data.name);
  }, []);

  if (isLoading) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-yellow-500">You are offline!</h1>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
      <div className="App">
        <Appbar wholeData={listOfData} setWholeData={setCopyData} />

        <button
          onClick={handleFilterLogic}
          className="m-2 p-2 bg-blue-500 text-white rounded"
        >
          {btnName}
        </button>

        <div className="flex flex-wrap gap-4 p-4">
          {copyData.map((res) => (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              {res.info.avgRating > 4.5 ? (
                <RatingCard resData={res} key={res.info.id} />
              ) : (
                <Card resData={res} key={res.info.id} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default App;
