import React, { Component } from 'react';
import TitleBanner from './TitleBanner';

import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    var subGreeting = "Let's get to <3 <em>it</em> :;"
    return (
      <div className="App">
        <TitleBanner text="Welcome to React" color="red" />
        <TitleBanner text={subGreeting} color="green" />
      </div>
    );
  }
}

export default App;
