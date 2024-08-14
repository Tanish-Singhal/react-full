import React, { useState } from "react";

const Appbar = ({ wholeData, setWholeData }) => {
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filteredData = wholeData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setWholeData(filteredData);
  };

  return (
    <div className="border p-2 flex justify-evenly items-center">
      <div className="search-box">
        <input
          className="text-white"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="bg-blue-500 text-white" onClick={handleSearch}>
          Search
        </button>
      </div>

      <button
        className="bg-white text-black p-2"
        onClick={() => setIsloggedIn(!isloggedIn)}
      >
        {isloggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Appbar;
