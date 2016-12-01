import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'

import Panel from './components/Panel'
import DocumentTitle from './components/DocumentTitle'

class NotFoundPage extends Component {
	render() {
		return (
			<Panel title="404 Not Found">
				<DocumentTitle title={"404 Not Found"} />
				<h1>Page Not Found</h1>
				<h3>URL: {this.props.location.pathname} can not be found.</h3>
			</Panel>
		)
	}
}

export default NotFoundPage;