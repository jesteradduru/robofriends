import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div
      className="card bg-info border border-light shadow text-center"
      style={{ height: "450px" }}
    >
      <img
        src={`https://robohash.org/${id}>200x200`}
        alt="robots"
        className="img-fluid"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
