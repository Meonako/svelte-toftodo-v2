<script lang="ts">
	import Checkbox from '$lib/components/Checkbox.svelte';

	import { writable } from 'svelte/store';

	let energyDust = writable(false);
	let spacetime = writable(false);
	let support = writable(false);

	let ai_metal = writable(false);
    let ai_fiber = writable(false);
    let ai_energy = writable(false);
    let ai_supply = writable(false);
    let ai_accessory = writable(false);

	function reset() {
		energyDust.set(false);
		spacetime.set(false);
		support.set(false);
        ai_metal.set(false);
        ai_fiber.set(false);
        ai_energy.set(false);
        ai_supply.set(false);
        ai_accessory.set(false);
	}
</script>

<div class="item">
	<h1>Shop</h1>
	<hr />
	<button on:click={reset} style="margin-top: 1rem">Reset</button>
	<table>
		<tr>
			<td>Energy Dust</td>
			<td>
                <Checkbox value={energyDust} text="Done" />
            </td>
		</tr>
		<tr>
			<td>Spacetime</td>
			<td>
                <Checkbox value={spacetime} text="Done" />
            </td>
		</tr>
		<tr>
			<td>Support Points</td>
			<td>
                <Checkbox value={support} text="Done" />
            </td>
		</tr>
		<tr>
			<td>Artificial Island</td>
			<td>
                <Checkbox value={ai_metal} text="Metal" />
                <hr>
                <Checkbox value={ai_fiber} text="Fiber" />
                <hr>
                <Checkbox value={ai_energy} text="Energy" />
                <hr>
                <Checkbox value={ai_supply} text="Supply" />
                <hr>
                <Checkbox value={ai_accessory} text="Accessory" />
            </td>
		</tr>
	</table>
</div>
