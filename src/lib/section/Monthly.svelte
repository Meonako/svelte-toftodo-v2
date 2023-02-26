<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Modal from '$lib/components/ConfirmModal.svelte';

	import { browser } from '$app/environment';

	import { monthly, monthlyMax } from '$lib/store/monthly';
	import { reset } from '$lib/utils/reset';

	let showModal = false;
	let firstReset = false;

	$: if ($monthly) {
		Time();
		$monthly.Time = new Date();
	}

	$: if (firstReset) {
		monthly.set(reset($monthly));
		firstReset = false;
	}

	function Time() {
		if (firstReset) return;
		if (!browser) return;
		// const lastUpdate = new Date(2023, 0, 22, 3, 59, 59);
		const lastUpdate = $monthly.Time;
		const resetTime = new Date();
		resetTime.setDate(0);
		resetTime.setHours(4, 0, 0, 0);

		console.log("Monthly LastU Time: ", lastUpdate)
		console.log("Monthly Reset Time: ", resetTime)

		if (lastUpdate < resetTime) {
			showModal = true;
		}
	}
</script>

{#if showModal}
	<Modal on:close={() => (showModal = false)} bind:value={firstReset}>
		<h1 slot="header">MONTHLY</h1>

		<h2>
			Do you want to reset <strong style="color: red; text-decoration: underline;">MONTHLY</strong>?
		</h2>
	</Modal>
{/if}
<h1>Monthly</h1>
<hr />
<button
	on:click={() => {
		firstReset = false;
		showModal = true;
	}}
	class="resetBtn"
	style="margin-top: 1rem"
>
	Reset
</button>
<table>
	<tr>
		<td>Void Abyss</td>
		<td>
			<Button bind:value={$monthly.VoidAbyss} max={monthlyMax.VoidAbyss} />
		</td>
	</tr>
	<tr>
		<td>Apex League</td>
		<td>
			<Checkbox bind:value={$monthly.ApexLeague} text="Done" />
		</td>
	</tr>
	<tr>
		<td>Artificial Island Shop</td>
		<td>
			<Checkbox bind:value={$monthly.ArtificialIsland.Metal} text="Metal" />
			<hr />
			<Checkbox bind:value={$monthly.ArtificialIsland.Fiber} text="Fiber" />
			<hr />
			<Checkbox bind:value={$monthly.ArtificialIsland.Energy} text="Energy" />
			<hr />
			<Checkbox bind:value={$monthly.ArtificialIsland.Supply} text="Supply" />
		</td>
	</tr>
</table>
