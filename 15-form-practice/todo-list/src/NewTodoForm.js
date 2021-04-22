import React, { Component } from "react";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			todo: e.target.value,
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.addTodo(this.state.todo);
		this.setState({
			todo: "",
		});
	}
	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="todo"
					id="todo"
					placeholder="todo"
					value={this.state.todo}
					onChange={this.handleChange}
				/>
				<button>Add</button>
			</form>
		);
	}
}

export default NewTodoForm;
