import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  //   username = React.createRef();
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  //schema for validation of username and password
  // this schema can be seen in npm joi on browser search
  // syntax helps me understand how validations are created

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  doSubmit = () => {
    // call the server
    console.log("submitted");
  };

  // if we want to use ref:
  // const username = this.username.current.value;
  // console.log(username);

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
