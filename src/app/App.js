/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./App.css";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import Homepage_1 from "../homepage1/homepage_1";
import Homepage_2 from "../homepage2/Splash";
import TurkeyWeigh from "../turkeyweigh/turkeyweigh";
import Oven from "../oven/Oven";
import Result from "../result/Result";
import Snow from "./Snow";
import LeaderboardView from "../leaderboard/LeaderboardView";
import LeaderboardPost from "../leaderboard/LeaderboardPost";
import Button from "../auxiliaries/button";
import { firestore } from "../firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.defineTurkeyWeight = this.defineTurkeyWeight.bind(this);
    this.startCurrentTimer = this.startCurrentTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.incrementStreak = this.incrementStreak.bind(this);
    this.state = {
      targetCookingTime: 0,
      currentTime: 0,
      turkeyWeight: 0,
      timerPace: 10,
      timerIsRunning: true,
      streak: 0,
      sensitivity: 0.05,
      leaders: []
    };
  }

  componentDidMount = async () => {
    const snapshot = await firestore
      .collection("leaders")
      .orderBy("Streak", "desc")
      .limit(10)
      .get();

    const leaders = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });

    this.setState({
      leaders: leaders
    });

    console.log(this.state.leaders);
  };

  defineTurkeyWeight = () => {
    const turkeyWeight = Math.floor(Math.random() * 20) + 10;
    const cookingTime = turkeyWeight * 37;

    this.setState({
      turkeyWeight: turkeyWeight,
      targetCookingTime: cookingTime
    });
  };

  startCurrentTimer = () => {
    this.timer = setInterval(
      () =>
        this.setState(prevState => {
          return {
            ...prevState,
            currentTime: this.state.currentTime + 1
          };
        }),
      this.state.timerPace
    );
  };

  incrementStreak = () => {
    this.setState({
      streak: this.state.streak + 1,
      timerPace: this.state.timerPace * 0.87,
      sensitivity: this.state.sensitivity * 0.9
    });
  };

  resetTimer = () => {
    this.setState({
      currentTime: 0
    });
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <div class="startpage">
                  <Snow />
                  <Homepage_1
                    balloonMessage={<h1>Roasting perfection starts now!</h1>}
                  />
                  <Link to="/splash1">
                    <Button message="Play!" />
                    <p> </p>
                  </Link>
                  <Link to="/leaderboard">
                    <div className="centerdiv">
                      <button className="buttonstyleleaderboard">
                        Top 10 Leaderboard
                      </button>
                    </div>
                    <p> </p>
                  </Link>
                </div>
              </>
            )}
          />
          <Route
            exact
            path="/splash1"
            render={() => (
              <>
                <Homepage_2
                  balloonMessage={
                    <>
                      <h1>
                        It's Christmas morning, and your wonderful family are depending on you to make the best Christmas roast ever. 👨‍👨‍👦‍👦🎄
                      </h1>
                    </>
                  }
                  image="https://res.cloudinary.com/edwardwatson/image/upload/v1574854519/TurkeyTimer/house_n7knxi.png"
                />
                <Link to="/turkeyweigh">
                  <Button message="Let's cook" />
                </Link>
              </>
            )}
          />
          

          <Route
            exact
            path="/turkeyweigh"
            render={() => (
              <>
                <TurkeyWeigh
                  weight={this.state.turkeyWeight}
                  targetCookingTime={this.state.targetCookingTime}
                  defineTurkeyWeight={this.defineTurkeyWeight}
                  resetTimer={this.resetTimer}
                />
              </>
            )}
          />
          <Route
            exact
            path="/oven"
            render={() => (
              <>
                <Oven
                  targetCookingTime={this.state.targetCookingTime}
                  startCurrentTimer={this.startCurrentTimer}
                  currentTime={this.state.currentTime}
                  stopTimer={this.stopTimer}
                  streak={this.props.streak}
                />
              </>
            )}
          />
          <Route
            exact
            path="/Result"
            render={() => (
              <>
                <Result
                  targetCookingTime={this.state.targetCookingTime}
                  startCurrentTimer={this.startCurrentTimer}
                  currentTime={this.state.currentTime}
                  stopTimer={this.stopTimer}
                  incrementStreak={this.incrementStreak}
                  streak={this.state.streak}
                  sensitivity={this.state.sensitivity}
                />
              </>
            )}
          />
          <Route
            exact
            path="/Leaderboard"
            render={() => (
              <>
                <div class="startpage">
                  <Snow />
                  <LeaderboardView leaders={this.state.leaders} />
                </div>
              </>
            )}
          />
          <Route
            exact
            path="/LeaderboardPost"
            render={() => (
              <>
                <div class="startpage">
                  <Snow />
                  <LeaderboardPost streak={this.state.streak} />
                </div>
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
