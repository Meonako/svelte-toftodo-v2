<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';

    import { writable } from 'svelte/store';

	let dream = writable(0);
	let raid = writable(0);
	let seqPhan = writable(0);
	let crew = writable(0);
	let msecQuest = writable(0);
	let artificial_island_monster = writable(false);

	const DREAM_MAX = 7;
    const RAID_MAX = 3;
    const SEQ_PHAN_MAX = 3;
    const CREW_QUEST_MAX = 4;
    const MSEC_QUEST_MAX = 3;

	function reset() {
		dream.set(0);
		raid.set(0);
		seqPhan.set(0);
		crew.set(0);
		msecQuest.set(0);
		artificial_island_monster.set(false);
	}
</script>

<div class="item">
	<h1>Weekly</h1>
	<hr />
	<button on:click={reset} style="margin-top: 1rem">Reset</button>
	<table>
		<tr>
			<td>Dream Machine</td>
			<td>
                <Button value={dream} max={DREAM_MAX} />
            </td>
		</tr>
		<tr>
			<td>Raid</td>
			<td>
                <Button value={raid} max={RAID_MAX} />
            </td>
		</tr>
		<tr>
			<td>Sequential Phantasm</td>
			<td>
                <Button value={seqPhan} max={SEQ_PHAN_MAX} />
            </td>
		</tr>
		<tr>
			<td>Crew Quest</td>
			<td>
                <Button value={crew} max={CREW_QUEST_MAX} />
            </td>
		</tr>
		<tr>
			<td>M-SEC Quest</td>
			<td>
                <Button value={msecQuest} max={MSEC_QUEST_MAX} />
            </td>
		</tr>
		<tr>
			<td>Artificial Island Monster</td>
			<td>
                <Checkbox value={artificial_island_monster} text="Clear" />
            </td>
		</tr>
	</table>
</div>
