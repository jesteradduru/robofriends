import ErrorBoundry from "./ErrorBoundry";
import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchValue: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const robots = await data.json();
    this.setState({ robots: robots });
  }

  render() {
    const { searchValue, robots } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="text-center">Loading</h1>
    ) : (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h1 className="logo text-center display-3">RoboFriends</h1>
          </div>
          <div className="offset-md-4 col-md-4 col-10 offset-1">
            <SearchBox searchChange={this.onSearchChange} />
          </div>
        </div>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
