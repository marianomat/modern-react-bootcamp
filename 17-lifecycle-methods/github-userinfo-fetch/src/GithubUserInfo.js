import React, { Component } from "react";
import axios from "axios";

class GithubUserInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgUrl: "",
			nombre: "",
		};
		console.log("dentro del state");
	}
	async componentDidMount() {
		const url = `https://api.github.com/users/${this.props.usuario}`;
		let response = await axios.get(url);
		let data = response.data;
		console.log("dentro del componentDIdMount");
		this.setState({
			imgUrl: data.avatar_url,
			nombre: data.login,
		});
	}
	componentDidUpdate() {
		console.log("dentro del componentDidUpdate");
	}
	render() {
		console.log("dentro del render");
		return (
			<div>
				<h1>{this.state.nombre}</h1>
				<img src={this.state.imgUrl} />
			</div>
		);
	}
}

export default GithubUserInfo;
