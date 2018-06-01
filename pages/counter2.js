import React from 'react';

export class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render(){
    const { count } = this.state;
    return (
      <div>
        <button>Count up</button>
        <button>Count down</button>
        <button>Clear</button>
        <h1>{count}</h1>
      </div>
    );
  }
}

export default Counter;