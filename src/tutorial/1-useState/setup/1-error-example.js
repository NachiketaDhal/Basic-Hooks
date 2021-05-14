import React from "react";

const ErrorExample = (props) => {
  const title = "useState Error Example";
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn">
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
