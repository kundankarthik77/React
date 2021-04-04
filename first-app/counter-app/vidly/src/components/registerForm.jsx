import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  //   username = React.createRef();
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  //schema for validation of username and password
  // this schema can be seen in npm joi on browser search
  // syntax helps me understand how validations are created

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
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
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
