import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }
  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) =>
          this.setState({
            robots: users,
          })
        );
    }, 1000);
  }
  onHandleSearchTerm = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  render() {
    const { robots, searchField } = this.state;
    const filterRobot = robots.filter((robot, i) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    if (!robots.length) {
      return <h1 className="tc">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1>RobotFriends</h1>
          <SearchBox onSearchTerm={this.onHandleSearchTerm} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filterRobot} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
