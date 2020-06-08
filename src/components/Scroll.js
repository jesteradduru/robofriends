import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        overflowX: "hidden",
        height: "80vh",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
