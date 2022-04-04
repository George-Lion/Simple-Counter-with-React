import React, { useState, useEffect } from "react";
import Cards from "./card";

//create your first component

const Home = () => {
	const time = <i className="fas fa-clock"></i>;
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(timer + 1);
		}, 1000);

		return () => clearInterval(interval);
	});

	return (
		<div className="container justify-content-center">
			<div className="container shadow-sm bg-dark">
				<div className="row justify-content-center">
					<Cards icon={time} />
					<Cards num={Math.floor((timer / 100000) % 10)} />
					<Cards num={Math.floor((timer / 10000) % 10)} />
					<Cards num={Math.floor((timer / 1000) % 10)} />
					<Cards num={Math.floor((timer / 100) % 10)} />
					<Cards num={Math.floor((timer / 10) % 10)} />
					<Cards num={Math.floor((timer / 1) % 10)} />
				</div>
			</div>
		</div>
	);
};

export default Home;
