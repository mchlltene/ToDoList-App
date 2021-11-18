import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    // initialize our state
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.myTimer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.myTimer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;