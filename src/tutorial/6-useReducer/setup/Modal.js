import React, { useEffect } from "react";

const Modal = ({ modalMessage, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 1000);
  });

  return (
    <div>
      <p>{modalMessage}</p>
    </div>
  );
};

export default Modal;
