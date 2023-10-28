import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const randomNumber = Math.floor(Math.random() * 6) + 1;

	return new Response(randomNumber, {
		header: {
			'Content-Type': 'application/json'
		}
	});
};
