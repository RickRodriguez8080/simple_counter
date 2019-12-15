import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="clock-img">
				<i className="far fa-clock" />
			</div>
			<div className="thousands_seconds">{props.digitFour}</div>
			<div className="hundreds_seconds">{props.digitThree}</div>
			<div className="tens_seconds">{props.digitTwo}</div>
			<div className="ones_seconds">{props.digitOne}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(() => {
	// getting the values for the seconds, we only needs the remainder as we want
	// the count to go from 0-9, and then increase the next place value by 1
	const thousands = Math.floor((counter / 1000) % 10);
	const hundreds = Math.floor((counter / 100) % 10);
	const tens = Math.floor((counter / 10) % 10);
	const ones = Math.floor((counter / 1) % 10);

	// The console.log() below is to test the increments
	//console.log(four, three, two, one);
	counter++;

	//re-render as the counter increments to update the seconds
	ReactDOM.render(
		<SimpleCounter
			digitFour={thousands}
			digitThree={hundreds}
			digitTwo={tens}
			digitOne={ones}
		/>,
		document.querySelector("#app")
	);
}, 1000);
