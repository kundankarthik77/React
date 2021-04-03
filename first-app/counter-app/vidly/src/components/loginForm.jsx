import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  //   username = React.createRef();
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  //schema for validation of username and password
  // this schema can be seen in npm joi on browser search
  // syntax helps me understand how validations are created
  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  validate = () => {
    const options = { abortEarly: false};
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return null;

    const errors = {};

    for(let item of result.error.details) 
       errors[item.path[0]] = item.message;
    return errors;
    // console.log(result);

    // const errors = {};

    // const { account } = this.state;

    // if (account.username.trim() === "")
    //   errors.username = "Username is required.";
    // if (account.password.trim() === "")
    //   errors.password = "Password is required.";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors | {} });
    if (errors) return;

    // call the server
    console.log("submitted");
  };

    // if we want to use ref:
    // const username = this.username.current.value;
    // console.log(username);

    // validateProperty = ({ name, value }) => {
    //   if (name === "username") {
    //     if (value.trim() === "") return "Username is required.";
    //   }

    //   if (name === "password") {
    //     if (value.trim() === "") return "Password is required.";
    //   }
    // };
    // Rewriting above code below as follows
    validateProperty = ({ name, value }) => {
        const obj = {[name]: value};
        const schema = { [name]: this.schema[name]};
        const error = Joi.validate(obj, schema)
        return error ? error.details[0].message : null;
    };

    handleChange = ({ currentTarget: input }) => {
      // validation on change
      const errors = { ...this.state.errors };
      const errorMessage = this.validateProperty(input);
      if (errorMessage) errors[input.name] = errorMessage;
      else delete errors[input.name];

      const account = { ...this.state.account };
      account[input.name] = input.value;

      this.setState({ account, errors });
    };
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit="this.handleSubmit">
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
