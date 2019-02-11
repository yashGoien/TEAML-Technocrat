import React, { Component } from "react";

class TopBar extends Component {
  state = {};
  render() {
    return (
      <div
        className="btn-group btn-group-lg"
        id="c-btn-group"
        role="group"
        aria-label="examplegroup00"
      >
        <a href="/createTeam">
          <button type="button" id="c-btn-group1" className="btn btn-secondary">
            <img
              src="https://image.flaticon.com/icons/png/512/109/109468.png"
              alt="Create a new team"
              id="img1"
            />
          </button>
        </a>
        <button type="button" id="c-btn-group2" className="btn btn-secondary">
          <img
            src="https://www.shareicon.net/data/2016/09/13/829002_network_512x512.png"
            alt="Join a team"
            id="img2"
          />
        </button>
        <a href="/createProject">
          <button type="button" id="c-btn-group3" className="btn btn-secondary">
            <img
              src="https://image.flaticon.com/icons/png/512/97/97841.png"
              alt="Projects"
              id="img3"
            />
          </button>
        </a>
      </div>
    );
  }
}

export default TopBar;
