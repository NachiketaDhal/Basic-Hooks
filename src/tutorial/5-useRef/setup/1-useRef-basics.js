import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <React.Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={inputRef} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default UseRefBasics;
