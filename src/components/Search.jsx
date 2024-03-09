import React from "react";

function Search() {
	return (
		<div className="absolute flex justify-center w-full mt-4">
			<form action="" className="relative flex items-center w-2/3 sm:w-4/5">
				<input
					type="text"
					placeholder="Search..."
					className="w-full px-4 py-2 rounded-full focus:outline-none bg-slate-100"
				/>
				<button
					type="submit"
					className="absolute z-10 cursor-pointer right-4"
					onClick={(e) => e.preventDefault()}
				>
					<i className="fa-solid fa-search"></i>
				</button>
			</form>
		</div>
	);
}

export default Search;
