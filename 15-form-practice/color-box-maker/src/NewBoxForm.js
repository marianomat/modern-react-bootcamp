import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewBoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: "",
			width: "",
			color: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		//* llamar metodo padre
		this.props.addBox({ ...this.state, id: uuidv4() });
		//* Reiniciar estado
		this.setState({
			height: "",
			width: "",
			color: "",
		});
	}
	render() {
		return (
			<div>
				<h2>Add a new box!</h2>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="width">Width:</label>
						<input
							onChange={this.handleChange}
							value={this.state.width}
							type="text"
							id="width"
							name="width"
							placeholder="width"
						></input>
					</div>
					<div>
						<label htmlFor="height">Height:</label>
						<input
							onChange={this.handleChange}
							value={this.state.height}
							type="text"
							id="height"
							name="height"
							placeholder="height"
						></input>
					</div>
					<div>
						<label htmlFor="color">Color:</label>
						<input
							onChange={this.handleChange}
							value={this.state.color}
							type="text"
							id="color"
							name="color"
							placeholder="color"
						></input>
					</div>
					<button>Add box</button>
				</form>
			</div>
		);
	}
}

export default NewBoxForm;
