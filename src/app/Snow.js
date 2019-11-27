import React from "react";
import "./Snow.css";

class Snow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="snow-container">
          <div class="snow foreground"></div>
          <div class="snow foreground layered"></div>
          <div class="snow middleground"></div>
          <div class="snow middleground layered"></div>
          <div class="snow background"></div>
          <div class="snow background layered"></div>
        </div>
      </div>
    );
  }
}

export default Snow;
