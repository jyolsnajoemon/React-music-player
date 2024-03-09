import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../assets/logo.png";
import {navItems} from "../data/data";

function Navbar() {
	return (
		<>
			<hamburger
				className="absolute z-10 text-3xl text-center cursor-pointer lg:hidden top-4 left-4"
				onClick={() => {
					document.querySelector("nav").classList.toggle("left-0");
				}}
			>
				<i className="fa-solid fa-bars"></i>
			</hamburger>
			<nav className="absolute z-20 flex flex-col items-center h-screen transition-all duration-300 ease-in-out lg:left-0 -left-44 lg:bg-pink-300 justify-evenly lg:relative basis-1/5 w-44 lg:min-w-44 backdrop-blur-md lg:backdrop-blur-0">
				<img src={logo} alt="logo" className="w-[calc(70%)]" />
				<i
					class="fa-regular fa-circle-xmark text-3xl text-center block lg:hidden cursor-pointer"
					onClick={() => {
						document.querySelector("nav").classList.toggle("left-0");
					}}
				></i>
				{Object.entries(navItems).map(([group, section]) => (
					<div className="flex flex-col w-full gap-3 pl-[calc(15%)]">
						<h2 className="text-xl font-semibold ">{group}</h2>
						<ul className="flex flex-col items-start w-full gap-1">
							{Object.entries(section).map(([label, icon]) => (
								<li
									key={label}
									className="flex justify-center font-semibold text-center rounded-full"
								>
									<NavLink to={label} className="flex items-center gap-4">
										<i className={`${icon} text-sm mt-0.5`}></i>
										<p>{label}</p>
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				))}
			</nav>
		</>
	);
}

export default Navbar;
