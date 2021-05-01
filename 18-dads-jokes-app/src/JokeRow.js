import React, { Component } from "react";
import JokeScore from "./JokeScore";
import Joke from "./Joke";
import JokeEmogi from "./JokeEmogi";
import "./JokeRow.css";

class JokeRow extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="JokeRow">
				<JokeScore
					vote={this.props.vote}
					joke={this.props.joke}
					votes={this.props.joke.votes}
				/>
				<Joke joke={this.props.joke.joke} />
				<JokeEmogi votes={this.props.joke.votes} />
			</div>
		);
	}
}

export default JokeRow;
