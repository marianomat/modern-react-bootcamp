import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
	static defaultProps = {
		icons: [
			"fas fa-dice-one",
			"fas fa-dice-two",
			"fas fa-dice-three",
			"fas fa-dice-four",
			"fas fa-dice-five",
			"fas fa-dice-six",
		],
	};
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		if (this.props.rolling) {
			return;
		}
		this.props.handleClick(this.props.idx);
	}
	render() {
		let { icons, val, rolling, locked, disabled } = this.props;
		return (
			<i
				className={`Die ${icons[val - 1]} ${
					rolling ? "Die-rolling" : ""
				} ${locked ? "Die-locked" : ""} 
				`}
				disabled={disabled}
				onClick={this.handleClick}
			></i>
		);
	}
}

export default Die;
