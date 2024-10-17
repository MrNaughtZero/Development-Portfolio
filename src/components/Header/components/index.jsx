import { getTime } from "../helpers/date";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/index.scss";

export default function Header({ page }) {
	const [time, setTime] = useState(getTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(getTime());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<header className="header">
			<div className="header__container">
				<nav>
					<Link to={"/"}>Neil McNaught</Link>
					{page && page !== "Home" && <span className="page"> / {page}</span>}
				</nav>
				<div className="time">
					<span>{time} BST</span>
				</div>
			</div>
		</header>
	);
}
