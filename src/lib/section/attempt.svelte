<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';

    import { writable } from 'svelte/store';

    let voidRift = writable(0);
    let frontierClash = writable(0);

    const VOID_RIFT_MAX = 3;
    const FRONTIER_CLASH_MAX = 3;

	function reset() {
		voidRift.set(0);
		frontierClash.set(0);
	}
</script>

<div class="item">
	<h1>Attempt</h1>
	<hr />
	<button on:click={reset} style="margin-top: 1rem">Reset</button>
	<table>
		<tr>
			<td>Void Rift</td>
			<td>
                <Button value={voidRift} max={VOID_RIFT_MAX} />
            </td>
		</tr>
		<tr>
			<td>Frontier Clash</td>
			<td>
                <Button value={frontierClash} max={FRONTIER_CLASH_MAX} />
            </td>
		</tr>
	</table>
</div>
