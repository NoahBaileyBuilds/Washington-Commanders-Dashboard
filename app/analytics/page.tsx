import teamComparison from "../../data/teamComparison";
import PageHeader from "../../components/PageHeader";
import TeamComparisonChart from "../../components/TeamComparisonChart";
import DashboardLayout from "../../components/DashboardLayout";
export default function AnalyticsPage() {
	return (
		<DashboardLayout>
			<PageHeader
				title="Roster"
				description="Current Washington Commanders roster preview."
			/>

			<section className="mt-10">
				<TeamComparisonChart data={teamComparison} />
			</section>
		</DashboardLayout>
	);
}