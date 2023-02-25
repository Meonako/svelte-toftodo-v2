<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Modal from '$lib/components/ConfirmModal.svelte';

	import { weekly, weeklyMax } from '$lib/store/weekly';
	import type { Weekly } from '$lib/store/weekly';
	import { browser } from '$app/environment';
	import { reset } from '$lib/utils/reset';

	let showModal = false;
	let firstReset = false;

	$: if ($weekly) {
		Time();
		$weekly.Time = new Date();
	}

	$: if (firstReset) {
		weekly.set(reset($weekly));
		firstReset = false;
	}

	function Time() {
		if (firstReset) return;
		// const lastUpdate = new Date(2023, 0, 22, 3, 59, 59);
		const lastUpdate = $weekly.Time;
		const resetTime = new Date();

		resetTime.setDate(resetTime.getDate() - resetTime.getDay() + 1);
		resetTime.setHours(4, 0, 0, 0);

		console.log("Weekly LastU Time: ", lastUpdate)
		console.log("Weekly Reset Time: ", resetTime)

		if (lastUpdate < resetTime) {
			if (!browser) return;
			showModal = true;
		}
	}
</script>

{#if showModal}
	<Modal on:close={() => (showModal = false)} bind:value={firstReset}>
		<h1 slot="header">WEEKLY</h1>

		<h2>
			Do you want to reset <strong style="color: red; text-decoration: underline;">WEEKLY</strong>?
		</h2>
	</Modal>
{/if}
<h1>Weekly</h1>
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
		<td>Dream Machine</td>
		<td>
			<Button bind:value={$weekly.DreamMachine} max={weeklyMax.DreamMachine} />
		</td>
	</tr>
	<tr>
		<td>Raid</td>
		<td>
			<Button bind:value={$weekly.Raid} max={weeklyMax.Raid} />
		</td>
	</tr>
	<tr>
		<td>Sequential Phantasm</td>
		<td>
			<Button bind:value={$weekly.SequentialPhantasm} max={weeklyMax.SequentialPhantasm} />
		</td>
	</tr>
	<tr>
		<td>Crew Quest</td>
		<td>
			<Button bind:value={$weekly.CrewQuest} max={weeklyMax.CrewQuest} />
		</td>
	</tr>
	<tr>
		<td>M-SEC Quest</td>
		<td>
			<Button bind:value={$weekly.MSECQuest} max={weeklyMax.MSECQuest} />
		</td>
	</tr>
	<tr>
		<td>Void Rift</td>
		<td>
			<Checkbox bind:value={$weekly.VoidRift} text="Clear" />
		</td>
	</tr>
	<tr>
		<td>Frontier Clash</td>
		<td>
			<Checkbox bind:value={$weekly.FrontierClash} text="Clear" />
		</td>
	</tr>
	<tr>
		<td>Artificial Island</td>
		<td>
			<Checkbox bind:value={$weekly.ArtificialIsland.Monster} text="Monster Cleared" />
			<hr>
			<Checkbox bind:value={$weekly.ArtificialIsland.Metal} text="Metal Shop" />
			<hr>
			<Checkbox bind:value={$weekly.ArtificialIsland.Fiber} text="Fiber Shop" />
			<hr>
			<Checkbox bind:value={$weekly.ArtificialIsland.Energy} text="Energy Shop" />
			<hr>
			<Checkbox bind:value={$weekly.ArtificialIsland.Supply} text="Supply Shop" />
			<hr>
			<Checkbox bind:value={$weekly.ArtificialIsland.Accessory} text="Accessory Shop" />
		</td>
	</tr>
</table>
