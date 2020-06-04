import React from "react";

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "auto",
        height: "80vh",
        marginTop: "20px",
        border: "5px solid rgb(229, 255, 229)",
        padding: "20px 0 20px 0",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
