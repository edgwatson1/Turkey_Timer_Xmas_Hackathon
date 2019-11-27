import React from "react";
import "./Result.css";
import Button from "../auxiliaries/button";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import PositiveResult from "./PositiveResult.js";
import Undercooked from "./Undercooked.js";
import Overcooked from "./Overcooked.js";

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const between = (min, max) => {
      return (
        this.props.currentTime >=
          this.props.targetCookingTime - min * this.props.targetCookingTime &&
        this.props.currentTime <=
          this.props.targetCookingTime + max * this.props.targetCookingTime
      );
    };
    if (between(0.03, 0.03)) {
      return (
        <>
          <PositiveResult
            incrementStreak={this.props.incrementStreak}
            streak={this.props.streak}
          />
        </>
      );
    } else if (this.props.currentTime < this.props.targetCookingTime * 0.97) {
      return (
        <>
          <Undercooked streak={this.props.streak} />
        </>
      );
    } else {
      return (
        <>
          <Overcooked streak={this.props.streak} />
        </>
      );
    }
  }
}

export default Result;
