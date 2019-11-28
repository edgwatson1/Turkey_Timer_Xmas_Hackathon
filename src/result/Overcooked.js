import React from "react";
import "./Overcooked.css";
import Button from "../auxiliaries/button";
import { Switch, Route, withRouter, Link } from "react-router-dom";

class Overcooked extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>You ruined Christmas! 😞</h1>
        <h2>
          You got distracted and severely burnt the turkey. <br></br>Your family
          are hungry.
        </h2>
        <h1>You achieved a streak of {this.props.streak}.</h1>
        <div id="turkeyresult">
          <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1574874439/TurkeyTimer/burntturkey_cr81na.png"></img>
        </div>
        <Link to="/LeaderboardPost">
          <div className="centerdiv">
            <button
              value="Refresh Page"
              onClick="window.location.reload();"
              className="buttonstyleleaderboard"
            >
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
          <p> </p>
        </div>
      </>
    );
  }
}

export default Overcooked;
