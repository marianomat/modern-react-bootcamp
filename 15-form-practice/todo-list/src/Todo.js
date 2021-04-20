import React, { Component } from "react";
import "./Todo.css";
import EditTodoForm from "./EditTodoForm";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
		};
		this.handleRemove = this.handleRemove.bind(this);
		this.showEdit = this.showEdit.bind(this);
		this.hideEdit = this.hideEdit.bind(this);
	}
	handleRemove() {
		this.props.remove(this.props.todo.id);
	}
	showEdit() {
		this.setState({
			showForm: true,
		});
	}
	hideEdit() {
		this.setState({
			showForm: false,
		});
	}
	render() {
		let display = this.state.showForm ? (
			<EditTodoForm
				editTodo={this.props.editTodo}
				todo={this.props.todo}
				hideEdit={this.hideEdit}
			/>
		) : (
			<div>
				{this.props.todo.todo}
				<span onClick={this.handleRemove}>X</span>
				<span onClick={this.showEdit}>Edit</span>
			</div>
		);
		return <div className="Todo">{display}</div>;
	}
}

export default Todo;
