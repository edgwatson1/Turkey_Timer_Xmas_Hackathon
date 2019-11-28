import React from "react";
import "./LeaderboardPost.css";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import firebase from "../firebase";

class LeaderboardPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Unnamed elf"
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("leaders")
      .add({
        Name: this.state.userName,
        Streak: this.props.streak
      })
      .then(() => (window.location.href = "/"));
  }

  handleChange(event) {
    this.setState({ userName: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <h1>Congratulations! 🎈</h1>
        <img src="https://media.giphy.com/media/BLMzrDzM07M09017AQ/giphy.gif"></img>
        <h2>
          You got a streak of {this.props.streak}!
        </h2>
        <form onSubmit={this.onSubmit}>
          <h1>Write your name below:</h1>
          <div>
            <input
              id="input"
              type="text"
              maxLength="10"
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <button id="submit" className="buttonstyle">
            Submit
          </button>
        </form>
        <p></p>
      </div>
    );
  }
}

export default LeaderboardPost;
