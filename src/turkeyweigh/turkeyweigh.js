import React from "react";
import "./turkeyweigh.css";
import Button from "../auxiliaries/button";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import { thisExpression } from "@babel/types";
import minutesToHours from "../auxiliaries/minutesToHours.js";

class TurkeyWeigh extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.defineTurkeyWeight();
    this.props.resetTimer();
  }

  render() {
    return (
      <div className="container">
        <h1>Let's weigh your turkey. ⚖️</h1>
        <div id="turkeyimage">
          <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1574856908/TurkeyTimer/scalesturkey_lucqlb.png"></img>
        </div>
        <h2>
          Your turkey weighs in at <h1>{this.props.weight}kg</h1>
        </h2>
        <h2>
          It is recommended that you cook it at 180ºC for
          <h1>{minutesToHours(this.props.targetCookingTime)}</h1>
        </h2>

        <Link to="/oven">
          <Button message="Put it in the oven!" />
        </Link>
        <p> </p>
      </div>
    );
  }
}

export default TurkeyWeigh;
