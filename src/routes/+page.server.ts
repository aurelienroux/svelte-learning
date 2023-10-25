import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const visited = cookies.get('visited');

	cookies.set('visited', 'true');

	return {
		visited
	};
}) satisfies PageServerLoad;
