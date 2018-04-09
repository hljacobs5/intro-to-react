import React, { Component } from 'react';
import './App.css';
import Greeting from './Greeting.js';
import EvilDeedCounter from './EvilDeedCounter.js';
import EvilToDo from './EvilToDo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Evil Deeds</h1>
        <Greeting villainName="Ursula"
        compliment="Your hair looks great today" />
        <EvilDeedCounter />
        <EvilToDo />
      </div>
    );
  }
}

export default App;
