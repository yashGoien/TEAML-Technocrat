import React, { Component } from "react";
import Dashboard from "./dashboard";
import Posts from "./posts";
import ProfilePopup from "./profilePopup";
import ProjectPopup from "./projectPopup";
import TopBar from "./topBar";

class Page extends Component {
  state = {
    projects: [],
    currentProject: {}
  };

  componentDidMount() {
    const projects = [
      { _id: "1", name: "Eclipse" },
      { _id: "2", name: "Shadow" },
      { _id: "3", name: "Dread" }
    ];
    this.setState({ projects });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-8">
            <div id="postBox">
              <ProfilePopup
                aria-labelledby="exampleModalCenterTitle1"
                aria-hidden="true"
              />
              {this.state.projects.map(project => (
                <ProjectPopup
                  aria-labelledby="exampleModalCenterTitle1"
                  aria-hidden="true"
                  projects={this.state.projects}
                />
              ))}

              <TopBar />
              <Posts />
            </div>
          </div>
          <div className="col-4">
            <Dashboard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Page;
