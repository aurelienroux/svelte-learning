<script lang="ts">
	let number;

	async function roll() {
		const response = await fetch('./roll');

		number = await response.json();
	}
</script>

<main>
	<h1>Roll dice</h1>
	<button on:click={roll}>Roll the dice</button>

	{#if number}
		<p>You rolled a {number}</p>
	{/if}
</main>
