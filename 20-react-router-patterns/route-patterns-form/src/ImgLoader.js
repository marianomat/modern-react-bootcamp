import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ImgLoader extends Component {
	render() {
		const { categoria } = this.props.match.params;
		return (
			<div>
				{/\d/.test(categoria) && <Redirect to="/error" />}

				<img
					src={`https://source.unsplash.com/1600x900/?${categoria}`}
				/>
				<Link to="/">Volver</Link>
			</div>
		);
	}
}

export default ImgLoader;
