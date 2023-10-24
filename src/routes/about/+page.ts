export async function load(event) {
	const { api } = await event.fetch('api/foo').then((data) => data.json());

	// eslint-disable-next-line no-console
	console.log(`about page.ts runs`);

	return {
		aboutpage: 'data from about page.ts',
		api
	};
}
