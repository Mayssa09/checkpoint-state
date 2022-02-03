import "./App.css";
import Person from "./Components/Person";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      count: 0,
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  }

  render() {
    return (
      <div className="App">
        <button
          className="button-53"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          Click to show the person's profile
        </button>
        {this.state.show && <Person />}
        <h2> {this.state.count}</h2>
      </div>
    );
  }
}
