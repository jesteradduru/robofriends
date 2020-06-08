import React from "react";
const Profile = ({ userid, robots, viewCardlists }) => {
  const user = robots.filter((robot) => robot.id === parseInt(userid))[0];
  const { id, name, email, address, phone, website } = user;

  console.log(user);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-sm-4">
          <div className="card bg-info border border-light shadow text-center h-100 mx-auto">
            <img
              src={`https://robohash.org/${id}>200x200`}
              alt="robots"
              className="img-fluid"
            />
            <div className="card-body">
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          </div>
        </div>
        {/* col */}
        <div className="col-12 col-sm-8 d-flex p-5 ">
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
          <div className="d-block ml-auto">
            <button
              onClick={viewCardlists}
              className="btn btn-warning btn-sm px-3 mt-3"
            >
              Back
            </button>
          </div>
        </div>
      </div>
      {/* row */}
    </div>
    // container
  );
};

export default Profile;
