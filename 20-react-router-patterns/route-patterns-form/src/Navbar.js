import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}
	handleClick() {
		alert("LOGEA2 kappa");
		this.props.history.push("/img/salmon");
	}
	handleBack() {
		this.props.history.goBack();
	}
	render() {
		return (
			<div>
				<button onClick={this.handleBack}>Volver</button>
				<button onClick={this.handleClick}>Log in</button>
			</div>
		);
	}
}

export default withRouter(Navbar);
