import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class Dog extends Component {
	checkDog() {
		return this.props.dogs.find((dog) => {
			return dog.name === this.props.match.params.dog;
		});
	}
	render() {
		let dog = this.checkDog();
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						{dog ? (
							<div
								className="card mx-auto mt-5"
								style={{ width: 40 + "rem" }}
							>
								<img
									src={dog.src}
									style={{
										height: 500 + "px",
										objectFit: "cover",
									}}
									className="img-fluid"
									alt="..."
								/>
								<div className="card-body">
									<h2 className="card-title">{dog.name}</h2>
									<h4 className="card-subtitle text-muted">
										Age: {dog.age}
									</h4>
									<ul className="list-group list-group-flush">
										{dog.facts.map((fact, i) => {
											return (
												<li
													key={i}
													className="text-start list-group-item"
												>
													{fact}
												</li>
											);
										})}
									</ul>
								</div>
								<div className="card-body">
									<Link to="/dogs">Go back</Link>
								</div>
							</div>
						) : (
							<Redirect to="/dogs"></Redirect>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Dog;
