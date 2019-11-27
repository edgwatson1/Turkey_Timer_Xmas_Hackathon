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

import Button from "../auxiliaries/button";

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
      step: 0
    };
  }

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
      pace: this.state.pace - 0.5,
      step: this.state.step + 1
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
                <Snow />
                <Homepage_1
                  balloonMessage={<h1>Cooking perfection starts now!</h1>}
                />
                <Link to="/splash1">
                  <Button message="Play!" />
                  <p> </p>
                </Link>
              </>
            )}
          />
          <Route
            exact
            path="/splash1"
            render={() => (
              <>
                <Snow />
                <Homepage_2
                  balloonMessage={
                    <h1>
                      It's Christmas morning, when all through the house. Not a
                      creature was stirring, not even a mouse. 🐁
                    </h1>
                  }
                  image="https://res.cloudinary.com/edwardwatson/image/upload/v1574854519/TurkeyTimer/house_n7knxi.png"
                />
                <Link to="/splash2">
                  <Button message="Next" />
                </Link>
              </>
            )}
          />
          <Route
            exact
            path="/splash2"
            render={() => (
              <>
                <Homepage_2
                  balloonMessage={
                    <h1>
                      It's time to put the turkey in for the perfect Christmas
                      lunch for all the family. 🎄
                    </h1>
                  }
                  image="https://res.cloudinary.com/edwardwatson/image/upload/v1574855394/TurkeyTimer/woman-flowers-holidays-girl-6270_aaco00.jpg"
                />
                <Link to="/turkeyweigh">
                  <Button message="Let's cook!" />
                  <p> </p>
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
                />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
