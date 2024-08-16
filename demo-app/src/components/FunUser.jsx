import React, { useEffect, useState } from "react"

export const FunUser = ({ type, random }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  // Loads the Component - do API call - Render the Data
  useEffect(() => {
    // API call
  }, [])

  return (
    <div className="flex justify-center items-center border-2 border-blue-300 w-60">
      Functional Components
      <br />
      ({type}, {random})
      <br />
      Count = {count}
      <br />
      Count2 = {count2}
      <br />
      <button onClick={() => {
        setCount(count + 1);
        setCount2(count2 + 2);
      }}>Click Me</button>
    </div>
  )
}

export default FunUser;
