import React from "react";
import "./Oven.css";
import Button from "../auxiliaries/button";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import { Line, Circle } from "rc-progress";
import minutesToHours from "../auxiliaries/minutesToHours.js";

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
      <div className="ovenbackground">
        <audio
          src="https://res.cloudinary.com/edwardwatson/video/upload/v1574934816/TurkeyTimer/181148__keweldog__timer-with-ding_lc3p6h.wav"
          autoPlay
          loop
        />

        <h1>Your turkey's roasting! ⏱️</h1>
        <div id="oven">
          <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1574861286/TurkeyTimer/oventurkey_kinsd0.png"></img>
        </div>
        <div class="parent">
          <div class="div1">
            <div class="progress">
              <Circle
                percent={percentComplete}
                strokeWidth="8"
                strokeColor="#f9f8ee"
              />
            </div>{" "}
          </div>
          <div class="timers">
            <div class="div2">
              {" "}
              <div class="time">Target time: </div>
              <div class="number">
                {minutesToHours(this.props.targetCookingTime)}
              </div>
            </div>
            <div class="time">Current time:</div>
            <div class="number">
              {minutesToHours(this.props.currentTime)}
            </div>{" "}
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
