import React from "react";
import "./PositiveResult.css";
import Button from "../auxiliaries/button";
import { Switch, Route, withRouter, Link } from "react-router-dom";

class PositiveResult extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.incrementStreak();
  }

  render() {
    return (
      <>
        <audio
          src="https://res.cloudinary.com/edwardwatson/video/upload/v1574935493/TurkeyTimer/415510__inspectorj__bell-counter-a_lqwgpy.wav"
          autoPlay
        />

        <h1>A fantastic Christmas! ⭐</h1>
        <h2>
          You roasted the turkey for the perfect time and the whole family loved
          it.
        </h2>
        <div id="turkeyresult">
          <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1574867559/TurkeyTimer/dinner-food-png-9_luda9p.png"></img>
        </div>
        <h1>Cooking streak: {this.props.streak}</h1>
        <Link to="/turkeyweigh">
          <Button message="Continue streak!" />
        </Link>
        <p> </p>
      </>
    );
  }
}

export default PositiveResult;
