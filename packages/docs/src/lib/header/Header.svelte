<script lang="ts">
	import { onMount } from 'svelte';

	export let sticky = false;

	let mode: string;

	onMount(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			mode = 'dark';
		} else {
			mode = 'light';
		}
	});

	const handleToggleDark = () => {
		if (localStorage.theme === 'dark') {
			localStorage.theme = 'light';
			document.documentElement.setAttribute('data-theme', 'light');
			mode = 'light';
		} else {
			localStorage.theme = 'dark';
			document.documentElement.setAttribute('data-theme', 'dark');
			mode = 'dark';
		}
	};
</script>

<header data-sticky={sticky}>
	<div><h1><a href="/">BridgeCSS</a></h1></div>

	<nav>
		<ul>
			<li>
				<a sveltekit:prefetch href="/docs/getting-bridge">Docs</a>
			</li>
			<li>
				<a href="https://github.com/wbunting/bridgecss">Github</a>
			</li>
			<li>
				<button on:click={handleToggleDark}>
					{#if mode === 'dark'}
						<svg
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/></svg
						>
					{:else}
						<svg
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/></svg
						>
					{/if}
				</button>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	h1 {
		font-size: 16pt;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		@include px(5);

		&[data-sticky='true'] {
			position: sticky;
			top: 0;
			backdrop-filter: blur(8px);
			background-color: transparent;
			z-index: 50;
		}
	}

	nav {
		display: flex;
		justify-content: center;
		position: relative;

		a {
			display: flex;
			height: 100%;
			align-items: center;
			padding: 0 1em;
			color: $gray-400;
			font-weight: 700;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			text-decoration: none;
			transition: color 0.2s linear;

			&:hover {
				color: $gray-300;
			}
		}
	}

	svg {
		width: spacing(6);
		height: spacing(6);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;

		li {
			position: relative;
			height: 100%;
			display: flex;
			align-items: center;
		}
	}
</style>
