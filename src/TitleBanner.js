import React, { Component } from 'react';
import './TitleBanner.css';

class TitleBanner extends Component {
	render() {
		return (
			<div className="TitleBanner"
				style={{
					color: this.props.color
				}}>
				{this.props.text}
			</div>
		);
	}
}

export default TitleBanner;
