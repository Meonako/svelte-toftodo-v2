<script lang="ts">
    export let value: Writable<number>;
    export let step: number;

	import type { Writable } from "svelte/store";
</script>

<button
    on:click={() => $value += step}
    on:contextmenu|preventDefault={() => $value -= step}
>
{step}
</button>