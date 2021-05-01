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
	colorSelector() {
		let votes = this.props.votes;
		switch (true) {
			case votes >= 10:
				return "#4CAF50";
			case votes >= 5:
				return "#8BC34A";
			case votes >= -5:
				return "#CDDC39";
			case votes >= -10:
				return "#FFEB3B";
			case votes < -10:
				return "#FF9800";
			default:
				return "#F44336";
		}
	}
	render() {
		return (
			<div className="JokeScore">
				<button onClick={this.handleUpvote}>
					<i className="fas fa-arrow-up"></i>
				</button>
				<span style={{ borderColor: this.colorSelector() }}>
					{this.props.joke.votes}
				</span>
				<button onClick={this.handleDownvote}>
					<i className="fas fa-arrow-down"></i>
				</button>
			</div>
		);
	}
}

export default JokeScore;
