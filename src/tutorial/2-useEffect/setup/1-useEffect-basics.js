import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    if (count > 0) document.title = `New Message(${count})`;
  });

  return (
    <React.Fragment>
      <h2>{count}</h2>
      <button className="btn" onClick={increaseCount}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
