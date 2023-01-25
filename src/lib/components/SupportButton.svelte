<script lang="ts">
    export let value: number;
    export let max: number;
    export let step: number;
</script>

<button
    on:click={() => {
        let newValue = value + step;
        if (newValue > max) {
            value = max
        } else {
            value = newValue
        }
    }}
    on:contextmenu|preventDefault={() => {
        let newValue = value - step;
        if (newValue < 0) {
            value = 0
        } else {
            value = newValue
        }
    }}
>
{step}
</button>