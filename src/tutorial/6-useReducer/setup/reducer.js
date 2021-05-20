export const reducer = (currentState, action) => {
  if (action.type === "NO_VALUE") {
    return {
      ...currentState,
      showModal: true,
      modalMessage: "PLease Enter a Value",
    };
  }
  if (action.type === "ADD_PEOPLE") {
    return {
      ...currentState,
      people: [...currentState.people, action.payload],
      showModal: true,
      modalMessage: "Person Added",
    };
  }
  if (action.type === "REMOVE_PERSON") {
    const newPeople = currentState.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...currentState,
      people: newPeople,
      showModal: true,
      modalMessage: "Person Removed",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...currentState,
      showModal: false,
    };
  }
  throw new Error("Dispatch function is not found for this action type");
};
