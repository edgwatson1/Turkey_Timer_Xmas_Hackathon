import React from "react";
import Balloon2 from "./Balloon2.js";
import "./Splash.css";

class Splash extends React.Component {
  render() {
    const { balloonMessage, image } = this.props;

    return (
      <div className="container">
        <Balloon2 balloonMessage={balloonMessage} />
        <div id="imagesplash">
          <img src={image}></img>
        </div>
      </div>
    );
  }
}

export default Splash;
