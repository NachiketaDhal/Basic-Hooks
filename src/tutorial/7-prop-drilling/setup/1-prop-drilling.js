import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

// const getLocalData = (data) => {
//   if (data) {
//     return JSON.parse(localStorage.getItem("people"));
//   }
// };

const PropDrilling = () => {
  // const [people, setPeople] = useState(getLocalData(data));
  const [people, setPeople] = useState(data);

  localStorage.setItem("people", JSON.stringify(people));

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      <section>
        <h3>Prop Drilling</h3>
        <List people={people} removePerson={removePerson} />
      </section>
    </React.Fragment>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <React.Fragment>
      {people.map((person, i) => {
        return (
          <SinglePerson key={i} person={person} removePerson={removePerson} />
        );
      })}
    </React.Fragment>
  );
};

const SinglePerson = ({ person, removePerson }) => {
  return (
    <React.Fragment>
      <div className="item">
        <h4>{person.name}</h4>
        <button onClick={() => removePerson(person.id)}>Remove</button>
      </div>
    </React.Fragment>
  );
};

export default PropDrilling;
