/*
  Here is the wonderful start to the Dashboard Webpage.
  The chosen themes and colors are subject to change
  but will be centered around Commanders colors.

  We are using JSX.

  It will display:
  - Team ranking going into the season
  - Current roster
  - Potential trade targets
*/

import teamStats from "../data/teamStats";
import players from "../data/players";
import StatCard from "../components/StatCard";
import Sidebar from "../components/Sidebar";
import PlayerCard from "../components/PlayerCard";
import tradeTargets from "../data/tradeTargets";
import TradeTargetCard from "../components/TradeTargetCard";
import teamComparison from "../data/teamComparison";
import TeamComparisonChart from "../components/TeamComparisonChart";

/*
  This is what you see when you open the link to the page.
  Shows the title, description, sidebar,
  and dynamically generated stat cards.
*/

export default function Home() {
    return (
        <main className="min-h-screen bg-[#5A1414] text-white p-8">

            <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">

                {/* Sidebar Navigation */}
                <Sidebar />

                {/* Main Dashboard Content */}
                <div>

                    {/* Dashboard Header */}
                    <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                        <div>
                            <h1 className="text-5xl font-bold text-yellow-400">
                                Washington Commanders Dashboard
                            </h1>

                            <p className="mt-4 text-lg text-gray-200">
                                Team rankings, roster analysis, and trade targets.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-gray-900 px-6 py-4 shadow-lg">
                            <p className="text-sm text-gray-400">
                                Season Outlook
                            </p>

                            <p className="text-2xl font-bold text-yellow-400">
                                2026
                            </p>
                        </div>

                    </section>

                    {/* Dashboard Stat Cards */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {teamStats.map((stat) => (
                            <StatCard
                                key={stat.title}
                                title={stat.title}
                                value={stat.value}
                            />
                        ))}

                    </div>
                    {/* Team Comparison Chart */}
                    <section className="mt-10">
                        <TeamComparisonChart data={teamComparison} />
                    </section>
                    {/* Roster Preview */}
                    <section className="mt-10">
                        <h2 className="text-3xl font-bold text-yellow-400">
                            Roster Preview
                        </h2>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {players.map((player) => (
                                <PlayerCard
                                    key={player.name}
                                    name={player.name}
                                    position={player.position}
                                    status={player.status}
                                />
                            ))}
                        </div>
                    </section>
                    {/* Trade Targets */}
                    <section className="mt-10">
                        <h2 className="text-3xl font-bold text-yellow-400">
                            Trade Targets
                        </h2>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    </section>

                </div>

            </div>

        </main>
    );
}