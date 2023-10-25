import { posts } from '$lib/data';

export const load = async () => {
	return {
		summaries: posts.map((post) => ({
			title: post.title,
			slug: post.slug
		}))
	};
};
