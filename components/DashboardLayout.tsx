"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

type DashboardLayoutProps = {
	children: React.ReactNode;
};

export default function DashboardLayout({
	children
}: DashboardLayoutProps) {

	/* Controls sidebar visibility */
	const [showSidebar, setShowSidebar] = useState(true);

	return (
		<main className="min-h-screen bg-[#5A1414] text-white p-8">

			{/* Sidebar Toggle Button */}
			<button
				onClick={() => setShowSidebar(!showSidebar)}
				className="mb-6 rounded-xl bg-yellow-400 px-4 py-2 font-bold text-black"
			>
				{showSidebar ? "Hide Menu" : "Show Menu"}
			</button>

			{/* Dynamic Dashboard Layout Grid */}
			<div
				className={`grid grid-cols-1 gap-8 ${
					showSidebar
						? "lg:grid-cols-[250px_1fr]"
						: "lg:grid-cols-1"
				}`}
			>

				{/* Sidebar */}
				{showSidebar && <Sidebar />}

				{/* Main Page Content */}
				<div>
					{children}
				</div>

			</div>

		</main>
	);
}