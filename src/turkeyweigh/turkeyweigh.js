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

const celebrityChefs = ["Delia Smith","Jamie Oliver","Heston Marc Blumenthal","Gordon Ramsey","Michel Roux","Nigella Lawson","Mary Berry","Marco Pierre White", "Your favourite cookbook","A recipe you found online","Your smart speaker","Your grandma","Someone you follow on Twitter","A cookbook that you found on top of the fridge"]

const temperature = ["170","175","180","185","190","195","200","205","210","215","220"]

    return (
      <div className="container">
        <h1>Let's weigh your turkey. ⚖️</h1>
        <div id="turkeyimage">
          <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1574856908/TurkeyTimer/scalesturkey_lucqlb.png"></img>
        </div>
        <h2>
          This year's bird weighs in at</h2><div class="number">{this.props.weight}kg
        </div>
        <h2>{celebrityChefs[Math.ceil(Math.random() * 13)]} recommends that you cook it at    {temperature[Math.ceil(Math.random() * 10)]}ºC for</h2>
          <div class="number">{minutesToHours(this.props.targetCookingTime)}</div>

       
        

        <Link to="/CXjQUjDHW2HieAT5YmVBulLvXacuAtiU">
          <Button message="Put it in the oven!" />
        </Link>
        <p> </p>
      </div>
    );
  }
}

export default TurkeyWeigh;
