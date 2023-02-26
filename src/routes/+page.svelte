<script lang="ts">
	import Daily from '$lib/section/Daily.svelte';
	import Weekly from '$lib/section/Weekly.svelte';
	import Monthly from '$lib/section/Monthly.svelte';

	function transformScroll(event: WheelEvent) {
		if (!event.deltaY) return;
		if (!event.currentTarget) return;
		const target = event.currentTarget as HTMLElement;
		sideScroll(target, event.deltaY > 0 ? 'right' : 'left', 10, event.deltaY, 7);
	}
	function sideScroll(
		element: HTMLElement,
		direction: 'left' | 'right',
		speed: number,
		distance: number,
		step: number
	) {
		let scrollAmount = 0;
		let slideTimer = setInterval(() => {
			if (direction == 'left') {
				element.scrollLeft -= step;
			} else {
				element.scrollLeft += step;
			}
			scrollAmount += step;
			if (scrollAmount >= Math.abs(distance)) {
				clearInterval(slideTimer);
			}
		}, speed);
	}
</script>

<main on:wheel={transformScroll}>
	<div class="item"><Daily/></div>
	<div class="item"><Weekly/></div>
	<div class="item"><Monthly/></div>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 0 2.5rem .3rem 2.5rem;
		margin: 1rem 2.5rem 0 2.5rem;
		border: 1px solid white;
		backdrop-filter: blur(5px);
		white-space: nowrap;
		overflow-x: scroll;
		overflow-y: hidden;
		height: 100%;

		.item {
			display: inline-block;
			max-width: 50%;
		}
	}
</style>
