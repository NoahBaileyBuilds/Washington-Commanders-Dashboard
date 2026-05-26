"use client";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend
} from "recharts";

type TeamComparisonChartProps = {
	data: {
		category: string;
		commanders: number;
		nfcEastAvg: number;
	}[];
};

export default function TeamComparisonChart({
	data
}: TeamComparisonChartProps) {
	return (
		<div className="rounded-2xl bg-gray-900 p-6 shadow-lg">

			<h2 className="mb-6 text-3xl font-bold text-yellow-400">
				NFC East Comparison
			</h2>

			<div className="h-[350px]">

				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={data}>

						<XAxis dataKey="category" />

						<YAxis />

						<Tooltip />

						<Legend />

						<Bar
							dataKey="commanders"
							fill="#FFB612"
							radius={[6, 6, 0, 0]}
						/>

						<Bar
							dataKey="nfcEastAvg"
							fill="#8884d8"
							radius={[6, 6, 0, 0]}
						/>

					</BarChart>
				</ResponsiveContainer>

			</div>

		</div>
	);
}