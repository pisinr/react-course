import React, { Component } from 'react'

import './LoginPage.css'

import Panel from '../components/Panel'
import DocumentTitle from '../components/DocumentTitle'

export default class LoginPage extends Component {
	render() {
		return (
			<Panel title="Login" className="LoginPage__Panel">
				<DocumentTitle title="Login Page" />
				<div className="form-control">
					<input type="text" />
				</div>
				<div className="form-control">
					<input type="password" />
				</div>
				<button>Login</button>
			</Panel>
		)
	}
}