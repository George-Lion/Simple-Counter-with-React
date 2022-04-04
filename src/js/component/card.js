import React from "react";
import PropTypes from "prop-types";

const Cards = (props) => {
	return (
		<div className="col-sm">
			<div className="card bg-light">
				<div className="card-body d-flex justify-content-center ">
					<h5 className="card-title ">
						{props.icon} {props.num}
					</h5>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	num: PropTypes.number,
	icon: PropTypes.object,
};

export default Cards;
