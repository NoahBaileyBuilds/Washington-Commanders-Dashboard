"use client";

import { usePathname } from "next/navigation";

export default function Sidebar() {

	const pathname = usePathname();

	function getNavClass(path: string) {
		return pathname === path
			? "rounded-xl bg-yellow-400 px-4 py-2 font-bold text-black"
			: "rounded-xl bg-[#5A1414] px-4 py-2 hover:bg-yellow-400 hover:text-black";
	}

	return (
		<aside className="w-full rounded-2xl bg-gray-900 p-6 shadow-lg lg:w-[250px]">

			{/* Sidebar Branding */}
			<div className="mb-8 border-b border-gray-700 pb-6">

				<h1 className="text-3xl font-bold text-yellow-400">
					Commanders
				</h1>

				<p className="mt-2 text-sm text-gray-400">
					Analytics Dashboard
				</p>

			</div>

			{/* Navigation Links */}
			<nav className="mt-6 flex flex-col gap-4 text-gray-200">

				<a
					href="/"
					className={getNavClass("/")}
				>
					Overview
				</a>

				<a
					href="/roster"
					className={getNavClass("/roster")}
				>
					Roster
				</a>

				<a
					href="/trades"
					className={getNavClass("/trades")}
				>
					Trade Targets
				</a>

				<a
					href="/analytics"
					className={getNavClass("/analytics")}
				>
					Analytics
				</a>

			</nav>

		</aside>
	);
}