import React, { Component } from "react";

class Box extends Component {
	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}
	handleRemove() {
		this.props.remove(this.props.id);
	}
	render() {
		let props = this.props.style;
		console.log(this.props);
		return (
			<div>
				<div
					style={{
						height: `${props.height}px`,
						width: `${props.width}px`,
						backgroundColor: props.color,
					}}
					onClick={this.handleRemove}
				></div>
			</div>
		);
	}
}

export default Box;
