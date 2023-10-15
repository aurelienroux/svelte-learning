export function GET() {
	return new Response(
		JSON.stringify({
			api: 'data from foo/api route'
		})
	);
}
