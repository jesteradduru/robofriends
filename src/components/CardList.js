import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { changeActivePage, viewProfile } from "../actions";
const mapStateToProps = (state) => {
  return {
    activePage: state.changeActivePage.activePage,
    viewProfile: state.viewProfile.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onViewProfile: (event) => {
      dispatch(changeActivePage("profile"));
      dispatch(viewProfile(event.target.getAttribute("id")));
    },
  };
};
const CardList = ({ robots, onViewProfile }) => {
  const cardComponent = robots.map((user) => {
    return (
      <Card
        key={user.id}
        name={user.name}
        email={user.email}
        id={user.id}
        viewProfile={onViewProfile}
      />
    );
  });
  return <div className="row p-3">{cardComponent}</div>;
};
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
