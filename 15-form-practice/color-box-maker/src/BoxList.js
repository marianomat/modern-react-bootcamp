import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: [],
		};
		this.addBox = this.addBox.bind(this);
		this.remove = this.remove.bind(this);
	}
	addBox(box) {
		this.setState({
			boxes: [...this.state.boxes, box],
		});
	}
	remove(id) {
		/* let newState = { boxes: [] };
		for (let box of this.state.boxes) {
			if (box.id !== id) {
				newState.boxes.push(box);
			}
		}
		this.setState(newState); */

		this.setState({
			boxes: this.state.boxes.filter((box) => box.id !== id),
		});
	}
	render() {
		return (
			<div>
				<NewBoxForm addBox={this.addBox} />
				{this.state.boxes.map((box) => {
					return (
						<Box
							remove={this.remove}
							id={box.id}
							key={box.id}
							style={box}
						/>
					);
				})}
			</div>
		);
	}
}

export default BoxList;
