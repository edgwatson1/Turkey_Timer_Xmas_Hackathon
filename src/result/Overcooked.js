import React from "react";
import "./Overcooked.css";
import Button from "../auxiliaries/button";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import minutesToHours from "../auxiliaries/minutesToHours.js";
import firebase from "../firebase";

class Overcooked extends React.Component {
  constructor(props) {
    super(props);
     this.onSubmit = this.onSubmit.bind(this);
     this.onSubmitLeaderboard = this.onSubmitLeaderboard.bind(this);
  }

  
 onSubmit(e) {

    firebase
      .firestore()
      .collection("turkeysroastalltime")
      .add({
        Roasted: this.props.alltime + this.props.streak
      })
      .then(() => (window.location.reload()));
  }

  onSubmitLeaderboard(e) {

    firebase
      .firestore()
      .collection("turkeysroastalltime")
      .add({
        Roasted: this.props.alltime + this.props.streak
      })
      .then(() => (window.location.hash = "/kV7Wse1MSbEdb6bzwrMtda1259ms4xCl"));
  }

  render() {

  const commiserationMessage = ["The bird caught fire and the fire engine came.","Smoke is filling the kitchen.","Your family hug you and tell you that it's OK, but they look incredibly sad and may never get over this.","At least you can use the turkey as a doorstop.","You tried to eat the burnt turkey, but it tastes like coal.","Your aunt says she is ashamed of you.","You fell asleep and now the kitchen is on fire.","Your family are now making spaghetti so they have something to eat."]

    return (
      <>
        <audio
          src="https://res.cloudinary.com/edwardwatson/video/upload/v1574935781/TurkeyTimer/253886__themusicalnomad__negative-beeps_tinhbd.wav"
          autoPlay
        />
        <h1>You ruined Christmas! 😞</h1>
        <h2>
          You got distracted and overcooked the turkey by{" "}
          {this.props.currentTime - this.props.targetCookingTime} minutes.{" "}
          <br></br>{commiserationMessage[Math.ceil(Math.random() * 7)]}
        </h2>

        <div id="turkeyresult">
          <img src="https://res.cloudinary.com/edwardwatson/image/upload/v1574874439/TurkeyTimer/burntturkey_cr81na.png"></img>
        </div>
        <h1>{this.props.streak > 0 ? "You achieved a streak of "+this.props.streak+"." : ""}</h1>

 {this.props.streak > 0 ?

       <Link to="/kV7Wse1MSbEdb6bzwrMtda1259ms4xCl">
            <div className="centerdiv">
              <button className="buttonstyleleaderboard" href="javascript:void(0)" onClick={this.onSubmitLeaderboard}>
                Add to leaderboard
              </button>
            </div>
          </Link> : ""}

          <div className="centerdiv">
            <Link to="/">
              <button
                value="Refresh Page"
                onClick={this.onSubmit}
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
