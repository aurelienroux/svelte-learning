import type { PageServerLoad } from './$types';
import * as db from '$lib/server/database';

export const load = (async ({ cookies }) => {
	const id = cookies.get('userId');

	if (!id) {
		cookies.set('userId', crypto.randomUUID(), { path: '/' });
	}

	return {
		todos: db.getTodos(id) ?? []
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		db.createTodo(cookies.get('userId'), data.get('description'));
	}
};
