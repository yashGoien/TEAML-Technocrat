import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class CreateProject extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      skills: [],
      description: "",
      noOfMembers: "",
      region: "",
      team: ""
    },
    skills: [
      { _id: "1", name: "WebDev" },
      { _id: "2", name: "C++" },
      { _id: "3", name: "Designing" },
      { _id: "4", name: "JavaScript" },
      { _id: "5", name: "Java" },
      { _id: "6", name: "Competetive" },
      { _id: "7", name: "Android" },
      { _id: "8", name: "Python" },
      { _id: "9", name: "Machine Learning" }
    ],
    team: [
      { _id: "1", name: "Peach" },
      { _id: "2", name: "Lemon" },
      { _id: "3", name: "Sugar" }
    ],
    errors: {}
  };

  schema = {
    id: Joi.string().label("_id"),
    title: Joi.string()
      .required()
      .label("Title"),
    description: Joi.string()
      .required()
      .label("Description"),
    noOfMembers: Joi.string()
      .required()
      .label("No Of Members"),
    region: Joi.string()
      .required()
      .label("Region"),
    skills: Joi.string()
      .required()
      .label("Skills"),
    team: Joi.string().label("Team")
  };

  render() {
    return (
      <div id="full">
        <div id="createProject">
          <h1>Create Project</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Project Title")}
            {this.renderInput("description", "Description")}
            {this.renderInput("noOfMembers", "No Of Members")}
            {this.renderInput("region", "Region")}
            {this.renderSelect("team", "Team", this.state.team)}
            {this.renderSelect("skills", "Skills Required", this.state.skills)}
            <button className="btn btn-primary" onClick={this.doSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateProject;
