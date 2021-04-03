  
import React, { Component } from "react";
import Movies from "./components/movies";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
         <Switch>
           <Route path="/login" component={LoginForm} />
           <Route path="/register" component={RegisterForm} />
         </Switch>
         <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;