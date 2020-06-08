import React from "react";
const Profile = ({ userid, robots, viewCardlists }) => {
  const user = robots.filter((robot) => robot.id === parseInt(userid))[0];
  const { id, name, email, address, phone, website } = user;

  console.log(user);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col col-sm-4">
          <div className="card bg-info border border-light shadow text-center h-100 mx-auto">
            <img
              src={`https://robohash.org/${id}>200x200`}
              alt="robots"
              className="img-fluid"
            />
            <div className="card-body">
              <h5>{name}</h5>
              <p>{email}</p>
            </div>
          </div>
        </div>
        {/* col */}
        <div className="col col-sm-4">
          <ul
            className="list-unstyled text-light d-flex flex-column justify-content-center h-100"
            style={{ fontSize: "1.5em" }}
          >
            <li className="mb-4">
              <b className="d-block">Address: </b>
              {`${address.city}, ${address.street}`}
            </li>
            <li className="mb-4">
              <b className="d-block">Address: </b>
              {phone}
            </li>
            <li className="mb-4">
              <b className="d-block">Website: </b>
              {website}
            </li>
          </ul>
        </div>
        <div className="col col-sm-4">
          <button
            onClick={viewCardlists}
            className="btn btn-dark d-block ml-auto"
          >
            Back
          </button>
        </div>
      </div>
      {/* row */}
    </div>
    // container
  );
};

export default Profile;
