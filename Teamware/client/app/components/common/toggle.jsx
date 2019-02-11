import React, { Component } from "react";

class Toggle extends Component {
  state = {};

  render() {
    return (
      <label className="switch" id="toggle">
        <input type="checkbox" />
        <span className="slider round" onClick={this.props.onVisible} />
      </label>
    );
  }
}

export default Toggle;
