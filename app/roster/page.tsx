"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "../../components/DashboardLayout";
import PageHeader from "../../components/PageHeader";
import PlayerCard from "../../components/PlayerCard";

type Player = {
	name: string;
	position: string;
	status?: string;
};

export default function RosterPage() {
	const [players, setPlayers] = useState<Player[]>([]);

	useEffect(() => {
		fetch("http://localhost:8080/api/players")
			.then((response) => response.json())
			.then((data) => setPlayers(data));
	}, []);

	return (
		<DashboardLayout>
			<PageHeader
				title="Roster"
				description="Current Washington Commanders roster preview."
			/>

			<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{players.map((player) => (
					<PlayerCard
						key={player.name}
						name={player.name}
						position={player.position}
						status={player.status ?? "Roster Player"}
					/>
				))}
			</div>
		</DashboardLayout>
	);
}