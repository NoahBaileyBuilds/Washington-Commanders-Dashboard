import tradeTargets from "../../data/tradeTargets";
import PageHeader from "../../components/PageHeader";
import TradeTargetCard from "../../components/TradeTargetCard";
import DashboardLayout from "../../components/DashboardLayout";
export default function TradesPage() {
	return (
		<DashboardLayout>
			<PageHeader
				title="Roster"
				description="Current Washington Commanders roster preview."
			/>

			<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
		</DashboardLayout>
	);
}