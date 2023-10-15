export async function load(event) {
	return await event.fetch('api/foo').then((data) => data.json());
}
