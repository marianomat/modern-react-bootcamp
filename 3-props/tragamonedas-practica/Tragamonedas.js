class Tragamonedas extends React.Component {
	static defaultProps = {
		frutas: ["ASD", "ADS", "DSA"],
	};
	render() {
		const frutas = this.props.frutas;
		let frutaRandom = () => {
			return frutas[Math.floor(Math.random() * frutas.length)];
		};
		let fruta1 = frutaRandom();
		let fruta2 = frutaRandom();
		let fruta3 = frutaRandom();
		return (
			<div>
				<p>
					{fruta1}
					{fruta2}
					{fruta3}
				</p>
				<Resultado
					resutaldo={
						fruta1 === fruta2 && fruta1 === fruta3
							? "ganaste"
							: "perdiste"
					}
				/>
			</div>
		);
	}
}
