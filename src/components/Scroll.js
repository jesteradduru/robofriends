import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "auto",
        height: "80vh",
      }}
      className="p-5"
    >
      {children}
    </div>
  );
};

export default Scroll;
