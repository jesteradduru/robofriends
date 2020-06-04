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
      <h1 className="tc logo">Loading</h1>
    ) : (
      <div className="tc gradient-bg">
        <h1 className="logo">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
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
