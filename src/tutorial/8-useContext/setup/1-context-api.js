import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const newContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <newContext.Provider value={removePerson}>
      <h3>Context API</h3>
      <List people={people} />
    </newContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <React.Fragment>
      {people.map((person) => {
        return <SinglePerson key={person.id} person={person} />;
      })}
    </React.Fragment>
  );
};

const SinglePerson = ({ person }) => {
  const removePerson = useContext(newContext);
  return (
    <div className="item">
      <h4>{person.name}</h4>
      <button onClick={() => removePerson(person.id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
