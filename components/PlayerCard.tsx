type PlayerCardProps = {
	name: string;
	position: string;
	status: string;
	jersey?: string;
	headshot?: string;
};

export default function PlayerCard({
	name,
	position,
	status,
	jersey,
	headshot
}: PlayerCardProps) {
	return (
		<div className="rounded-2xl bg-gray-900 p-4 shadow-lg">

			<div className="flex items-center gap-4">

				{headshot && (
					<img
						src={headshot}
						alt={name}
						className="rounded-full object-cover"
						style={{ width: "180px", height: "180px" }}
					/>
				)}

				<div className="min-w-0">

					<p className="text-sm text-gray-400">
						{position} {jersey && `#${jersey}`}
					</p>

					<h3 className="truncate text-xl font-bold text-white">
						{name}
					</h3>

					<p className="mt-1 text-sm text-yellow-400">
						{status}
					</p>

				</div>

			</div>

		</div>
	);
}