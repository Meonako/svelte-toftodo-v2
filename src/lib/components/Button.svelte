<script lang="ts">
	import type { Writable } from "svelte/store";

    export let value: Writable<number>;
    export let max: number;
</script>

<button
    on:click={() => {
        if ($value < max) $value++
    }}
    on:contextmenu|preventDefault={() => {
        if ($value > 0) $value--
    }}
    title = "Left click to increment the value; Right click to decrement the value"
>
{$value}
</button>
/ {max}