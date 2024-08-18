import React, { useEffect, useState } from "react";

const FunUser = ({ type, random }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  const [userInfo, setUserInfo] = useState({});

  // Loads the Component - do API call - Render the Data
  useEffect(() => {
    // API call
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const data = await fetch(import.meta.env.VITE_GITHUB_API);
    const json = await data.json();
    setUserInfo(json);
  }

  return (
    <div className="flex flex-col justify-center items-center border-2 border-lime-500 w-60 p-4">
      <div>
        Functional Components
        <br />({type}, {random})
      </div>

      <div>
        Count = {count}
        <br />
        Count2 = {count2}
      </div>

      <div>
        <button
          onClick={() => {
            setCount(count + 1);
            setCount2(count2 + 2);
          }}
        >
          Click Me
        </button>
      </div>

      <div className="text-center mt-4">
          <img src={userInfo.avatar_url} alt="User Avatar" className="mb-2" />
          <h1>{userInfo.name}</h1>
      </div>
    </div>
  );
};

export default FunUser;
