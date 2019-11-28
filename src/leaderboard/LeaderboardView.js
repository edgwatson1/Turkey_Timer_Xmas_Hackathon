import React from "react";
import "./LeaderboardView.css";
import { Switch, Route, withRouter, Link } from "react-router-dom";

class LeaderboardView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};


  render() {


  const toTitleCase = (str) => {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    return (
      <div className="container">
        <h1>Top 10 Leaderboard 🏆</h1>
        <p><strong>The best turkey chefs in the world are:</strong></p>

        <div class="leaders">
          {this.props.leaders.map((leaders, index) => (
            <p>
              {index + 1}. Chef {toTitleCase(leaders.Name)}, with a streak of {leaders.Streak}.
            </p>
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
