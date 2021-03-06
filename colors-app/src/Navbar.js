import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: "hex",
			open: false,
		};

		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}

	handleFormatChange(e) {
		this.setState({
			format: e.target.value,
			open: true,
		});
		console.log(e.target.value);
		this.props.handleChange(e.target.value);
	}

	closeSnackbar() {
		this.setState({ open: false });
	}

	render() {
		const { level, changeLevel } = this.props;
		const { format } = this.state;
		console.log(format);
		return (
			<nav className="Navbar">
				<div className="logo">
					<Link to="/">React color picker</Link>
				</div>
				<div className="slider-container">
					<span>Level: {level}</span>
					<div className="slider">
						<Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={changeLevel} />
					</div>
				</div>
				<div className="select-container">
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
					open={this.state.open}
					autoHideDuration={3000}
					message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
					ContentProps={{ "aria-describedby": "message-id" }}
					onClose={this.closeSnackbar}
					action={[
						<IconButton key="clse" aria-label="close" color="inherit">
							<CloseIcon onClick={this.closeSnackbar} />
						</IconButton>,
					]}
				/>
			</nav>
		);
	}
}

export default Navbar;
