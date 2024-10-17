import Header from "@components/Header/components";
import Navigation from "@components/Navigation/components";
import "../styles/index.scss";

export default function Wrapper({ children, page }) {
	return (
		<>
			<div className="container">
				<Header page={page} />
				<div className="content">{children}</div>
			</div>
			<Navigation page={page} />
		</>
	);
}
