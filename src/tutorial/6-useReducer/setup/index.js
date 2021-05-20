import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function

const initialState = {
  people: [],
  showModal: false,
  modalMessage: "",
};

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [newState, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      dispatch({ type: "NO_VALUE" });
    } else {
      const newPerson = {
        id: new Date().getTime().toString(),
        name: inputValue,
      };
      dispatch({ type: "ADD_PEOPLE", payload: newPerson });
      setInputValue("");
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <React.Fragment>
      {newState.showModal && (
        <div className="modal">
          <Modal
            modalMessage={newState.modalMessage}
            closeModal={closeModal}
            className="modal"
          />
        </div>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>
      {newState.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_PERSON", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Index;
