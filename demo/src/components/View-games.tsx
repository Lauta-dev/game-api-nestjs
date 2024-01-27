import { Link } from "wouter-preact";
import { ViewAllGames } from "@/interface/Game";
import ConsoleSelect from "./Console-select";

function ViewGames({ games }: { games: ViewAllGames[] | undefined }) {
	console.log(games);
	return (
		<section className={"grid grid-cols-3 gap-5"}>
			{games?.map((data) => (
				<div key={data.id} className={"flex flex-col justify-between"}>
					<img
						className={"rounded-xl object-fill"}
						src={data.covers.jpg}
						alt={data.title}
					/>

					<div>
						<p className={"text-green-700"}>
							Precio: <b>{data.price}</b>
						</p>

						<div
							className={`
						flex justify-between gap-3
						max-md:flex max-md:flex-col
						`}
						>
							<Link
								className={
									"text-gray-600 hover:text-black text-balance transition-all font-semibold"
								}
								href={`/game/${data.id}`}
								target={"_blank"}
							>
								{data.title}
							</Link>

							{data.consoleName.short.includes("xbox") && (
								<ConsoleSelect
									className="bg-green-600 hover:bg-green-700"
									href={`/item/console/${data.consoleName.short}`}
								>
									{data.consoleName.public}
								</ConsoleSelect>
							)}
							{data.consoleName.short.includes("ps") && (
								<ConsoleSelect
									className="bg-blue-600 hover:bg-blue-700"
									href={`/item/console/${data.consoleName.short}`}
								>
									{data.consoleName.public}
								</ConsoleSelect>
							)}
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

export default ViewGames;
