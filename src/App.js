import React, { Component } from 'react';
import _ from 'lodash'
import { Router, browserHistory } from 'react-router'

import './css/font-awesome.css';
import './App.css';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
      	{routes}
      </Router>
    );
  }
}

export default App;
