import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };

  // Life-cycle hook-1
  constructor() {
    super();
    console.log('App-Constructor');
  }

  // Life-cycle hook-2
  componentDidMount() {
    // Ajax call - get data from server
    // call set state with new data
    console.log('App-Mounted');
    // this.setState({ movies });
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  // Life-cycle hook-3
  render() {
    console.log('App-Render');
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters 
             counters = {this.state.counters}
             onReset = {this.handleReset} 
             onIncrement = {this.handleIncrement} 
             onDecrement = {this.handleDecrement}
             onDelete = {this.handleDelete} 
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
