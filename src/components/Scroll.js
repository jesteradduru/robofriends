import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "auto",
        height: "80vh",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
