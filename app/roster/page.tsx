import players from "../../data/players";
import PageHeader from "../../components/PageHeader";
import PlayerCard from "../../components/PlayerCard";
import DashboardLayout from "../../components/DashboardLayout";
export default function RosterPage() {
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
						status={player.status}
					/>
				))}
			</div>
		</DashboardLayout>
	);
}