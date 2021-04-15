import React, { Component } from "react";
import "./AlphaButtons.css";

class AlphaButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleGuess = this.handleGuess.bind(this);
	}
	handleGuess(e) {
		this.props.guess(e);
	}
	generateButtons(letters) {
		return letters.split("").map((ltr) => (
			<button
				key={ltr}
				value={ltr}
				onClick={this.handleGuess}
				disabled={this.props.guessed.has(ltr)}
			>
				{ltr}
			</button>
		));
	}
	render() {
		return (
			<div className="AlphaButtons">
				<p className="AlphaButtons-btns">
					{this.generateButtons(this.props.letters)}
				</p>
			</div>
		);
	}
}

export default AlphaButtons;
