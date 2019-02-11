import React, { Component } from "react";
import Toggle from "./common/toggle";

class Dashboard extends Component {
  state = {
    isVisible: true,
    upvotes: 116,
    levelProgress: 0,
    level: 0,
    projects: []
  };

  componentDidMount() {
    const levelProgress = (this.state.upvotes % 10) * 10;
    this.setState({ levelProgress });
    const level = Math.floor(this.state.upvotes / 20);
    this.setState({ level });
    const projects = [
      { _id: "1", name: "Eclipse" },
      { _id: "2", name: "Shadow" },
      { _id: "3", name: "Dread" }
    ];
    this.setState({ projects });
  }

  handleVisibility = () => {
    const isVisible = !this.state.isVisible;
    this.setState({ isVisible });
    console.log(this.state.isVisible);
  };

  render() {
    return (
      <React.Fragment>
        <div className="card" id="i-cardi">
          <img
            className="card-img-top clickable"
            id="i-card-img"
            src="https://media.giphy.com/media/11c7UUfN4eoHF6/giphy.gif"
            alt="profile"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          />

          <div className="card-body">
            <h5 className="card-title" id="i-card-title">
              <strong>Anony._.mouse</strong>
            </h5>
            <a href="/updateProfile">
              <button className="btn btn-info btn-sm">Edit Profile</button>
            </a>

            <div id="i-prog">
              <p className="card-text" id="i-card-text">
                <em>Level {this.state.level}</em>
              </p>

              <div className="progress" id="i-progress">
                <div id="i-progress-bar">
                  <progress
                    value={this.state.levelProgress}
                    max="100"
                    id="i-progress-bar"
                  />
                </div>
              </div>
            </div>

            <div className="card" id="i-card1">
              <div className="card-body" id="i-card1-body">
                <h4
                  className="card-title"
                  id="i-card1-title"
                  style={{ fontFamily: "bebas" }}
                >
                  Projects
                </h4>
                {this.state.projects.map(project => (
                  <button
                    type="button"
                    key={project._id}
                    className="btn btn-secondary"
                    id="i-btni1"
                    data-toggle="modal"
                    data-target="#exampleModalCenter1"
                  >
                    {project.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="card" id="i-card2">
            <div className="card-body">
              <h5 className="card-title" id="i-card2-title">
                Visibility
                <div className="col-sm-5" id="i-card2i">
                  <Toggle onVisible={this.handleVisibility} />
                </div>
              </h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
