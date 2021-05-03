import React, { Component } from "react";
import spriteJpg from "./sprite.jpg";
import "./Sprite.css";

class Sprite extends Component {
	render() {
		return (
			<div className="Sprite">
				<img src={spriteJpg} />
				<h1>Sprite</h1>
				<img src={spriteJpg} />
			</div>
		);
	}
}

export default Sprite;
