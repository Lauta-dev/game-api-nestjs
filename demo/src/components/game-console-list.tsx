import { useParams } from "wouter-preact";

import ViewGames from "./View-games";
import { paths } from "@/paths";
import Loading from "./Loading";
import { meta } from "@/meta";
import useFetch from "@/hook/Fetch";
function GameConsoleInfo() {
	// consola, generation
	// Selected: puede recibir "console" o "generation"
	// i: puede recibir un numero: Que es el id de la generacion o un string: El nombre de la consola (ps1, ps2, xbox, etc)
	const { selected, i } = useParams();
	const fetchUrl =
		selected === "console"
			? paths.getConsoleOrGeneration(selected, i)
			: selected === "generation"
			  ? paths.getConsoleOrGeneration(selected, i)
			  : "";

	const { status, loading, data, error } = useFetch({ url: fetchUrl });

	meta({
		title: `${selected}: ${i?.toUpperCase()}`,
	});

	return (
		<>
			{status && status}
			{error && "Error"}
			{!loading && <Loading />}
			{loading && !error && <ViewGames games={data} />}
		</>
	);
}

export default GameConsoleInfo;
