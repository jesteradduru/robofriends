import React from "react";
import { connect } from "react-redux";
import { changeActivePage, viewProfile, requestApi } from "../actions";
const mapStateToProps = (state) => {
  return {
    activePage: state.changeActivePage.activePage,
    viewProfile: state.viewProfile.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onViewProfile: (event) => {
      const id = event.target.getAttribute("id");
      dispatch(changeActivePage("profile"));
      dispatch(viewProfile(id));
      dispatch(
        requestApi(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
          "posts"
        )
      );
    },
  };
};
const Card = ({ name, email, id, onViewProfile }) => {
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
          <button
            className="btn btn-md btn-dark"
            onClick={onViewProfile}
            id={id}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
