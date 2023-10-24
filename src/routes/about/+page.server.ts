export async function load(event) {
	// eslint-disable-next-line no-console
	console.log(`about page.server.ts runs`);
	return await event.fetch('api/foo').then((data) => data.json());
}
