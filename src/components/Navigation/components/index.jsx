import { Link } from "react-router-dom";
import { links } from "../data/links";
import "../styles/index.scss";

export default function Navigation({ page }) {
	return (
		<div className="nav">
			<nav>
				<ul>
					{links.map((link) => {
						const { id, path, label, icon: Icon } = link;
						return (
							<li
								key={id}
								className={page == label ? "active" : ""}
							>
								<Link to={path}>
									<Icon />
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}
