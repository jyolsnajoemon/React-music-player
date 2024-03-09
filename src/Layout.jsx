import React from "react";
import {Outlet} from "react-router-dom";
import {Navbar, Sidebar, MusicPlayer, Search} from "./components";

function Layout() {
	const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
	window.addEventListener("resize", () => {
		setWindowWidth(window.innerWidth);
	});
	return windowWidth <= 768 ? (
		<>
			<Navbar />
			<div className="flex flex-col h-screen">
				<Search />
				<Sidebar />
				<Outlet />
			</div>
			<MusicPlayer />
		</>
	) : (
		<div className="flex max-container">
			<Navbar />
			<div className="relative flex flex-1">
				<Search />
				<Outlet />
				<Sidebar />
				<MusicPlayer />
			</div>
		</div>
	);
}

export default Layout;
