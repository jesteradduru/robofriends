import React from "react";
const Card = ({ name, email, id, viewProfile }) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-5">
      <div className="card bg-info border border-light shadow text-center h-100 mx-auto">
        <img
          src={`https://robohash.org/${id}>200x200`}
          alt="robots"
          className="img-fluid"
        />
        <div>
          <h5>{name}</h5>
          <p>{email}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-md btn-dark" onClick={viewProfile} id={id}>
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
