import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
	render() {
		const dogs = this.props.dogs;
		const cardsDogs = dogs.map((dog) => {
			return (
				<div className="col-12 col-md-6 col-lg-3">
					<div className="card mx-auto" style={{ width: 18 + "rem" }}>
						<img src={dog.src} className="img-fluid" alt="..." />
						<div class="card-body">
							<h5 className="card-title">{dog.name}</h5>

							<Link
								to={`/dogs/${dog.name}`}
								className="btn btn-primary"
							>
								Go somewhere
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
