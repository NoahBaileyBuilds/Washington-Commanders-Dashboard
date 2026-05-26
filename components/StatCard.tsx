type StatCardProps = {
	title: string;
	value: string;
};

export default function StatCard({ title, value }: StatCardProps) {
	return (
		<div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
			<h2 className="text-2xl font-bold">
				{title}
			</h2>

			<p className="text-5xl mt-4 text-yellow-400">
				{value}
			</p>
		</div>
	);
}