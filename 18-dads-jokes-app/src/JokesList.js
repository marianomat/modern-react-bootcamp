import React, { Component } from "react";
import JokeRow from "./JokeRow";
import "./JokesList.css";

class JokesList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let jokeRows = this.props.jokes.map((joke) => {
			return <JokeRow key={joke.id} joke={joke} vote={this.props.vote} />;
		});
		let loading = <div className="spinner"></div>;
		return (
			<div className="JokesList">
				{this.props.loading ? loading : jokeRows}
			</div>
		);
	}
}

export default JokesList;
