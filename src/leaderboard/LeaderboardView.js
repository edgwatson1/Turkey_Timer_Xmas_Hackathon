import React from "react";
import "./LeaderboardView.css";
import { Switch, Route, withRouter, Link } from "react-router-dom";

class LeaderboardView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className="container">
        <h1>Leaderboard 🏆</h1>
        <h2>The best turkey chefs in the world are:</h2>

        <div>
          {this.props.leaders.map((leaders, index) => (
            <h3>
              {index + 1}. {leaders.Name} with a streak of {leaders.Streak}.
            </h3>
          ))}
        </div>

        <Link to="/">
          <button className="buttonstyle">Back</button>
        </Link>
        <p></p>
      </div>
    );
  }
}

export default LeaderboardView;
