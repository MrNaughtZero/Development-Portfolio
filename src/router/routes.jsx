import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@pages/Home/components";
import ProjectsPage from "@pages/Projects/components";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/projects"
					element={<ProjectsPage />}
				/>

				<Route
					path="*"
					element={<h1>Page Not Found</h1>}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
