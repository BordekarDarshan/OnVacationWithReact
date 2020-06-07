import React, { Component } from "react";

export class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Number: 1,
    };
    console.log("Constructor");
  }

  // Execute just before render method. store current props and State.
  static getDerivedStateFromProps(presentProps, prensentState) {
    let updatedState = {
      Number: prensentState.Number + 1,
    }; //Now state Prop "number" is 1 and here 1 + 1 is now "2". Now after "onClick" latest state object prop "name" value is 3 now + 1 means 3 + 1 is "4". So after Clicking on button final latest state object prop "name" value is 4.
    console.log("Latest Number Prop is ", updatedState.Number);
    return updatedState;
  }

  // Execute After "Mounting" phase completed.
  componentDidMount() {
    console.log("Mounted");
  }

  // Store The Previous props and State.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.Number !== this.state.Number) {
      console.log("Component's Props and State are being updating");
      return true;
    }
    return false;
  }

  // Stores The Previous props and State.
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  changeNameEvent = () => {
    this.setState((prevState) => {
      console.log("Previous Number Prop is ", prevState.Number);

      return { Number: prevState.Number + 1 }; //Now latest state object prop "name" value is 2 now 2 + 1 is "3" Now go to "static getDerivedStateFromProps" Method
    });
  };

  render() {
    return (
      <div className="lifecycleContainer">
        <h2 className="m-2">{this.state.Number}</h2>
        <button className="btn btn-dark m-2" onClick={this.changeNameEvent}>
          Change Name
        </button>
        {console.log("Render")}
      </div>
    );
  }
}

export default Lifecycle;
