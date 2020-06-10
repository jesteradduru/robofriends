import ErrorBoundry from "./ErrorBoundry";
import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/Searchbox";
import Profile from "../components/Profile";
import Scroll from "../components/Scroll";
import "./App.css";
import { connect } from "react-redux";
import { setSearchField, requestApi, changeActivePage } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchRobots.searchValue,
    isPending: state.requestApi.isPending,
    error: state.requestApi.error,
    robots: state.requestApi.robots,
    posts: state.requestApi.posts,
    activePage: state.changeActivePage.activePage,
    profileId: state.viewProfile.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () =>
      dispatch(
        requestApi("https://jsonplaceholder.typicode.com/users", "robots")
      ),
    onViewCardlists: (event) => dispatch(changeActivePage("cardlists")),
  };
};

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  render() {
    const {
      searchValue,
      onSearchChange,
      robots,
      activePage,
      profileId,
      onViewCardlists,
      posts,
    } = this.props;

    if (activePage === "cardlists") {
      // cardlists
      const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      return robots.length === 0 ? (
        <div
          style={{
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="text-center logo mt-5 loading">Loading...</h1>
        </div>
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
          <Scroll viewHeight="80vh">
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
          posts={posts}
        />
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
