import React from 'react';

export class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.countUp = () => {
      const { count } = this.state;
      this.setState({
        count: count + 1
      })
    }

    this.countDown = () => {
      const { count } = this.state;
      this.setState({
        count: count - 1
      })
    }

    this.countClear = () => {
      const { count } = this.state;
      this.setState({
        count: 0
      })
    }
  }

  render(){
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.countUp}>Count up</button>
        <button onClick={this.countDown}>Count down</button>
        <button onClick={this.countClear}>Clear</button>
        <h1>{count}</h1>
      </div>
    );
  }
}

export default Counter;
