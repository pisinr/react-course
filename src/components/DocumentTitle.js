import React, { Component } from 'react';
import _ from 'lodash'

export default class DocumentTitle extends Component {
	componentDidMount() {
		document.title = this.props.title;
	}

	componentWillReceiveProps(nextProps) {
		var title = this.props.title;
		var nextTitle = nextProps.title;

		if (title != nextTitle) {
			document.title = nextTitle;
		}
	}

	render() {
		return null;
	}
}
