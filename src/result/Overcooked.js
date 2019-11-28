import React from "react";
import "./Overcooked.css";
import Button from "../auxiliaries/button";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import minutesToHours from "../auxiliaries/minutesToHours.js";

class Overcooked extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <audio
          src="https://res.cloudinary.com/edwardwatson/video/upload/v1574935781/TurkeyTimer/253886__themusicalnomad__negative-beeps_tinhbd.wav"
          autoPlay
        />
        <h1>You ruined Christmas! 😞</h1>
        <h2>
          You got distracted and overcooked the turkey by{" "}
          {this.props.currentTime - this.props.targetCookingTime} minutes.{" "}
          <br></br>Your family are hungry.
        </h2>

        <div id="turkeyresult">
          <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1574874439/TurkeyTimer/burntturkey_cr81na.png"></img>
        </div>
        <h1>You achieved a streak of {this.props.streak}.</h1>
        <Link to="/LeaderboardPost">
          <div className="centerdiv">
            <button className="buttonstyleleaderboard">
              Add to leaderboard
            </button>
          </div>
        </Link>
        <div className="centerdiv">
          <Link to="/">
            <button
              value="Refresh Page"
              onClick="window.location.reload();"
              className="buttonstyle"
            >
              Play again!
            </button>
          </Link>
          <p> </p>
        </div>
      </>
    );
  }
}

export default Overcooked;
