import Sidebar from "./Sidebar";

type DashboardLayoutProps = {
	children: React.ReactNode;
};

export default function DashboardLayout({
	children
}: DashboardLayoutProps) {
	return (
		<main className="min-h-screen bg-[#5A1414] text-white p-8">

			<div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">

				<Sidebar />

				<div>
					{children}
				</div>

			</div>

		</main>
	);
}