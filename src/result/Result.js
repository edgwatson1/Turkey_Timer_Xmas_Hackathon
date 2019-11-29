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
    if (between(this.props.sensitivity, this.props.sensitivity)) {
      return (
        <>
          <div class="container">
            <PositiveResult
              incrementStreak={this.props.incrementStreak}
              streak={this.props.streak}
            />
          </div>
        </>
      );
    } else if (
      this.props.currentTime <
      this.props.targetCookingTime * (1 - this.props.sensitivity)
    ) {
      return (
        <>
          <div class="container">
            <Undercooked
              streak={this.props.streak}
              targetCookingTime={this.props.targetCookingTime}
              currentTime={this.props.currentTime}
              alltime={this.props.alltime}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div class="container">
            <Overcooked
              streak={this.props.streak}
              targetCookingTime={this.props.targetCookingTime}
              currentTime={this.props.currentTime}
              alltime={this.props.alltime}
            />
          </div>
        </>
      );
    }
  }
}

export default Result;
