import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/loginForm";
import Navbar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Page from "./components/page";
import SignUp from "./components/signUp";
import UpdateProfileForm from "./components/updateProfileForm";
import Teams from "./components/teams";
import CreateProject from "./components/createProject";
import CreateTeam from "./components/createTeam";

class App extends Component {
  render() {
    return (
      <div id="bg">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/createTeam" exact component={CreateTeam} />
            <Route path="/createProject" exact component={CreateProject} />
            <Route path="/teams" exact component={Teams} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/updateProfile" exact component={UpdateProfileForm} />
            <Route path="/" exact component={Page} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
