import React, { Component } from "react";

class HookClassCounterFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `You Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    document.title = `You Clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        <span>useEffect in Class Compoennt </span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count: {this.state.count}
        </button>
      </div>
    );
  }
}
export default HookClassCounterFive;
