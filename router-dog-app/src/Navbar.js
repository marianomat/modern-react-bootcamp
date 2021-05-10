import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		const dogs = this.props.dogs;
		let navLinks = dogs.map((dog, i) => {
			return (
				<NavLink
					key={i}
					className="nav-link"
					activeClassName="active-link"
					to={`/dogs/${dog.name}`}
				>
					{dog.name}
				</NavLink>
			);
		});
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<Link className="navbar-brand" to="/dogs">
						Dog App
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup"
					>
						<div className="navbar-nav">{navLinks}</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
