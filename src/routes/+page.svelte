<script lang="ts">
	import Daily from '$lib/section/Daily.svelte';
	import Weekly from '$lib/section/Weekly.svelte';
	import Monthly from '$lib/section/Monthly.svelte';
</script>

<main>
	<div class="item"><Daily/></div>
	<div class="item"><Weekly/></div>
	<div class="item"><Monthly/></div>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 3rem 5rem 4rem 5rem;
		// border: 1px solid white;
		backdrop-filter: blur(5px);
		white-space: nowrap;
		overflow-x: scroll;
		overflow-y: hidden;
		height: 100%;

		.item {
			display: inline-block;
			max-width: 50%;
		}
	}
</style>
