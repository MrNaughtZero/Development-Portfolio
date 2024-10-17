import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import AppRoutes from "./router/routes.jsx";
import "./styles/styles.scss";

function App() {
	return (
		<RecoilRoot>
			<RecoilNexus />
			<AppRoutes />
		</RecoilRoot>
	);
}

export default App;
