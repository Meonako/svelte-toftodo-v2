<script lang="ts">
    export let value: number;
    export let max: number;
</script>

<button
    on:click={() => {
        if (value < max) value++
    }}
    on:contextmenu|preventDefault={() => {
        if (value > 0) value--
    }}
    title = "Left click to increment the value; Right click to decrement the value"
>
{value}
</button>
/ {max}