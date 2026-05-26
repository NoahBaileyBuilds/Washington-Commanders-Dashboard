type PageHeaderProps = {
	title: string;
	description: string;
};

export default function PageHeader({
	title,
	description
}: PageHeaderProps) {
	return (
		<section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<div>
				<h1 className="text-5xl font-bold text-yellow-400">
					{title}
				</h1>

				<p className="mt-4 text-lg text-gray-200">
					{description}
				</p>
			</div>
		</section>
	);
}