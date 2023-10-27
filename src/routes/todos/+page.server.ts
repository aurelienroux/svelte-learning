import { fail } from '@sveltejs/kit';
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
	create: async ({ cookies, request }) => {
		const data = await request.formData();

		try {
			db.createTodo(cookies.get('userId'), data.get('description'));
		} catch (error) {
			return fail(422, {
				description: data.get('description'),
				error: error.message
			});
		}
	},

	delete: async ({ cookies, request }) => {
		const data = await request.formData();

		db.deleteTodo(cookies.get('userId'), data.get('id'));
	}
};
