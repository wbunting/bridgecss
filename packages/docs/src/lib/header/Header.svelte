<script lang="ts">
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import Github from '$lib/icons/Github.svelte';
	import Logo from '$lib/Logo.svelte';
	import DotsVertical from '$lib/icons/DotsVertical.svelte';
	import Close from '$lib/icons/Close.svelte';

	import { onMount } from 'svelte';

	export let sticky = false;

	let mode: string;
	let pathname = $page.url.pathname;
	let showMenu: boolean = false;

	afterNavigate(() => {
		pathname = $page.url.pathname;
		showMenu = false;
	});

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

	const handleToggleMenu = () => {
		showMenu = !showMenu;
	};
</script>

<header data-sticky={sticky}>
	<div>
		<h1>
			<a href="/">
				<div class="logo">
					<div class="logo__icon">
						<Logo />
					</div>
					<span>BridgeCSS</span>
				</div>
			</a>
		</h1>
	</div>

	<nav>
		<ul>
			<li class="mobile-hide">
				<a
					class="underline"
					sveltekit:prefetch
					href="/docs/getting-bridge"
					data-active={pathname.startsWith('/docs')}>Docs</a
				>
			</li>
			<li>
				<button aria-label="Dark Mode Toggle" class="dark-mode-toggle" on:click={handleToggleDark}>
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
			<li class="mobile-hide">
				<a href="https://github.com/wbunting/bridgecss">
					<Github />
				</a>
			</li>
			<li class="mobile-menu">
				<button on:click={handleToggleMenu}>
					<DotsVertical />
				</button>
			</li>
		</ul>
	</nav>
</header>

{#if showMenu}
	<div class="dialog">
		<div class="dialog__container">
			<div class="dialog__overlay" />
			<div class="dialog__content">
				<div class="dialog__header">
					<button on:click={handleToggleMenu}>
						<Close />
					</button>
				</div>
				<div class="dialog__links">
					<a
						sveltekit:prefetch
						href="/docs/getting-bridge"
						data-active={pathname.startsWith('/docs')}>Docs</a
					>
					<a href="https://github.com/wbunting/bridgecss">Github</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	@use 'src/bridge.scss' as *;

	h1 {
		font-size: 16pt;
	}

	.dialog {
		position: fixed;
		z-index: 10;
		overflow-y: auto;
		@include inset-0;

		&__container {
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 100vh;
		}

		&__overlay {
			position: fixed;
			background-color: alpha($black, 0.3);
			@include inset-0;
			z-index: 0;
			backdrop-filter: blur(10px);
		}

		&__content {
			display: relative;
			z-index: 20;
			box-shadow: shadow(3);
			background-color: $gray-700;
			color: $white;
			min-width: 80%;
			border-radius: spacing(4);
			@include p(10);
		}

		&__header {
			display: flex;
			justify-content: flex-end;
		}

		&__links {
			display: flex;
			flex-direction: column;
			@include space-y(5);
			font-weight: bold;
			@include text-lg;
		}
	}

	.mobile-menu {
		@include tablet {
			display: none;
		}
	}

	svg {
		width: spacing(6);
		height: spacing(6);
	}

	.logo {
		display: flex;
		align-items: center;
		@include space-x(2);
		@include text-sm;

		&__icon {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		@include tablet {
			@include text-lg;
		}
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

		a.underline {
			display: flex;
			height: 100%;
			align-items: center;
			color: $gray-800;
			@include dark {
				color: $gray-400;
			}
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
				border-bottom: 2px solid $blue-600;
				@include dark {
					border-bottom: 2px solid $blue-300;
				}
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
				color: $gray-600;
				@include dark {
					color: $gray-300;
				}

				&:before {
					transform: scaleX(0.3);
				}

				&:after {
					transform: translateX(0);
				}
			}

			&[data-active='true'] {
				color: $gray-100;
				@include dark {
					color: $gray-300;
				}

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
		@include space-x(4);

		@include tablet {
			@include space-x(10);
		}

		li {
			position: relative;
			height: 100%;
			display: flex;
			align-items: center;
		}
	}

	.mobile-hide {
		display: none;

		@include tablet {
			display: flex;
		}
	}
</style>
