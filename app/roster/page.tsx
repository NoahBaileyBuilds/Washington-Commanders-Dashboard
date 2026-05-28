"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "../../components/DashboardLayout";
import PageHeader from "../../components/PageHeader";
import PlayerCard from "../../components/PlayerCard";

type Player = {
	name: string;
	position: string;
	status?: string;
	jersey?: string;
	headshot?: string;
};

export default function RosterPage() {

	const [players, setPlayers] = useState<Player[]>([]);

	/* Search + Filter State */
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedPosition, setSelectedPosition] = useState("All");

	/* Load players from backend */
	useEffect(() => {

		fetch("http://localhost:8080/api/players")
			.then((response) => response.json())
			.then((data) => setPlayers(data));

	}, []);

	/* Dynamic Position Filters */
	const positionFilters = [
		"All",
		...new Set(players.map((player) => player.position))
	];

	/* Filter Logic */
	const filteredPlayers = players.filter((player) => {

		const matchesPosition =
			selectedPosition === "All" ||
			player.position === selectedPosition;

		const matchesSearch = player.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase());

		return matchesPosition && matchesSearch;
	});

	/* Dynamic Button Styling */
	function getFilterButtonClass(position: string) {

		return selectedPosition === position
			? "rounded-xl bg-yellow-400 px-4 py-2 font-bold text-black"
			: "rounded-xl bg-gray-900 px-4 py-2 font-bold text-white";
	}

	return (
		<DashboardLayout>

			<PageHeader
				title="Roster"
				description="Current Washington Commanders roster preview."
			/>

			{/* Search Bar */}
			<input
				type="text"
				placeholder="Search players..."
				value={searchQuery}
				onChange={(event) => setSearchQuery(event.target.value)}
				className="mt-10 w-full rounded-xl bg-gray-900 px-4 py-3 text-white outline-none ring-2 ring-transparent transition focus:ring-yellow-400"
			/>

			{/* Position Filters */}
			<div className="mt-6 flex flex-wrap gap-4">

				{positionFilters.map((position) => (

					<button
						key={position}
						onClick={() => setSelectedPosition(position)}
						className={getFilterButtonClass(position)}
					>
						{position}
					</button>

				))}

			</div>

			{/* Player Cards */}
			<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

				{filteredPlayers.map((player) => (

					<PlayerCard
						key={player.name}
						name={player.name}
						position={player.position}
						status={player.status ?? "Roster Player"}
						jersey={player.jersey}
						headshot={player.headshot}
					/>

				))}

			</div>

		</DashboardLayout>
	);
}