import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
	render() {
		return <p className="Joke">{this.props.joke}</p>;
	}
}

export default Joke;
