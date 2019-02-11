import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class UpdateProfileForm extends Form {
  state = {
    data: {
      password: "",
      firstname: "",
      lastname: "",
      linkedin: ""
    },
    errors: {}
  };

  schema = {
    password: Joi.string()
      .required()
      .label("Password")
      .min(5),
    firstname: Joi.string()
      .required()
      .label("Firstname"),
    lastname: Joi.string()
      .required()
      .label("Lastname"),
    linkedin: Joi.string()
      .required()
      .label("Linkedin Profile")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div id="update">
        <h1>Update Profile</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstname", "Firstname")}
          {this.renderInput("lastname", "Lastname")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Update")}
        </form>
      </div>
    );
  }
}

export default UpdateProfileForm;
