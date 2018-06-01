import React from 'react';

export class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHelloWorldShown: false,
    };
    this.toggleHelloWorld = () => {
      const { isHelloWorldShown } = this.state;
      this.setState({
        isHelloWorldShown: !isHelloWorldShown
      })
    }
  }

  render(){
    const { isHelloWorldShown } = this.state;
    return (
      <div>
        <button
          onClick={this.toggleHelloWorld}
        >Toogle hello world</button>
        {isHelloWorldShown ?
          <h1>Hello World!</h1> : null}
      </div>
    );
  }
}

export default Index;