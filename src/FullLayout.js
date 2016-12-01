import React, { Component } from 'react'
import { Route } from 'react-router'

import Panel from './components/Panel'

import './FullLayout.css'

export default class FullLayout extends Component {
	render() {
		return (
			<Panel title="React Complex Layout">
				<Panel className="FullLayout__SideNav" title="sidenav">
					{this.props.sidebar}
				</Panel>
				<Panel className="FullLayout__Main" title="main">
					{this.props.main}
				</Panel>
			</Panel>
		)
	}
}