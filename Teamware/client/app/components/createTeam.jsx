import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class CreateTeam extends Form {
  state = {
    data: {
      _id: "",
      projectName: "",
      skills: [],
      levelOfMember: "",
      noOfMembers: "",
      region: ""
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
    errors: {}
  };

  schema = {
    id: Joi.string().label("_id"),
    projectName: Joi.string()
      .required()
      .label("Project Name"),
    levelOfMember: Joi.number()
      .required()
      .label("Description"),
    noOfMembers: Joi.number()
      .required()
      .label("No Of Members"),
    region: Joi.string()
      .required()
      .label("Region"),
    skills: Joi.string()
      .required()
      .label("Skills")
  };

  render() {
    return (
      <div id="full">
        <div id="createTeam">
          <h1>Create Team</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("projectName", "Project Title")}
            {this.renderInput("noOfMembers", "No Of Members")}
            {this.renderInput("levelOfMember", "Level Of Members")}
            {this.renderInput("region", "Region")}
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

export default CreateTeam;
