import React, { useState, useEffect } from "react";
import "../../../index.css";

const ShowHide = () => {
  const [visible, setVisible] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const resizeWindow = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return (
    <React.Fragment>
      <button className="btn" onClick={() => setVisible(!visible)}>
        Show/Hide
      </button>
      {visible && (
        <div>
          <h1>Window</h1>
          <h3>{width}px</h3>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShowHide;
