<script lang="ts">
    import Daily from "$lib/section/daily.svelte";
    import Weekly from "$lib/section/weekly.svelte";
    import Attempt from "$lib/section/attempt.svelte";
    import Shop from "$lib/section/shop.svelte";

    function transformScroll(event: WheelEvent) {
        if (!event.deltaY) return;

        if (!event.currentTarget) return;

        const target = event.currentTarget as HTMLElement;

        sideScroll(target, event.deltaY > 0 ? 'right' : 'left', 10, event.deltaY, 7);
    }

    function sideScroll(element: HTMLElement, direction: 'left' | 'right', speed: number, distance: number, step: number) {
        let scrollAmount = 0;
        let slideTimer = setInterval(() => {
            if(direction == 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;

            if(scrollAmount >= Math.abs(distance)){
                clearInterval(slideTimer);
            }
        }, speed);
    }
</script>

<main
    on:wheel={transformScroll}
>
    <Daily />
    <Weekly />
    <Attempt />
    <Shop />
</main>

<style lang="scss">
    main {
        top: 50%;
        transform: translateY(3%);
        text-align: center;
        padding: 3rem 5rem 10rem 5rem;
        margin: 0 1rem;
        border: 1px solid white;
        backdrop-filter: blur(5px);
        white-space: nowrap;
        overflow: auto;
        height: 100%;
    }
    
</style>