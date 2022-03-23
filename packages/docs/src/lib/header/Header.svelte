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
	<div>
		<h1>
			<a href="/">
				<div class="logo">
					<svg
						id="screenshot"
						viewBox="99.33578643762691 -206.9142135623731 186.3284271247462 120.82842712474618"
						width="186.3284271247462"
						height="120.82842712474618"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						style="-webkit-print-color-adjust: exact;"
						><g id="shape-fd00f260-a68d-11ec-857d-5760b965b696"
							><g id="shape-bfa03570-a68d-11ec-857d-5760b965b696"
								><g id="shape-4b94df51-a68d-11ec-857d-5760b965b696"
									><path
										d="M126.75,-135.26470588235293L126.75,-115.5L170.75,-151.5L126.75,-135.26470588235293Z"
										style="fill: rgb(200, 226, 190); fill-opacity: 1;"
									/></g
								><g id="shape-9eb340f0-a68d-11ec-857d-5760b965b696"
									><path
										d="M127.75,-188.5L127.75,-87.5L100.75,-87.5L100.75,-188.5L112.75,-205.5L127.75,-188.5ZL100.75,-188.5"
										style="fill: rgb(200, 226, 190); fill-opacity: 1;"
									/></g
								><g id="shape-b6e73cd0-a68d-11ec-857d-5760b965b696"
									><rect
										rx="0"
										ry="0"
										x="126.25"
										y="-182"
										transform="matrix(1,0,0,1,0,0)"
										width="66"
										height="8"
										style="fill: rgb(200, 226, 190); fill-opacity: 1;"
									/></g
								></g
							><g id="shape-c0c92510-a68d-11ec-857d-5760b965b696"
								><g id="shape-c0c92511-a68d-11ec-857d-5760b965b696"
									><path
										d="M258.25,-135.26470588235293L258.25,-115.5L214.25,-151.5L258.25,-135.26470588235293Z"
										style="fill: rgb(200, 226, 190); fill-opacity: 1;"
									/></g
								><g id="shape-c0c92512-a68d-11ec-857d-5760b965b696"
									><path
										d="M257.25,-188.5L257.25,-87.5L284.25,-87.5L284.25,-188.5L272.25,-205.5L257.25,-188.5ZL284.25,-188.5"
										style="fill: rgb(200, 226, 190); fill-opacity: 1;"
									/></g
								><g id="shape-c0c92513-a68d-11ec-857d-5760b965b696"
									><rect
										rx="0"
										ry="0"
										x="191.25"
										y="-182"
										transform="matrix(-1,0,0,1,448.5,0)"
										width="66"
										height="8"
										style="fill: rgb(200, 226, 190); fill-opacity: 1;"
									/></g
								></g
							></g
						></svg
					>
					<span>BridgeCSS</span>
				</div>
			</a>
		</h1>
	</div>

	<nav>
		<ul>
			<li>
				<a sveltekit:prefetch href="/docs/getting-bridge">Docs</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/licensing">Licensing</a>
			</li>
			<li>
				<a href="https://github.com/wbunting/bridgecss">Github</a>
			</li>
			<li>
				<button class="dark-mode-toggle" on:click={handleToggleDark}>
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

	.logo {
		display: flex;
		align-items: center;
		@include space-x(2);
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
			color: $gray-400;
			font-weight: 700;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			text-decoration: none;
			transition: color 0.2s linear;
			position: relative;
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

			&:before,
			&:after {
				position: absolute;
				content: '';
				border-bottom: 2px solid $blue-300;
				border-radius: 1em;
				bottom: 1em;
				transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
			}

			&:before {
				width: 1em;
				transform-origin: left;
			}

			&:after {
				width: 82%;
				left: 1em;
				transform: translateX(110%);
			}

			&:hover {
				color: $gray-300;

				&:before {
					transform: scaleX(0.3);
				}

				&:after {
					transform: translateX(0);
				}
			}
		}
	}

	.dark-mode-toggle {
		display: flex;
		align-items: center;
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
		@include space-x(10);

		li {
			position: relative;
			height: 100%;
			display: flex;
			align-items: center;
		}
	}
</style>
