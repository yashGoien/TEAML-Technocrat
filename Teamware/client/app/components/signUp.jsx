import React from "react";
import Joi from "joi-browser";
import axios from "axios";
import Form from "./common/form";

class SignUp extends Form {
  state = {
    data: {
      _id: "",
      email: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      linkedin: "",
      gender: ""
    },
    genders: [
      { _id: "1", name: "Male" },
      { _id: "2", name: "Female" },
      { _id: "3", name: "Other" }
    ],
    errors: {}
  };

  schema = {
    id: Joi.string().label("_id"),
    username: Joi.string()
      .required()
      .label("Username"),
    email: Joi.string()
      .email()
      .required()
      .label("Email Id"),
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
      .label("Linkedin Profile"),
    gender: Joi.string()
      .required()
      .label("Gender")
  };
  doSubmit = () => {
    const obj = {
      email: this.state.data.email,
      username: this.state.data.username,
      password: this.state.data.password,
      firstname: this.state.data.firstname,
      lastname: this.state.data.lastname,
      linkedin: this.state.data.linkedin,
      gender: this.state.data.gender
    };

    console.log(obj);
    // Grab state
    const { signUpEmail, signUpPassword } = this.state;
    this.setState({
      isLoading: true
    });
    // Post request to backend
    fetch("http://localhost:8080/api/account/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: "",
            signUpPassword: ""
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false
          });
        }
        console.log(this.state);
      });
  };

  render() {
    return (
      <div id="full">
        <div id="signUp">
          <h1>Sign up</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email Id")}
            {this.renderInput("firstname", "Firstname")}
            {this.renderInput("lastname", "Lastname")}
            {this.renderSelect("gender", "Gender", this.state.genders)}
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            <button className="btn btn-primary" onClick={this.doSubmit}>
              SignUp
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
