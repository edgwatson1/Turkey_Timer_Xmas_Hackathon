import React from "react";

class Balloon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { balloonMessage } = this.props;

    return <div className="speech-bubble">{balloonMessage}</div>;
  }
}

export default Balloon;
