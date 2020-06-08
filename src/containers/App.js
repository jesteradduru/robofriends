import ErrorBoundry from "./ErrorBoundry";
import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/Searchbox";
import Profile from "../components/Profile";
import Scroll from "../components/Scroll";
import "./App.css";
import { connect } from "react-redux";
import { setSearchField, requestRobots, changeActivePage } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchRobots.searchValue,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    robots: state.requestRobots.robots,
    activePage: state.changeActivePage.activePage,
    profileId: state.viewProfile.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: dispatch(requestRobots()),
    onViewCardlists: (event) => dispatch(changeActivePage("cardlists")),
  };
};

class App extends React.Component {
  render() {
    const {
      searchValue,
      onSearchChange,
      robots,
      activePage,
      profileId,
      onViewCardlists,
    } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    if (activePage === "cardlists") {
      // cardlists
      return !robots.length ? (
        <h1 className="text-center logo mt-5">Loading...</h1>
      ) : (
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              <h1 className="logo text-center">RoboFriends</h1>
            </div>
            <div className="offset-md-4 col-md-4 col-10 offset-1">
              <SearchBox
                searchChange={onSearchChange}
                searchValue={searchValue}
              />
            </div>
          </div>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    } else if (activePage === "profile") {
      return (
        <Profile
          userid={profileId}
          robots={robots}
          viewCardlists={onViewCardlists}
        />
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
