import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'

import Panel from './components/Panel'
import DocumentTitle from './components/DocumentTitle'

class DelayPage extends Component {
	render() {
		return (
			<Panel title="Delay Page">
				<DocumentTitle title="Delay Page"/>
				<h1>Doesn't it feel good to wait?</h1>
			</Panel>
		)
	}
}

export default DelayPage;