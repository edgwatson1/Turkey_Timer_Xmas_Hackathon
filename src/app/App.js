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
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.state = {
      targetCookingTime: 0,
      currentTime: 0,
      turkeyWeight: 0,
      timerPace: 15,
      timerIsRunning: true,
      streak: 0,
      sensitivity: 0.05,
      leaders: [],
      alltime: "Many"
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

     const turkeyroasted1 = await firestore
      .collection("turkeysroastalltime")
      .orderBy("Roasted", "desc")
      .limit(1)
      .get();

       const alltimeroasted = turkeyroasted1.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });


this.setState({
      leaders: leaders,
      alltime: alltimeroasted[0].Roasted
    });
  
    
  };



  defineTurkeyWeight = () => {
    const randomWeight = (Math.random() * 5) + 2;
     const turkeyWeight = randomWeight.toFixed(1);
    const cookingTime = (turkeyWeight * 20) + 90;

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
      timerPace: this.state.timerPace * 0.95,
      sensitivity: this.state.sensitivity * 0.99
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

numberWithCommas = (x) => {x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")};

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
                  <Link to="/NZg0cBnWQ0GoeHMLlayxDqzRYqha3FsI">
                    <Button message="Play!" />
                    <p> </p>
                  </Link>
                  <Link to="/leaderboard">
                    <div className="centerdiv">
                      <button className="buttonstyleleaderboard">
                        Top 10 Leaderboard
                      </button>
                    </div>
                  </Link>
                  <br />
                  <h2>🦃 {this.state.alltime.toLocaleString()} turkeys perfectly roasted since 29.11.19</h2>
                  <p>Made with ♥ at the 30hr <a href="https://www.wildcodeschool.com/" target="_blank"> Wild Code School<br /></a>2019 Xmas Hackathon by <a href="https://www.linkedin.com/in/edward-watson/" target="_blank">Eddie Watson</a></p>
                </div>
              </>
            )}
          />
          <Route
            exact
            path="/NZg0cBnWQ0GoeHMLlayxDqzRYqha3FsI"
            render={() => (
              <>
                <Homepage_2
                  balloonMessage={
                    <>
                      <h1>
                        It's Christmas morning, and your wonderful family are depending on you to make the best roast ever. 👨‍👨‍👦‍👦🎄
                      </h1>
                    </>
                  }
                  image="https://res.cloudinary.com/edwardwatson/image/upload/v1574854519/TurkeyTimer/house_n7knxi.png"
                />
                <Link to="/AUY1iTOK1LMB2WloTw5ZNg88LBzdKmXl">
                  <Button message="Let's cook" />
                </Link>
              </>
            )}
          />
          

          <Route
            exact
            path="/AUY1iTOK1LMB2WloTw5ZNg88LBzdKmXl"
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
            path="/CXjQUjDHW2HieAT5YmVBulLvXacuAtiU"
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
            path="/EKjSa1pGYWJNQVAmVTLSJbSAu2pdGBeM"
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
                  alltime={this.state.alltime}
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
            path="/kV7Wse1MSbEdb6bzwrMtda1259ms4xCl"
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
