import React, { Component } from "react";
import AlphaButtons from "./AlphaButtons";
import { randomWord } from "./words";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
	//* by default, allow 6 guesses and use provided gallows images. */
	static defaultProps = {
		maxWrong: 6,
		images: [img0, img1, img2, img3, img4, img5, img6],
		letters: "abcdefghijklmnopqrstuvwxyz",
	};
	constructor(props) {
		super(props);
		this.state = {
			nRight: 0,
			nWrong: 0,
			guessed: new Set(),
			answer: randomWord(),
		};
		this.guess = this.guess.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}
	//*Este metodo agrega las letras en la palabra si estaba o no agrega nada si no esta la letra
	guessedWord() {
		return this.state.answer
			.split("")
			.map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
	}

	//*Este metodo revisa si la letra esta o no en la palabra
	guess(evt) {
		let ltr = evt.target.value;
		this.setState((st) => ({
			guessed: st.guessed.add(ltr),
			nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
			nRight: st.nRight + (st.answer.includes(ltr) ? 1 : 0),
		}));
	}

	//*Este metodo reinicia el juego
	handleReset(evt) {
		this.setState({
			nRight: 0,
			nWrong: 0,
			guessed: new Set(),
			answer: randomWord(),
		});
	}

	render() {
		let checkearSiGano = this.guessedWord().includes("_");
		let checkearSiPerdio = this.state.nWrong === this.props.maxWrong;
		let altImg = `Img ${this.state.nWrong}/${this.props.maxWrong}`;
		return (
			<div className="Hangman">
				<h1>Hangman</h1>
				<img src={this.props.images[this.state.nWrong]} alt={altImg} />
				<p>Errores: {this.state.nWrong}.</p>
				{!checkearSiGano ? (
					<div>
						<p>GANASTE PAPU</p>
						<button onClick={this.handleReset}>Restart game</button>
					</div>
				) : (
					<div>
						{checkearSiPerdio ? (
							<div>
								{" "}
								<p>Peridste pa</p>
								<p>
									La palabra era: <b>{this.state.answer}</b>
								</p>
								<button onClick={this.handleReset}>
									Restart game
								</button>
							</div>
						) : (
							<div>
								<p className="Hangman-word">
									{this.guessedWord()}
								</p>
								<AlphaButtons
									letters={this.props.letters}
									guess={this.guess}
									guessed={this.state.guessed}
								/>
							</div>
						)}{" "}
					</div>
				)}
			</div>
		);
	}
}

export default Hangman;
