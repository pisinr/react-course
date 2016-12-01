import React, { Component } from 'react'
import { Route } from 'react-router'

import Panel from '../components/Panel'

import './ItemLayout.css'

export default class ItemLayout extends Component {
	render() {
		return (
			<Panel title="React Complex Layout">
				<Panel className="ItemLayout__SideNav" title="sidenav">
					{this.props.sidebar}
				</Panel>
				<Panel className="ItemLayout__Main" title="main">
					{this.props.main}
				</Panel>
			</Panel>
		)
	}
}