import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
	static defaultProps = {
		nRows: 5,
		nCols: 5,
		chanceLightStartsOn: 0.25,
	};
	constructor(props) {
		super(props);
		this.state = {
			hasWon: false,
			board: this.createBoard(),
		};
		this.flipCellsAround = this.flipCellsAround.bind(this);
	}

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
	randomLightStatus() {
		return Math.random() < this.props.chanceLightStartsOn ? true : false;
	}

	createBoard() {
		let board = [];
		// TODO: create array-of-arrays of true/false values
		for (let i = 0; i < this.props.nRows; i++) {
			board[i] = [];
			for (let j = 0; j < this.props.nCols; j++) {
				board[i][j] = this.randomLightStatus();
			}
		}
		return board;
	}

	/** handle changing a cell: update board & determine if winner */

	flipCellsAround(coord) {
		let { nCols, nRows } = this.props;
		nCols--;
		nRows--;
		let board = this.state.board;
		let [x, y] = coord.split("-").map(Number);
		function flipCell(x, y) {
			// if this coord is actually on board, flip it
			if (x >= 0 && x <= nCols && y >= 0 && y <= nRows) {
				board[y][x] = !board[y][x];
			}
		}
		flipCell(x, y);
		flipCell(x + 1, y);
		flipCell(x - 1, y);
		flipCell(x, y + 1);
		flipCell(x, y - 1);

		// TODO: determine is the game has been won
		/* function checkIfWon() {
			for (let rows of board) {
				for (let col of rows) {
					if (col !== false) {
						return false;
					}
				}
			}
			return true;
		} */
		//this.setState({ board, hasWon: checkIfWon() });
		//*Mejor solucion para ver si gano
		let hasWon = board.every((row) => row.every((cell) => !cell));
		this.setState({ board, hasWon });
	}

	/** Render game board or winning message. */

	render() {
		if (this.state.hasWon) {
			return (
				<div className="board-title">
					<div className="winner">
						<span className="neon-orange">You</span>
						<span className="neon-blue">Win!</span>
					</div>
				</div>
			);
		}
		return (
			<div>
				<div className="board-title">
					<div className="neon-orange">Lights</div>
					<div className="neon-blue">Out</div>
				</div>

				<table className="Board">
					<tbody>
						{this.state.board.map((row, y) => {
							{
								return (
									<tr key={y}>
										{row.map((col, x) => {
											return (
												<Cell
													coord={x + "-" + y}
													key={x + "-" + y}
													isLit={col}
													flipCellsAroundMe={
														this.flipCellsAround
													}
												/>
											);
										})}
									</tr>
								);
							}
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Board;
