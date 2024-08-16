import React, { useEffect, useState } from "react";

const FunUser = ({ type, random }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  // Loads the Component - do API call - Render the Data
  useEffect(() => {
    // API call
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const data = await fetch("https://api.github.com/users/Tanish-Singhal");
    const json = await data.json;
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
    </div>
  );
};

export default FunUser;
