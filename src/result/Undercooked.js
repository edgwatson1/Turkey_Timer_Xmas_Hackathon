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

    const commiserationMessage = ["Some of your family may fall ill.","It was so bad, someone cried.","The turkey was bright pink on the inside.","At least you'll never be asked to roast the turkey again.","Your family ended up ordering a Chinese takeaway.","Your uncle ended up finishing it off in a deep fat fryer.","Were you distracted by online shopping?","Your family only ate brussel sprouts for their lunch."]

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
            {this.props.targetCookingTime - this.props.currentTime} minutes.<br></br>{commiserationMessage[Math.ceil(Math.random() * 7)]}</h2>

          <div id="turkeyresult">
            <img src="https://media.giphy.com/media/dxNivncsmNMP1aTvvT/giphy.gif"></img>
          </div>
          <h2 id="streak">You achieved a streak of {this.props.streak}.</h2>
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
          </div>
        </div>
      </>
    );
  }
}

export default Undercooked;
