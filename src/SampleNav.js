import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import './SampleNav.css';

class SampleNav extends Component {
	render() {
		return (
			<div className={classnames("SampleNav", this.props.className)}>
				<Link to={{pathname: "/"}}>Root</Link>
				<Link to={{pathname: "/login"}}>Login</Link>
				<Link to={{pathname: "/items"}}>Item Index</Link>
				<Link to={{pathname: "/items/1"}}>Item 1</Link>
				<Link to={{pathname: "/items/2"}}>Item 2</Link>
			</div>
		);
	}
}

export default SampleNav;
