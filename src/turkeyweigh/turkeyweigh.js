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
          Your turkey weighs in at </h2><div class="number">{this.props.weight}kg
        </div>
        <h2>
          Your favourite celebrity chef recommends that you cook it at 180ºC for</h2>
          <div class="number">{minutesToHours(this.props.targetCookingTime)}</div>
        

        <Link to="/oven">
          <Button message="Put it in the oven!" />
        </Link>
        <p> </p>
      </div>
    );
  }
}

export default TurkeyWeigh;
