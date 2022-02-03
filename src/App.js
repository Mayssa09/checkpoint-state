import "./App.css";
import Person from "./Components/Person";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
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
      </div>
    );
  }
}
