import React, { Component } from 'react'

export default class ItemShowPage extends Component {
	render() {
		return (
			<div>
				ItemShowPage {this.props.params.id}
			</div>
		)
	}
}