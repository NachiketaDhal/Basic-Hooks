import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("Random Title");

  const clickHandler = () => {
    title === "Random Title"
      ? setTitle("useState Example")
      : setTitle("Random Title");
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
