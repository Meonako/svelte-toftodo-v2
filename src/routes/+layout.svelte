<script>
    import "$lib/style/style.scss"
    import Background from "$lib/components/Background.svelte";
</script>

<Background />
<slot>
    <p>Unexpected Error</p>
</slot>