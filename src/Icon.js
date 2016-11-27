import React, { Component } from 'react';
import _ from 'lodash';
import classnames from 'classnames';

class Icon extends Component {
  render() {
    return (
      <span
        {...this.props}
        className={classnames("fa", "fa-" + this.props.icon, this.props.className)} />
    );
  }
}

export default Icon;
