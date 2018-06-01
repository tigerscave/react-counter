/* eslint-disable */
import React from 'react';

export class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHelloWorldShown: false,
      isRahmatShow: false,
    };
    

    this.toggleHelloWorld = () => {
      const { isHelloWorldShown } = this.state;
      console.log(typeof(this.state.isRahmatShow));
      this.setState({
        isHelloWorldShown: !isHelloWorldShown
      })
    }
    this.toggleRahmat = () => {
      const { isRahmatShow } = this.state; 
      this.setState({
        isRahmatShow: !isRahmatShow,
      })
    }
  }

  render(){
    const { isHelloWorldShown, isRahmatShow } = this.state;
    console.log("____type of fucntion_____")
    console.log(typeof(this.toggleHelloWorld));
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
          <button onClick={this.toggleRahmat}>Rahmat</button>
          {isRahmatShow ? <h1>Hello Rahmat</h1> : null}
        </div>
      </div>
    );
  }
}

export default Index;