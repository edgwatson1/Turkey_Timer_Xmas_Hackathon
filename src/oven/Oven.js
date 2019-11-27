import React from "react";
import "./Oven.css";
import Button from "../auxiliaries/button";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import { Line, Circle } from "rc-progress";

class Oven extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.startCurrentTimer();
  }

  render() {
    const percentComplete =
      (this.props.currentTime / this.props.targetCookingTime) * 100;

    return (
      <div className="container">
        <h1>It's in the oven! ⏱️</h1>
        <div id="oven">
          <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1574861286/TurkeyTimer/oventurkey_kinsd0.png"></img>
        </div>
        <div class="parent">
          <div class="div1">
            <div class="progress">
              <Circle
                percent={percentComplete}
                strokeWidth="5"
                strokeColor="#ff0160"
              />
            </div>{" "}
          </div>
          <div class="timers">
            <div class="div2">
              {" "}
              <h2>Target time: {this.props.targetCookingTime} minutes</h2>{" "}
            </div>
            <div class="div3">
              <h2>Current time: {this.props.currentTime} minutes</h2>{" "}
            </div>
          </div>
        </div>

        <Link to="/Result">
          <div className="centerdiv">
            <button onClick={this.props.stopTimer} className="buttonstyle">
              Pull it out!
            </button>
            <p> </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Oven;
