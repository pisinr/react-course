import React, { Component } from 'react';

import Clock from './Clock';
import Panel from './Panel';
import TitleBanner from './TitleBanner';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showSecondClock: false,
      moreClocks: 0
    }
    this.handleShowSecondClock = this.handleShowSecondClock.bind(this)
  }

  handleShowSecondClock() {
    this.setState({
      showSecondClock: true
    })
  }

  render() {
    return (
      <div className="App">
      	<Panel title="A Panel">
          <button onClick={this.handleShowSecondClock}>Add more clock</button>
          <Clock />
          {this.state.showSecondClock && <Clock />}
        </Panel>
      </div>
    );
  }
}

export default App;
