import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Nachiketa Dhal",
    age: 22,
    message: "random message",
  });

  const clickHandler = () => {
    setPerson({ ...person, message: "Hello World" });
  };

  const { name, age, message } = person;
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>{message}</h4>
      <button className="btn" onClick={clickHandler}>
        Change message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
