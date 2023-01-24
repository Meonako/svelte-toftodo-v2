<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import SupportButton from '$lib/components/SupportButton.svelte';

    import { writable } from 'svelte/store';

	let bounty = writable(0);
	let training = writable(0);
	let mirroria = writable(0);
	let support = writable(0);
	let artificial_island_resource = writable(false);
	let gift_black_market = writable(false);
	let gift_cetus_island = writable(false);

	const BOUNTY_MAX = 4;
	const TRAINING_MAX = 2;
	const MIRRORIA_MAX = 8;
	const SUPPORT_MAX = 1500;

    $: if ($support > SUPPORT_MAX) {
        support.set(SUPPORT_MAX)
    } else if ($support < 0 || $support == null || isNaN($support)) {
        support.set(0)
    }

	function reset() {
		bounty.set(0);
		training.set(0);
		mirroria.set(0);
		support.set(0);
		artificial_island_resource.set(false);
		gift_black_market.set(false);
		gift_cetus_island.set(false);
	}
</script>

<div class="item">
	<h1>Daily</h1>
	<hr />
	<button on:click={reset} style="margin-top: 1rem">Reset</button>
	<table>
		<tr>
			<td>Bounty</td>
			<td>
                <Button value={bounty} max={BOUNTY_MAX} />
            </td>
		</tr>
		<tr>
			<td>Mirroria Fun Zone</td>
			<td>
                <Button value={mirroria} max={MIRRORIA_MAX} />
            </td>
		</tr>
		<tr>
			<td>Training</td>
			<td>
                <Button value={training} max={TRAINING_MAX} />
            </td>
		</tr>
		<tr>
			<td>Artificial Island Resource</td>
			<td>
                <Checkbox value={artificial_island_resource} text="Claim" />
            </td>
		</tr>
		<tr>
			<td>Gift</td>
			<td>
				<Checkbox value={gift_black_market} text="Banges: Black Market" />
				<hr />
				<Checkbox value={gift_cetus_island} text="Navia: Cetus Island" />
			</td>
		</tr>
		<tr>
			<td>Support</td>
			<td>
				<input type="number" bind:value={$support} />
				<hr />
				<SupportButton value={support} step={100} />
				<SupportButton value={support} step={150} />
				<SupportButton value={support} step={375} />
			</td>
		</tr>
	</table>
</div>
