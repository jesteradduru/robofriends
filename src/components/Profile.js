import React from "react";
import Posts from "./Posts";

class Profile extends React.Component {
  render() {
    const { userid, robots, viewCardlists, posts } = this.props;
    const user = robots.filter((robot) => robot.id === parseInt(userid))[0];
    const { id, name, email, address, phone, website } = user;
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-lg-4">
            <div className="card bg-info border border-light shadow text-center mx-auto disable-transition">
              <img
                src={`https://robohash.org/${id}>200x200`}
                alt="robots"
                className="img-fluid"
              />
              <div className="card-body">
                <h2>{name}</h2>
                <hr />
                <ul
                  className="list-unstyled text-dark text-left"
                  style={{ fontSize: ".8em" }}
                >
                  <li className="mb-4">
                    <b className="d-block">Email: </b>
                    {`${email}`}
                  </li>
                  <li className="mb-4">
                    <b className="d-block">Address: </b>
                    {`${address.city}, ${address.street}`}
                  </li>
                  <li className="mb-4">
                    <b className="d-block">Phone: </b>
                    {phone}
                  </li>
                  <li className="mb-4">
                    <b className="d-block">Website: </b>
                    {website}
                  </li>
                </ul>
              </div>
            </div>
            <button
              onClick={viewCardlists}
              className="btn btn-dark btn-block w-75 mx-auto border mt-3"
            >
              Back
            </button>
          </div>
          {/* col */}
          <div className="col-12 col-lg-8">
            <Posts posts={posts} />
          </div>
        </div>
        {/* row */}
      </div>
      // container
    );
  }
}
export default Profile;
