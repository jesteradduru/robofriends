import React from "react";

const Scroll = ({ children, viewHeight }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        overflowX: "hidden",
        height: viewHeight,
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
