import React from "react";
import Balloon from "./Balloon.js";
import "./homepage_1.css";

class Homepage_1 extends React.Component {
  render() {
    const { balloonMessage } = this.props;

    return (
      <div className="container">
        <div id="logo">
          <img src="./logo.png"></img>
        </div>
        <Balloon balloonMessage={balloonMessage} />
        <div id="turkeyimage">
          <img src="./turkeyintro.png"></img>
        </div>
      </div>
    );
  }
}

export default Homepage_1;
