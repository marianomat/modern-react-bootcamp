import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import JokesList from "./JokesList";
import "./DadJokes.css";
let miStorage = window.localStorage;

class DadJokes extends Component {
	constructor(props) {
		super(props);
		this.state = JSON.parse(miStorage.getItem("estado")) || {
			loadingMount: true,
			addLoading: false,
			jokes: [],
		};
		this.addJokes = this.addJokes.bind(this);
		this.vote = this.vote.bind(this);
	}
	async componentDidMount() {
		if (JSON.parse(miStorage.getItem("estado"))) {
			return;
		}
		let jokes = [];
		for (let i = 0; i < 10; i++) {
			let newJoke = await axios.get("https://icanhazdadjoke.com/", {
				headers: {
					Accept: "application/json",
				},
			});
			if (
				jokes.length > 1 &&
				jokes.some((joke) => joke.id === newJoke.data.id)
			) {
				i--;
				alert("repeti2");
				//* Checkear que no se repitan con chistes del estado
			} else {
				jokes.push({ ...newJoke.data, votes: 0 });
			}
		}
		this.setState({ jokes: jokes, loadingMount: false });
		miStorage.setItem("estado", JSON.stringify(this.state));
	}
	async addJokes() {
		if (this.state.addLoading) {
			return;
		}
		this.setState({ addLoading: true });
		let jokes = [];
		for (let i = 0; i < 10; i++) {
			let newJoke = await axios.get("https://icanhazdadjoke.com/", {
				headers: {
					Accept: "application/json",
				},
			});
			//* Checkear que no se repitan entre los nuevos chistes
			if (
				jokes.length > 1 &&
				jokes.some((joke) => joke.id === newJoke.data.id)
			) {
				i--;
				//* Checkear que no se repitan con chistes del estado
			} else if (
				this.state.jokes.some(
					(stateJoke) => stateJoke.id === newJoke.data.id
				)
			) {
				i--;
			} else {
				jokes.push({ ...newJoke.data, votes: 0 });
			}
		}
		this.setState((st) => {
			return {
				jokes: [...st.jokes, ...jokes],
				addLoading: false,
			};
		});
	}
	vote(id, vote) {
		let updatedJokes = this.state.jokes.map((joke) => {
			if (joke.id === id) {
				return { ...joke, votes: joke.votes + vote };
			} else {
				return joke;
			}
		});
		this.setState({
			jokes: updatedJokes,
		});
	}
	componentDidUpdate() {
		miStorage.setItem("estado", JSON.stringify(this.state));
	}
	render() {
		let sortedJokes = this.state.jokes.sort((b, a) => a.votes - b.votes);
		return (
			<div className="DadJokes">
				<Header
					loading={this.state.addLoading}
					addJokes={this.addJokes}
				/>
				<JokesList
					jokes={sortedJokes}
					loading={this.state.loadingMount}
					vote={this.vote}
				/>
			</div>
		);
	}
}

export default DadJokes;
