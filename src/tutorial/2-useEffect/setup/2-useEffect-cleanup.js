import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const resizeHandler = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("Hello World");
    window.addEventListener("resize", resizeHandler);
    // return () => {
    //   window.removeEventListener("resize", resizeHandler);
    // };
  }, [width]);

  return (
    <React.Fragment>
      <h1>Window</h1>
      <h2>{width}px</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
