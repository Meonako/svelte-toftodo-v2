<script lang="js">
	// @ts-nocheck

	export let value = false;

	import Background from '$lib/assets/modal.png';

	import { createEventDispatcher, onDestroy } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = (e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" on:click={close} on:keydown={handle_keydown} transition:fade />

<div
	class="modal"
	role="dialog"
	aria-modal="true"
	in:fly={{ y: -500 }}
	out:fly={{ y: 500 }}
	bind:this={modal}
>
	<div>
		<slot name="header" />
		<hr />
		<slot />
		<hr />

		<!-- svelte-ignore a11y-autofocus -->
		<button
			autofocus
			id="modal-confirm"
			on:click={() => {
				value = true;
				close();
			}}
		>
			Confirm
		</button>
		<button
			id="modal-cancel"
			on:click={() => {
				value = false;
				close();
			}}
		>
			Cancel
		</button>
	</div>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}

	.modal {
		position: fixed;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		min-width: 832px;
		max-width: 32em;
		min-height: 512px;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%, -50%);
		padding: 1em;
		background: url(/modal.png) no-repeat;
		background-size: cover;
		border-radius: 2px;
		box-shadow: 0 0 10px 2px #d8d8d8, 0 0 20px 2px #d8d8d8, 0 0 30px 2px #d8d8d8,
			0 0 40px 2px hsl(350, 100%, 50%), 0 0 70px 2px hsl(350, 100%, 50%),
			0 0 80px 2px hsl(350, 100%, 50%);
		box-shadow: inset 0 0 10px 2px #d8d8d8, 0 0 20px 2px #d8d8d8, 0 0 30px 2px #d8d8d8,
			0 0 40px 2px hsl(350, 100%, 50%), 0 0 70px 2px hsl(350, 100%, 50%),
			0 0 80px 2px hsl(350, 100%, 50%);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		display: inline-block;
		border: none;
	}

	#modal-confirm {
		background-color: green;
		color: white;
	}

	#modal-confirm:hover {
		background-color: hsl(120, 100%, 45%);
		color: green;
	}

	#modal-cancel {
		background-color: red;
		color: white;
	}

	#modal-cancel:hover {
		background-color: hsl(0, 100%, 20%);
		color: red;
	}
</style>
