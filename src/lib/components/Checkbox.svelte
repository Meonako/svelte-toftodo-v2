<script lang="ts">
	export let value: boolean;
	export let text: string;
</script>

<label title={text} class="form-control">
	<input type="checkbox" bind:checked={value} />
	{text}
</label>
