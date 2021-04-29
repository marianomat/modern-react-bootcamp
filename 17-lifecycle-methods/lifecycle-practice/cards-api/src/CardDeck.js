import React, { Component } from "react";
import axios from "axios";
import "./CardDeck.css";

class CardDeck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deckId: "",
			cards: [],
			cardsRemaining: 53,
		};
		this.drawCard = this.drawCard.bind(this);
	}
	async componentDidMount() {
		let deck = await axios.get("https://deckofcardsapi.com/api/deck/new/");

		this.setState({ deckId: deck.data.deck_id });
	}
	async drawCard() {
		try {
			let card = await axios.get(
				`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`
			);
			if (!card.data.success) {
				throw new Error("No hay mas cartas!");
			}
			this.setState((oldState) => {
				return {
					cards: [...oldState.cards, card.data],
					cardsRemaining: card.data.remaining,
				};
			});
		} catch (err) {
			alert(err);
		}
	}
	render() {
		return (
			<div className="CardDeck">
				<h1 className="CardDeck-titulo">◇ Card Dealer ◇</h1>
				<h2 className="CardDeck-subtitulo">
					◇ Una app realizada con React ◇
				</h2>
				<button className="CardDeck-btn" onClick={this.drawCard}>
					DrawCard
				</button>
				<div className="CardDeck-CardsContainer">
					{this.state.cards.map((card) => {
						return (
							<img
								className="CardDeck-Card"
								key={card.cards[0].code}
								src={card.cards[0].image}
								alt={
									card.cards[0].suit +
									" " +
									card.cards[0].value
								}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default CardDeck;
