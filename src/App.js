import React, { Component, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile/Profile';
export class App extends Component {
  state = {
    isShow: false
  }
  handleShow = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  render() {
    return (
      <div style={{
        marginRight: "100px",
        textAlign: "center",
      }} >
        <button onClick={this.handleShow}>{this.state.isShow ? "Hide" : "Show"}</button>
        {this.state.isShow === true ? <Profile /> : null}
      </div>
    )
  }
}

export default App
