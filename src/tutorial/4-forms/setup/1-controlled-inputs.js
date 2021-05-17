import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState([]);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const addToList = (e) => {
    e.preventDefault();
    if (name && email) {
      setDetails((prevValue) => [
        ...prevValue,
        { id: new Date().getTime().toString(), name: name, email: email },
      ]);
    }
    setName("");
    setEmail("");
  };

  return (
    <React.Fragment>
      <div className="container">
        <article>
          <form className="form">
            <div className="form-control">
              <label htmlFor="firstName">Name :</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={name}
                onChange={onNameChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email :</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={onEmailChange}
              />
            </div>
            <button onClick={addToList}>Add Person</button>
          </form>
          {details.map((detail) => {
            return (
              <div className="item" key={detail.id}>
                <h4>{detail.name}</h4>
                <p>{detail.email}</p>
              </div>
            );
          })}
        </article>
      </div>
    </React.Fragment>
  );
};

export default ControlledInputs;
