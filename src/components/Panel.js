import React, { Component } from 'react';
import classnames from 'classnames';
import './Panel.css';

class Panel extends Component {
	render() {
		return (
			<div className={classnames("Panel", this.props.className)}>
				<div className="Panel__header">{this.props.title}</div>
				<div className={classnames("Panel__body", this.props.bodyClassName)}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Panel;
