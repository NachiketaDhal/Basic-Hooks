import React, { useState } from "react";
import "../../../index.css";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [error, setError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <React.Fragment>
      <h1>Jogn Doe</h1>
      <button className="btn" onClick={() => setError(true)}>
        Toggle Error
      </button>
      {error ? (
        <div>
          <h3>Error...</h3> <p>There is an Error found</p>
        </div>
      ) : (
        <h3>There is no Error</h3>
      )}
    </React.Fragment>
  );
};

export default ShortCircuit;
