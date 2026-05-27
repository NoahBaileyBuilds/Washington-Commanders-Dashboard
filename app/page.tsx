"use client";

/*
  Here is the wonderful start to the Dashboard Webpage.
  The chosen themes and colors are subject to change
  but will be centered around Commanders colors.

  We are using JSX.

  It will display:
  - Team ranking going into the season
  - Current roster
  - Potential trade targets
*/

import { useEffect, useState } from "react";

import teamStats from "../data/teamStats";
import tradeTargets from "../data/tradeTargets";
import teamComparison from "../data/teamComparison";

import StatCard from "../components/StatCard";
import PlayerCard from "../components/PlayerCard";
import TradeTargetCard from "../components/TradeTargetCard";
import TeamComparisonChart from "../components/TeamComparisonChart";
import PageHeader from "../components/PageHeader";
import DashboardLayout from "../components/DashboardLayout";

/*
  This is what you see when you open the link to the page.
  Shows the title, description,
  and dynamically generated dashboard content.
*/
type Player = {
	name: string;
	position: string;
};
export default function Home() {

	/* Toggle Trade Targets */
	const [showTrades, setShowTrades] = useState(true);

	const [players, setPlayers] = useState<Player[]>([]);

	/* Current selected roster filter */
	const [selectedPosition, setSelectedPosition] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {

	fetch("http://localhost:8080/api/players")
		.then((response) => response.json())
		.then((data) => setPlayers(data));

	}, []);

	/* Dynamically filter roster players */
	const filteredPlayers = players.filter((player) => {

		const matchesPosition =
			selectedPosition === "All" ||
			player.position === selectedPosition;

		const matchesSearch =
			player.name.toLowerCase().includes(
				searchQuery.toLowerCase()
			);

		return matchesPosition && matchesSearch;

	});

	/* Automatically generate filter buttons from roster data */
	const positionFilters = [
		"All",
		...new Set(players.map((player) => player.position))
	];

	/* Dynamic button styling */
	function getFilterButtonClass(position: string) {
		return selectedPosition === position
			? "rounded-xl bg-yellow-400 px-4 py-2 font-bold text-black"
			: "rounded-xl bg-gray-900 px-4 py-2 font-bold text-white";
	}

	return (
		<DashboardLayout>

			{/* Dashboard Header */}
			<section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

				<PageHeader
					title="Washington Commanders Dashboard"
					description="Team rankings, roster analysis, and trade targets."
				/>

				<div className="rounded-2xl bg-gray-900 px-6 py-4 shadow-lg">
					<p className="text-sm text-gray-400">
						Season Outlook
					</p>

					<p className="text-2xl font-bold text-yellow-400">
						2026
					</p>
				</div>

			</section>

			{/* Dashboard Stat Cards */}
			<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

				{teamStats.map((stat) => (
					<StatCard
						key={stat.title}
						title={stat.title}
						value={stat.value}
					/>
				))}

			</div>

			{/* Team Comparison Chart */}
			<section className="mt-10">
				<TeamComparisonChart data={teamComparison} />
			</section>

			{/* Roster Preview */}
			<section className="mt-10">

				<h2 className="text-3xl font-bold text-yellow-400">
					Roster Preview
				</h2>
				<input
					type="text"
					placeholder="Search players..."
					value={searchQuery}
					onChange={(event) => setSearchQuery(event.target.value)}
					className="mt-6 w-full rounded-xl bg-gray-900 px-4 py-3 text-white outline-none ring-2 ring-transparent transition focus:ring-yellow-400"
				/>
				{/* Dynamic Position Filters */}
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

				{/* Filtered Player Cards */}
				{filteredPlayers.length > 0 ? (
				filteredPlayers.map((player) => (
					<PlayerCard
						key={player.name}
						name={player.name}
						position={player.position}
						status={player.status}
					/>
				))

			) : (

				<div className="rounded-2xl bg-gray-900 p-6 shadow-lg">
					<p className="text-lg text-gray-300">
						No matching players found.
					</p>
				</div>

			)}

			</section>

			{/* Toggle Trade Targets Button */}
			<button
				onClick={() => setShowTrades(!showTrades)}
				className="mt-10 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
			>
				Toggle Trade Targets
			</button>

			{/* Trade Targets */}
			{showTrades && (

				<section className="mt-10">

					<h2 className="text-3xl font-bold text-yellow-400">
						Trade Targets
					</h2>

					<div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

						{tradeTargets.map((target) => (
							<TradeTargetCard
								key={target.name + target.position}
								name={target.name}
								position={target.position}
								currentTeam={target.currentTeam}
								fit={target.fit}
								cost={target.cost}
							/>
						))}

					</div>

				</section>

			)}

		</DashboardLayout>
	);
}