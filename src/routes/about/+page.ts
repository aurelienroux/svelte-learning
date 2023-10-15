export async function load(event) {
	const { api } = await event.fetch('api/foo').then((data) => data.json());

	return {
		aboutpage: 'data from page.ts',
		api
	};
}
