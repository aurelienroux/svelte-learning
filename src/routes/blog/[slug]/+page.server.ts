import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
import { posts } from '$lib/data';

export const load = (async ({ params }) => {
	const postData = posts.find((post) => post.slug === params.slug);

	if (!postData) {
		throw error(404);
	}

	return {
		postData
	};
}) satisfies PageServerLoad;
