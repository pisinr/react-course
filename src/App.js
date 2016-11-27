import React, { Component } from 'react';

import Counter from './Counter';
import Panel from './Panel';
import TitleBanner from './TitleBanner';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Panel title="A Panel">
        	<TitleBanner text="I'm a Banner" />
        	<Counter />
        </Panel>
      </div>
    );
  }
}

export default App;
