import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("Default Name");
  const id = parseInt(useParams().id);

  useEffect(() => {
    const tempPerson = data.filter((item) => item.id === id);
    setName(tempPerson[0].name);
    console.log(tempPerson);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back to people
      </Link>
    </div>
  );
};

export default Person;
