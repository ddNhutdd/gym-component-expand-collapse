import React from "react";
import Intro from "./component/Intro";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false
    };
  }

  toggleShow = () => this.setState(state => ({
    isExpand: !state.isExpand
  }))

  renderTextButton = () => this.state.isExpand ? 'Đóng giới thiệu' : 'Xem giới thiệu'

  renderIntro = () => this.state.isExpand && <Intro />

  render() {
    return (
      <div>
        <h1>Conditional rendering</h1>
        <button onClick={this.toggleShow}>
          {this.renderTextButton()}
        </button>
        {this.renderIntro()}
      </div>
    );
  }
}

export default App
