import React, { Component } from "react";
import { getTeams } from "./services/fakeTeamService";

class Teams extends Component {
  state = {
    teams: []
  };

  componentDidMount() {
    const teams = getTeams();
    this.setState({ teams });
  }
  render() {
    return (
      <div className="container" style={{ color: "black", zIndex: "5" }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Members</th>
              <th>Members</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Teams;
