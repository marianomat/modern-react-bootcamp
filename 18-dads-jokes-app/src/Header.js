import React, { Component } from "react";
import "./Header.css";
import emojiRisa from "./svgs/emoji-risa.svg";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleAddJokes = this.handleAddJokes.bind(this);
	}
	handleAddJokes() {
		this.props.addJokes();
	}
	render() {
		return (
			<div className="Header">
				<h1 className="Header-titulo">
					<span>Dad</span> Jokes
				</h1>
				<img src={emojiRisa} alt="Laughing emojI" />
				<button
					className={this.props.loading ? "loading" : ""}
					onClick={this.handleAddJokes}
				>
					New Jokes
				</button>
			</div>
		);
	}
}

export default Header;
