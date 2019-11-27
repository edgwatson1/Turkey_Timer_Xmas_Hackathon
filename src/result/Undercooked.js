import React from "react";
import "./Undercooked.css";
import Button from "../auxiliaries/button";
import { Switch, Route, withRouter, Link } from "react-router-dom";

class Undercooked extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>You ruined Christmas! 😞</h1>
        <h2>
          The turkey was undercooked and some of the family might get ill.
        </h2>
        <h1>You achieved a streak of {this.props.streak}.</h1>
        <div id="turkeyresult">
          <img src="https://media.giphy.com/media/dxNivncsmNMP1aTvvT/giphy.gif"></img>
        </div>
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
      </>
    );
  }
}

export default Undercooked;
