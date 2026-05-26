type PlayerCardProps = {
	name: string;
	position: string;
	status: string;
};

export default function PlayerCard({ name, position, status }: PlayerCardProps) {
	return (
		<div className="rounded-2xl bg-gray-900 p-6 shadow-lg">
			<p className="text-sm text-gray-400">
				{position}
			</p>

			<h3 className="mt-2 text-2xl font-bold text-white">
				{name}
			</h3>

			<p className="mt-4 text-yellow-400">
				{status}
			</p>
		</div>
	);
}