import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementBtn = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <span>ClassCounter </span>
        <button onClick={this.incrementBtn}> Count: {this.state.count}</button>
      </div>
    );
  }
}
export default ClassCounter;
