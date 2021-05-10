import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
	render() {
		const dogs = this.props.dogs;
		const cardsDogs = dogs.map((dog, i) => {
			return (
				<div key={i} className="col-md-6 col-lg-3">
					<div className="card mx-auto" style={{ width: 18 + "rem" }}>
						<img
							src={dog.src}
							className="img-fluid mt-3"
							alt="..."
						/>
						<div className="card-body">
							<Link
								to={`/dogs/${dog.name}`}
								className="underline"
							>
								{dog.name}
							</Link>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div className="Home container mt-5">
				<div className="row justify-content-center">{cardsDogs}</div>
			</div>
		);
	}
}

export default Home;
