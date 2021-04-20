import React, { Component } from "react";

class EditTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: this.props.todo.todo,
			id: this.props.todo.id,
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
		this.props.editTodo(this.state);
		this.props.hideEdit();
		this.setState({
			todo: "",
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="todo-edit"
						id="todo-edit"
						placeholder="todo-edit"
						value={this.state.todo}
						onChange={this.handleChange}
					/>
					<button>Edit</button>
				</form>
			</div>
		);
	}
}

export default EditTodoForm;
