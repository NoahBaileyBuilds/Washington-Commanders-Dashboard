"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "../../components/DashboardLayout";
import PageHeader from "../../components/PageHeader";
import TradeTargetCard from "../../components/TradeTargetCard";

type TradeTarget = {
	name: string;
	position: string;
	currentTeam: string;
	fit: string;
	cost: string;
};

export default function TradesPage() {

	const [tradeTargets, setTradeTargets] = useState<TradeTarget[]>([]);

	/* Form state */
	const [newName, setNewName] = useState("");
	const [newPosition, setNewPosition] = useState("");
	const [newCurrentTeam, setNewCurrentTeam] = useState("");
	const [newFit, setNewFit] = useState("");
	const [newCost, setNewCost] = useState("");

	/* Load trade targets */
	useEffect(() => {

		fetch("http://localhost:8080/api/trade-targets")
			.then((response) => response.json())
			.then((data) => setTradeTargets(data));

	}, []);

	/* Add trade target */
	function addTradeTarget() {

		const newTradeTarget = {
			name: newName,
			position: newPosition,
			currentTeam: newCurrentTeam,
			fit: newFit,
			cost: newCost
		};

		fetch("http://localhost:8080/api/trade-targets", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newTradeTarget)
		})
			.then(() => fetch("http://localhost:8080/api/trade-targets"))
			.then((response) => response.json())
			.then((data) => setTradeTargets(data));

		/* Clear form */
		setNewName("");
		setNewPosition("");
		setNewCurrentTeam("");
		setNewFit("");
		setNewCost("");
	}

	return (
		<DashboardLayout>

			<PageHeader
				title="Trade Targets"
				description="Potential players Washington could target."
			/>

			{/* Add Trade Target Form */}
			<section className="mt-10 rounded-2xl bg-gray-900 p-6 shadow-lg">

				<h2 className="text-2xl font-bold text-yellow-400">
					Add Trade Target
				</h2>

				<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">

					<input
						type="text"
						placeholder="Name"
						value={newName}
						onChange={(event) => setNewName(event.target.value)}
						className="rounded-xl bg-[#5A1414] px-4 py-3 text-white outline-none"
					/>

					<input
						type="text"
						placeholder="Position"
						value={newPosition}
						onChange={(event) => setNewPosition(event.target.value)}
						className="rounded-xl bg-[#5A1414] px-4 py-3 text-white outline-none"
					/>

					<input
						type="text"
						placeholder="Current Team"
						value={newCurrentTeam}
						onChange={(event) => setNewCurrentTeam(event.target.value)}
						className="rounded-xl bg-[#5A1414] px-4 py-3 text-white outline-none"
					/>

					<input
						type="text"
						placeholder="Fit"
						value={newFit}
						onChange={(event) => setNewFit(event.target.value)}
						className="rounded-xl bg-[#5A1414] px-4 py-3 text-white outline-none"
					/>

					<input
						type="text"
						placeholder="Cost"
						value={newCost}
						onChange={(event) => setNewCost(event.target.value)}
						className="rounded-xl bg-[#5A1414] px-4 py-3 text-white outline-none"
					/>

				</div>

				<button
					onClick={addTradeTarget}
					className="mt-6 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
				>
					Add Trade Target
				</button>

			</section>

			{/* Trade Target Cards */}
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