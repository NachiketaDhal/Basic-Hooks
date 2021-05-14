import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [users, setUsers] = useState(data);

  const removeOne = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const removeAll = () => {
    setUsers([]);
  };

  return (
    <React.Fragment>
      {users.map((user) => (
        <div key={user.id} className="item">
          <h4>{user.name}</h4>
          <button onClick={() => removeOne(user.id)}>Remove</button>
        </div>
      ))}
      <button className="btn" onClick={removeAll}>
        Remove All
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
