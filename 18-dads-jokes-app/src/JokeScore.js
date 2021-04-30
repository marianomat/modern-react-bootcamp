import React, { Component } from "react";
import "./JokeScore.css";

class JokeScore extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleUpvote = this.handleUpvote.bind(this);
		this.handleDownvote = this.handleDownvote.bind(this);
	}
	handleUpvote() {
		this.props.vote(this.props.joke.id, 1);
	}
	handleDownvote() {
		this.props.vote(this.props.joke.id, -1);
	}
	render() {
		return (
			<div className="JokeScore">
				<button onClick={this.handleUpvote}>
					<i className="fas fa-arrow-up"></i>
				</button>
				<span>{this.props.joke.votes}</span>
				<button onClick={this.handleDownvote}>
					<i className="fas fa-arrow-down"></i>
				</button>
			</div>
		);
	}
}

export default JokeScore;
