import React, { Component } from 'react';

import './Counter.css';

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      value: this.state.value + 1
    })
  }

  render() {
    return (
        <button className="Counter"
          onClick={this.handleClick}> {this.state.value} ++
        </button>
    );
  }
}

export default Counter;
