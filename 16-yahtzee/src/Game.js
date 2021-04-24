import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scoresLeft: 13,
			gameOver: false,
			rolling: false,
			dice: this.firstRoll(),
			locked: Array(NUM_DICE).fill(false),
			rollsLeft: NUM_ROLLS - 1,
			scores: {
				ones: undefined,
				twos: undefined,
				threes: undefined,
				fours: undefined,
				fives: undefined,
				sixes: undefined,
				threeOfKind: undefined,
				fourOfKind: undefined,
				fullHouse: undefined,
				smallStraight: undefined,
				largeStraight: undefined,
				yahtzee: undefined,
				chance: undefined,
			},
		};
		this.roll = this.roll.bind(this);
		this.doScore = this.doScore.bind(this);
		this.restartGame = this.restartGame.bind(this);
		this.toggleLocked = this.toggleLocked.bind(this);
	}

	roll(evt) {
		if (this.state.rolling) {
			return;
		}
		// roll dice whose indexes are in reroll
		this.setState((st) => ({
			rolling: true,
			dice: st.dice.map((d, i) =>
				st.locked[i] ? d : Math.ceil(Math.random() * 6)
			),
			locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
			rollsLeft: st.rollsLeft - 1,
		}));
		setTimeout(() => {
			this.setState({ rolling: false });
		}, 1000);
	}

	firstRoll() {
		return Array.from({ length: NUM_DICE }).map((d, i) => {
			return Math.ceil(Math.random() * 6);
		});
	}
	toggleLocked(idx) {
		// toggle whether idx is in locked or not
		if (this.state.rollsLeft === 0) return;
		this.setState((st) => ({
			locked: [
				...st.locked.slice(0, idx),
				!st.locked[idx],
				...st.locked.slice(idx + 1),
			],
		}));
	}

	doScore(rulename, ruleFn) {
		if (this.state.rolling) {
			return;
		}

		// evaluate this ruleFn with the dice and score this rulename.

		if (this.state.scores[rulename] >= 0) {
			return;
		}
		this.setState((st) => ({
			scoresLeft: st.scoresLeft - 1,
			scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
			rollsLeft: NUM_ROLLS,
			locked: Array(NUM_DICE).fill(false),
		}));

		this.roll();
	}

	restartGame() {
		this.setState({
			scoresLeft: 13,
			gameOver: false,
			rolling: false,
			dice: this.firstRoll(),
			locked: Array(NUM_DICE).fill(false),
			rollsLeft: 2,
			scores: {
				ones: undefined,
				twos: undefined,
				threes: undefined,
				fours: undefined,
				fives: undefined,
				sixes: undefined,
				threeOfKind: undefined,
				fourOfKind: undefined,
				fullHouse: undefined,
				smallStraight: undefined,
				largeStraight: undefined,
				yahtzee: undefined,
				chance: undefined,
			},
		});
	}
	displayRollInfo() {
		if (this.state.rolling) return "Rolling...";
		const messages = ["0 Rolls Left", "1 Rolls Left", "2 Rolls Left"];
		return messages[this.state.rollsLeft];
	}
	render() {
		const {
			dice,
			locked,
			rollsLeft,
			rolling,
			scores,
			scoresLeft,
		} = this.state;
		let totalScore = 0;
		for (let score in scores) {
			if (scores[score]) {
				totalScore += parseInt(scores[score]);
			}
		}
		if (scoresLeft === 0) {
			return (
				<div>
					<h1>Game over!</h1>
					<h4>Total score {totalScore}</h4>
					<button onClick={this.restartGame}>Play again?</button>
				</div>
			);
		}
		return (
			<div className="Game">
				<header className="Game-header">
					<h1 className="App-title">Yahtzee!</h1>

					<section className="Game-dice-section">
						<Dice
							disabled={rollsLeft === 0}
							rolling={rolling}
							dice={dice}
							locked={locked}
							handleClick={this.toggleLocked}
						/>
						<div className="Game-button-wrapper">
							<button
								className="Game-reroll"
								disabled={
									locked.every((x) => x) ||
									rollsLeft === 0 ||
									rolling
								}
								onClick={this.roll}
							>
								{this.displayRollInfo()}
							</button>
						</div>
					</section>
				</header>
				<ScoreTable doScore={this.doScore} scores={scores} />
				<div>
					<h4>Total score {totalScore}</h4>
				</div>
			</div>
		);
	}
}

export default Game;
