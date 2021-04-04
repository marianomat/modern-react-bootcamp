let numeroRandom = () => {
	return Math.floor(Math.random() * 10) + 1;
};

class EligeNumero extends React.Component {
	render() {
		let num = numeroRandom();
		return (
			<div>
				<h1>El numero es {num}</h1>
				<p>{num === 7 ? "BIEN" : "MAL"}</p>
				{num === 7 && (
					<img src="https://images.unsplash.com/photo-1611095969382-19fbe23cebff?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" />
				)}
			</div>
		);
	}
}

ReactDOM.render(<EligeNumero />, document.getElementById("root"));

/* let setearClima = () => {
	let climas = ["soleado", "nublado", "lluvioso", "frio"];
	return climas[Math.floor(Math.random() * climas.length)];
};

class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>Mi imagen</h1>
				<h2>El clima esta {setearClima()}</h2>
				<img src="https://images.unsplash.com/photo-1611095969382-19fbe23cebff?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" />
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById("root")); */
