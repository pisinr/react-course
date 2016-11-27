import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
	render() {
		return (
			<div className="Panel">
				<div className="Panel__header">{this.props.title}</div>
				<div className="Panel__body">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Panel;
