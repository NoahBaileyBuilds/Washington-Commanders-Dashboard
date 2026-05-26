type TradeTargetCardProps = {
	name: string;
	position: string;
	currentTeam: string;
	fit: string;
	cost: string;
};

export default function TradeTargetCard({
	name,
	position,
	currentTeam,
	fit,
	cost
}: TradeTargetCardProps) {
	return (
		<div className="rounded-2xl bg-gray-900 p-6 shadow-lg">
			<p className="text-sm text-gray-400">
				{position} • {currentTeam}
			</p>

			<h3 className="mt-2 text-2xl font-bold text-white">
				{name}
			</h3>

			<p className="mt-4 text-yellow-400">
				Fit: {fit}
			</p>

			<p className="mt-2 text-gray-300">
				Cost: {cost}
			</p>
		</div>
	);
}