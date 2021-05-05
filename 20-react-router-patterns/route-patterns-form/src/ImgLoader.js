import React, { Component } from "react";
import { Link } from "react-router-dom";

class ImgLoader extends Component {
	render() {
		return (
			<div>
				<img
					src={`https://source.unsplash.com/1600x900/?${this.props.match.params.categoria}`}
				/>
				<Link to="/">Volver</Link>
			</div>
		);
	}
}

export default ImgLoader;
