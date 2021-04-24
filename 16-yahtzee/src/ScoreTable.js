import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
	ones,
	twos,
	threes,
	fours,
	fives,
	sixes,
	threeOfKind,
	fourOfKind,
	fullHouse,
	smallStraight,
	largeStraight,
	yahtzee,
	chance,
} from "./Rules";

class ScoreTable extends Component {
	render() {
		const { scores, doScore } = this.props;

		return (
			<div className="ScoreTable">
				<section className="ScoreTable-section">
					<h2>Upper</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Ones"
								description="1 points pef 1"
								score={scores.ones}
								doScore={(evt) =>
									doScore("ones", ones.evalRoll)
								}
							/>
							<RuleRow
								name="Twos"
								description="2 points pef 2"
								score={scores.twos}
								doScore={(evt) =>
									doScore("twos", twos.evalRoll)
								}
							/>
							<RuleRow
								name="Threes"
								description="3 points pef 3"
								score={scores.threes}
								doScore={(evt) =>
									doScore("threes", threes.evalRoll)
								}
							/>
							<RuleRow
								name="Fours"
								description="4 points per 4"
								score={scores.fours}
								doScore={(evt) =>
									doScore("fours", fours.evalRoll)
								}
							/>
							<RuleRow
								name="Fives"
								description="5 points per 5"
								score={scores.fives}
								doScore={(evt) =>
									doScore("fives", fives.evalRoll)
								}
							/>
							<RuleRow
								description="6 points per 6"
								name="Sixes"
								score={scores.sixes}
								doScore={(evt) =>
									doScore("sixes", sixes.evalRoll)
								}
							/>
						</tbody>
					</table>
				</section>
				<section className="ScoreTable-section ScoreTable-section-lower">
					<h2>Lower</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Three of Kind"
								description="Sum all dice if 3 are the same"
								score={scores.threeOfKind}
								doScore={(evt) =>
									doScore("threeOfKind", threeOfKind.evalRoll)
								}
							/>
							<RuleRow
								name="Four of Kind"
								description="Sum all dice if 4 are the same"
								score={scores.fourOfKind}
								doScore={(evt) =>
									doScore("fourOfKind", fourOfKind.evalRoll)
								}
							/>
							<RuleRow
								name="Full House"
								description="25 points for a full house"
								score={scores.fullHouse}
								doScore={(evt) =>
									doScore("fullHouse", fullHouse.evalRoll)
								}
							/>
							<RuleRow
								name="Small Straight"
								description="30 points for a small straight"
								score={scores.smallStraight}
								doScore={(evt) =>
									doScore(
										"smallStraight",
										smallStraight.evalRoll
									)
								}
							/>
							<RuleRow
								name="Large Straight"
								description="40 points for a large straight"
								score={scores.largeStraight}
								doScore={(evt) =>
									doScore(
										"largeStraight",
										largeStraight.evalRoll
									)
								}
							/>
							<RuleRow
								name="Yahtzee"
								description="50 points for a Yahtzee"
								score={scores.yahtzee}
								doScore={(evt) =>
									doScore("yahtzee", yahtzee.evalRoll)
								}
							/>
							<RuleRow
								name="Chance"
								description="Sum of all dice"
								score={scores.chance}
								doScore={(evt) =>
									doScore("chance", chance.evalRoll)
								}
							/>
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}

export default ScoreTable;
