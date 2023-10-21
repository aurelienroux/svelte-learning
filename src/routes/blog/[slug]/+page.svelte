<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<h2>article: {$page.params.slug}</h2>
<h2>article: {$page.data.layout}</h2>
