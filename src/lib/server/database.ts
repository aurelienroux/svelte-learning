const db = new Map();

export function getTodos(userId) {
	if (!db.get(userId)) {
		db.set(userId, [
			{
				id: crypto.randomUUID(),
				description: 'learn Svelte',
				done: false
			}
		]);
	}

	return db.get(userId);
}

export function createTodo(userId, description) {
	if (description === '') {
		throw new Error('todos must have a description');
	}

	const todos = db.get(userId);

	if (todos.find((todo) => todo.description === description)) {
		throw new Error('todo must be unique');
	}

	todos.push({
		id: crypto.randomUUID(),
		description: description,
		done: false
	});

	return db;
}

export function deleteTodo(userid, todoid) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}
