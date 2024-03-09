import React from "react";

function MusicPlayer() {
	const [volume, setvolume] = React.useState(50);
	const [playing, setPlaying] = React.useState(false);
	return (
		<div className="absolute bottom-0 z-10 flex justify-between w-full p-6 rounded-t-3xl backdrop-blur-sm">
			<song className="items-center flex-1 hidden gap-4 vsm:flex">
				<img src="" alt="" className="h-12 pl-4" />
				<div className="flex flex-col">
					<p className="text-lg font-semibold">title</p>
					<p className="text-sm">artist</p>
				</div>
			</song>
			<controls className="flex flex-col justify-center gap-3 basis-full vsm:basis-2/3 sm:basis-1/2">
				<div className="flex items-center justify-center gap-4 sm:gap-8">
					<i className="text-lg fa-solid fa-repeat"></i>
					<i className="text-xl fa-solid fa-backward-step"></i>
					<i
						className={
							"text-3xl fa-solid " + (playing ? "fa-play -mr-1" : "fa-pause")
						}
						onClick={() => setPlaying(!playing)}
					></i>
					<i className="text-xl fa-solid fa-forward-step"></i>
					<i className="text-lg fa-solid fa-shuffle"></i>
				</div>
				<div className="flex items-center justify-center text-sm">
					<p>0:00</p>
					<input
						type="range"
						min={0}
						max={100}
						className="h-1 mx-4 rounded-full appearance-none w-44 sm:w-60"
					/>
					<p>3:00</p>
				</div>
			</controls>
			<volume className="items-center justify-center flex-1 hidden sm:flex">
				{volume > 50 ? (
					<i className="-mr-2 fa-solid fa-volume-high"></i>
				) : volume > 0 ? (
					<i className="fa-solid fa-volume-low"></i>
				) : (
					<i className="-mr-1 fa-solid fa-volume-xmark"></i>
				)}
				<input
					type="range"
					min={0}
					max={100}
					className="h-1 ml-4 rounded-full appearance-none"
					value={volume}
					onChange={(e) => {
						setvolume(e.target.value);
					}}
				/>
			</volume>
		</div>
	);
}

export default MusicPlayer;
