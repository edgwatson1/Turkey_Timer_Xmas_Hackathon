import React from "react";
import "./Undercooked.css";
import Button from "../auxiliaries/button";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import minutesToHours from "../auxiliaries/minutesToHours.js";

class Undercooked extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div class="container">
          <audio
            src="https://res.cloudinary.com/edwardwatson/video/upload/v1574935781/TurkeyTimer/253886__themusicalnomad__negative-beeps_tinhbd.wav"
            autoPlay
          />
          <h1>You ruined Christmas! 😞</h1>
          <h2>
            The turkey was undercooked by{" "}
            {this.props.targetCookingTime - this.props.currentTime} minutes.{" "}
            <br />{" "}
          </h2>
          <h2>Some of your family might get ill.</h2>

          <div id="turkeyresult">
            <img src="https://media.giphy.com/media/dxNivncsmNMP1aTvvT/giphy.gif"></img>
          </div>
          <h1>You achieved a streak of {this.props.streak}.</h1>
          <Link to="/LeaderboardPost">
            <div className="centerdiv">
              <button className="buttonstyleleaderboard">
                Add achievement to leaderboard
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
          </div>
        </div>
      </>
    );
  }
}

export default Undercooked;
