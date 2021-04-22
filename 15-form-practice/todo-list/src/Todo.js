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
		this.handleCompletado = this.handleCompletado.bind(this);
		this.showEdit = this.showEdit.bind(this);
		this.hideEdit = this.hideEdit.bind(this);
	}
	handleRemove() {
		this.props.remove(this.props.todo.id);
	}
	handleCompletado() {
		this.props.completarTodo({
			...this.props.todo,
			completado: !this.props.todo.completado,
		});
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
			<div className="Todo">
				<EditTodoForm
					editTodo={this.props.editTodo}
					todo={this.props.todo}
					hideEdit={this.hideEdit}
				/>
			</div>
		) : (
			<div className="Todo">
				<div
					onClick={this.handleCompletado}
					className={
						this.props.todo.completado
							? "Todo-completado Todo-Task"
							: "Todo-Task"
					}
				>
					{this.props.todo.todo}
				</div>
				<div className="Todo-Buttons">
					<button onClick={this.handleRemove}>
						<i className="fas fa-trash" />
					</button>
					<button onClick={this.showEdit}>
						<i className="fas fa-pen" />
					</button>
				</div>
			</div>
		);
		return display;
	}
}

export default Todo;
