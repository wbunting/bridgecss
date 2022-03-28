<script lang="ts">
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	import Case from 'case';

	import Header from '$lib/header/Header.svelte';

	import '../../docs.scss';
	import '../../app.scss';
	import '../../resets.scss';

	let pathname = $page.url.pathname;
	let activePage = null;

	const getActivePage = () => {
		activePage = docsIndex
			.reduce((acc, c) => [...acc, ...c.pages.map((p) => ({ ...p, section: c.name }))], [])
			.find((p) => pathname === `/docs/${Case.kebab(p.name)}`);
	};

	afterNavigate(() => {
		pathname = $page.url.pathname;
		getActivePage();
	});

	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	onMount(() => {
		getActivePage();
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	});

	let docsIndex = [
		{
			name: 'Getting Started',
			pages: [
				{
					name: 'Getting Bridge'
				},
				{
					name: 'Installing SCSS'
				}
			]
		},
		{
			name: 'Core Features',
			pages: [
				{
					name: 'Dark Mode'
				},
				{
					name: 'Responsive Design'
				},
				{
					name: 'Pseudo Elements'
				},
				{
					name: 'Animations'
				},
				{
					name: 'State Selectors'
				},
				{
					name: 'Colors'
				},
				{
					name: 'Opacity'
				},
				{
					name: 'Prose'
				}
			]
		},
		{
			name: 'Spacing',
			pages: [
				{
					name: 'Even Spacing'
				},
				{
					name: 'Padding'
				},
				{
					name: 'Margin'
				}
			]
		},
		{
			name: 'Typography',
			pages: [
				{
					name: 'Font Size'
				},
				{
					name: 'Leading'
				}
			]
		},
		{
			name: 'Effects',
			pages: [
				{
					name: 'Shadows'
				},
				{
					name: 'Glass'
				},
				{
					name: '3D'
				}
			]
		}
	];
</script>

<Header sticky={true} />

<main>
	<div class="sidebar">
		<nav>
			<ul>
				{#each docsIndex as section}
					<li>
						<h5>{section.name}</h5>
						<ul>
							{#each section.pages as item}
								<li>
									<a
										sveltekit:prefetch
										href={`/docs/${Case.kebab(item.name)}`}
										data-active={$page.url.pathname === `/docs/${Case.kebab(item.name)}`}
										>{item.name}</a
									>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<article class="content">
		<h3 class="section">{activePage?.section}</h3>
		<h1>{activePage?.name}</h1>
		<slot />
	</article>
</main>

<svelte:head>
	<title>{activePage?.name} - BridgeCSS</title>
</svelte:head>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	article :global {
		@include prose;
	}

	$sidebar-width: spacing(60);

	main {
		box-sizing: border-box;
		@include px(8);
		margin-left: auto;
		margin-right: auto;
		max-width: 90rem;
	}

	.sidebar {
		position: fixed;
		display: block;
		z-index: 20;
		width: $sidebar-width;
		@include pb(10);
		@include px(8);
		top: 3.8125rem;
		left: max(0px, calc(50% - 45rem));

		@include text-sm();
		@include leading(6);

		ul {
			li {
				h5 {
					@include mb(3);
					font-weight: 700;
					color: $slate-900;
					text-transform: uppercase;
					@include dark() {
						color: $slate-200;
					}
				}

				ul {
					@include space-y(2);
					border-left: 1px solid $slate-800;

					li {
						a {
							@include pl(4);
							color: $slate-400;
							transition: color 0.2s linear;
							position: relative;
							clip-path: polygon(-1px -1px, 100% 0, 120% 120%, -10% 200%);

							&:after {
								position: absolute;
								content: '';
								border-left: 1px solid $slate-500;
								border-radius: 1em;
								left: -1px;
								transition: transform 0.2s cubic-bezier(0.77, 0, 0.175, 1);
							}

							&:after {
								height: 100%;
								top: 0em;
								transform: translateY(300%);
							}

							&:hover {
								color: $slate-300;

								&:after {
									transform: translateY(0);
								}
							}
						}

						a[data-active='true'] {
							font-weight: 600;
							color: $sky-400;
							margin-left: -1px;
							border-left: 1px solid $sky-400;
						}
					}
				}
			}
		}
	}

	.content {
		min-height: 100vh;
		margin-left: $sidebar-width;

		border-left: 1px solid bg-opacity($slate-700, 0.3);
		border-right: 1px solid bg-opacity($slate-700, 0.3);

		@include pb(20);

		h3.section {
			text-transform: uppercase;
			@include text-sm();
			color: $sky-400;
		}
	}
</style>
