import React from 'react';

export class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHelloWorldShown: false,
      isSonodaShown: false,
    };
    this.toggleHelloWorld = () => {
      console.log("Hello world");
      console.log(typeof(this.state.isHelloWorldShown));
      const { isHelloWorldShown } = this.state;
      this.setState({
        isHelloWorldShown: !isHelloWorldShown
      })
    }

    this.toggleSonoda = () => {
      console.log("Sonoda");
      const { isSonodaShown } = this.state;
      this.setState({
        isSonodaShown: !isSonodaShown
      })
    }
  }

  render(){
    console.log("typeof here");
    console.log(typeof(this.toggleHelloWorld));
    const { isHelloWorldShown } = this.state;
    const { isSonodaShown } = this.state;
    return (
      <div>
          <div>
            <button
              onClick={this.toggleHelloWorld}
            >Toogle hello world</button>
            {isHelloWorldShown ?
              <h1>Hello World!</h1> : null}
          </div>
          <div>
            <button
              onClick={this.toggleSonoda}
            >Toggle sonoda</button>
            {isSonodaShown ?
              <h1>Hello Sonoda!</h1> : null}
          </div>
      </div>
    );
  }
}

export default Index;
