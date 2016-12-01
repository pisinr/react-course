import React, { Component } from 'react'
import { Route } from 'react-router'

import Panel from './components/Panel'
import SampleNav from './SampleNav'

export default class AppLayout extends Component {
	render() {
		return (
			<Panel title="React APP">
				<SampleNav />
				{this.props.children}
			</Panel>
		)
	}
}