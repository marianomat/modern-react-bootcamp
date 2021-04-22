import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.completarTodo = this.completarTodo.bind(this);
	}
	addTodo(task) {
		this.setState({
			todos: [
				...this.state.todos,
				{ todo: task, id: uuidv4(), completado: false },
			],
		});
	}
	removeTodo(id) {
		let newTodos = this.state.todos.filter((todo) => todo.id !== id);
		this.setState({ todos: newTodos });
	}
	editTodo(newTodo) {
		let newTodos = this.state.todos.map((oldTodo) => {
			return oldTodo.id === newTodo.id ? newTodo : oldTodo;
		});
		this.setState({ todos: newTodos });
	}
	completarTodo(newTodo) {
		let newTodos = this.state.todos.map((oldTodo) => {
			return oldTodo.id === newTodo.id ? newTodo : oldTodo;
		});
		this.setState({ todos: newTodos });
	}
	render() {
		return (
			<div className="TodoList">
				<h1>
					Todo List <span>Siemple aplicación con React</span>
				</h1>
				<NewTodoForm addTodo={this.addTodo} />
				<ul>
					{this.state.todos.map((todo) => {
						return (
							<li key={todo.id}>
								<Todo
									key={todo.id}
									todo={todo}
									remove={this.removeTodo}
									editTodo={this.editTodo}
									completarTodo={this.completarTodo}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default TodoList;
