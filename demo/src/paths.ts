const basePath = "https://game-api-nestjs.vercel.app";

export const paths = {
	getAllGames: basePath,
	generations: `${basePath}/generations`,
	consoles: `${basePath}/consoles`,

	getGameById: (id: number) => `${basePath}/id/${id}`,
	getConsoleOrGeneration: (
		consoleORGeneration: string,
		i: string | number | undefined,
	) => `${basePath}/${consoleORGeneration}/${i}`,
	getGamesWithPagination: ({
		page = 0,
		limit = 10,
	}: { page?: number; limit?: number }) =>
		`${basePath}?limit=${limit}&page=${page}`,
};
