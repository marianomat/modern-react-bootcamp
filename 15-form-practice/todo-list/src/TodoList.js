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
	}
	addTodo(task) {
		this.setState({
			todos: [...this.state.todos, { todo: task, id: uuidv4() }],
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
	render() {
		return (
			<div className="TodoList">
				<h1>Todo List</h1>
				<NewTodoForm addTodo={this.addTodo} />
				{this.state.todos.map((todo) => {
					return (
						<Todo
							key={todo.id}
							todo={todo}
							remove={this.removeTodo}
							editTodo={this.editTodo}
						/>
					);
				})}
			</div>
		);
	}
}

export default TodoList;
