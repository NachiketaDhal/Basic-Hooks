import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const decreaseCount = () => {
    setCount((prevValue) => prevValue - 1);
  };

  const increaseCountLater = () => {
    setTimeout(() => {
      setCount((prevValue) => prevValue + 1);
    }, 2000);
  };

  return (
    <React.Fragment>
      <div style={{ marginBottom: "4rem" }}>
        <h2>Regular Counter</h2>
        <h2>{count}</h2>
        <button className="btn" onClick={decreaseCount}>
          Decrease
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="btn" onClick={increaseCount}>
          Increase
        </button>
      </div>
      <div>
        <h2>More Complex Counter</h2>
        <h2>{count}</h2>
        <button className="btn" onClick={increaseCountLater}>
          Increase Later
        </button>
      </div>
    </React.Fragment>
  );
};

export default UseStateCounter;
