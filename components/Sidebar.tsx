export default function Sidebar() {
	return (
		<aside className="rounded-2xl bg-gray-900 p-6 shadow-lg">
			<h2 className="text-2xl font-bold text-yellow-400">
				Menu
			</h2>

			<nav className="mt-6 flex flex-col gap-4 text-gray-200">
				<a href="#">Overview</a>
				<a href="#">Roster</a>
				<a href="#">Rankings</a>
				<a href="#">Trade Targets</a>
			</nav>
		</aside>
	);
}