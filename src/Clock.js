import React, { Component } from 'react';
import moment from 'moment'

import './Clock.css';

class Clock extends Component {

  constructor() {
    super()
    this.state = {
      time: new Date()
    }
    this.updateTimeTick = this.updateTimeTick.bind(this)
  }

  componentWillMount() {
    // Fire AJAX call to prefetch data.
    this.setState({
      mountTime: new Date()
    })
  }

  componentDidMount() {
    this.tickHandle = window.setInterval(this.updateTimeTick, 35);
  }

  componentWillUnmount() {
    if (this.tickHandle) {
      window.clearInterval(this.tickHandle)
      this.tickHandle = null
    }
    console.log("Bye bye")
  }

  updateTimeTick() {
    if (this.tickHandle) {
      this.setState({
        time: new Date()
      })
    }
  }

  render() {
    return (
      <div className="Clock">
        <div>I'm mounted at: {moment(this.state.mountTime).format("HH:mm:ss")}</div>
        <div>{moment(this.state.time).format("HH:mm:ss.SSS")}</div>
      </div>
    );
  }
}

export default Clock;
