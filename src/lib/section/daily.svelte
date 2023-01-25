<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import SupportButton from '$lib/components/SupportButton.svelte';
	import Modal from '$lib/components/ConfirmModal.svelte';

	import { daily, dailyMax } from '$lib/store/daily';
	import type { Daily } from '$lib/store/daily';
	import { browser } from '$app/environment';
	import { reset } from '$lib/utils/reset';

	let showModal = false;
	let firstReset = false;

	$: if ($daily.SupportPoint > dailyMax.SupportPoint) {
		$daily.SupportPoint = dailyMax.SupportPoint;
	} else if ($daily.SupportPoint < 0 || $daily.SupportPoint == null || isNaN($daily.SupportPoint)) {
		$daily.SupportPoint = 0;
	}

	$: if ($daily) {
		Time();
		$daily.Time = new Date();
	}

	$: if (firstReset) daily.set(reset($daily));

	function Time() {
		if (firstReset) return;
		// const lastUpdate = new Date(2023, 0, 22, 3, 59, 59);
		const lastUpdate = $daily.Time;
		const resetTime = new Date();
		resetTime.setHours(4, 0, 0, 0);

		if (lastUpdate < resetTime) {
			if (!browser) return;
			showModal = true;
		}
	}
</script>

{#if showModal}
	<Modal on:close={() => (showModal = false)} bind:value={firstReset}>
		<h1 slot="header">DAILY</h1>

		<h2>
			Do you want to reset <strong style="color: red; text-decoration: underline;">DAILY</strong>?
		</h2>
	</Modal>
{/if}
<h1>Daily</h1>
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
		<td>Bounty</td>
		<td>
			<Button bind:value={$daily.Bounty} max={dailyMax.Bounty} />
		</td>
	</tr>
	<tr>
		<td>Mirroria Fun Zone</td>
		<td>
			<Button bind:value={$daily.MirroriaFZ} max={dailyMax.MirroriaFZ} />
		</td>
	</tr>
	<tr>
		<td>Training</td>
		<td>
			<Button bind:value={$daily.Training} max={dailyMax.Training} />
		</td>
	</tr>
	<tr>
		<td>Artificial Island Resource</td>
		<td>
			<Checkbox bind:value={$daily.AIResouce} text="Claim" />
		</td>
	</tr>
	<tr>
		<td>Gift</td>
		<td>
			<Checkbox bind:value={$daily.GiftBlackMarket} text="Banges: Black Market" />
			<hr />
			<Checkbox bind:value={$daily.GiftCetusIsland} text="Navia: Cetus Island" />
		</td>
	</tr>
	<tr>
		<td>Support</td>
		<td>
			<input type="number" bind:value={$daily.SupportPoint} />
			<hr />
			<SupportButton bind:value={$daily.SupportPoint} max={dailyMax.SupportPoint} step={100} />
			<SupportButton bind:value={$daily.SupportPoint} max={dailyMax.SupportPoint} step={150} />
			<SupportButton bind:value={$daily.SupportPoint} max={dailyMax.SupportPoint} step={375} />
		</td>
	</tr>
</table>
