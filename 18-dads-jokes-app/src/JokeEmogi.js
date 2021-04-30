import React, { Component } from "react";
import "./JokeEmogi.css";
import bestScoreSvg from "./svgs/best-score.svg";
import worstScoreSvg from "./svgs/worst-score.svg";
import goodScoreSvg from "./svgs/good-score.svg";
import badScoreSvg from "./svgs/bad-score.svg";
import okScoreSvg from "./svgs/ok-score.svg";

class JokeEmogi extends Component {
	emogiSelector() {
		let votes = this.props.votes;
		switch (true) {
			case votes >= 10:
				return { emogi: bestScoreSvg, alt: "laughing emogi" };
			case votes >= 5:
				return { emogi: goodScoreSvg, alt: "laughing emogi" };
			case votes >= -5:
				return { emogi: okScoreSvg, alt: "normal emogi" };
			case votes >= -10:
				return { emogi: badScoreSvg, alt: "serious emogi" };
			case votes < -10:
				return { emogi: worstScoreSvg, alt: "serious emogi" };
			default:
				return { emogi: okScoreSvg, alt: "normal emogi" };
		}
	}
	render() {
		return (
			<img
				className="JokeEmogi"
				src={this.emogiSelector().emogi}
				alt={this.emogiSelector().alt}
			/>
		);
	}
}

export default JokeEmogi;
