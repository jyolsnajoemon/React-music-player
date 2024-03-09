import React from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import {Home, Navbar, Sidebar} from "./components";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
