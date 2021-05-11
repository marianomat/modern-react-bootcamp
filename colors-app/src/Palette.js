import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
	render() {
		const colorBoxes = this.props.colors.map((color) => <ColorBox background={color.color} colorName={color.name} />);
		return (
			<div className="Palette">
				{/* header */}
				<div className="Palette-colors">{colorBoxes}</div>
				{/* footer */}
			</div>
		);
	}
}

export default Palette;
