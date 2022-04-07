<script lang="ts">
	import Header from '$lib/header/Header.svelte';

	import '../resets.scss';
	import '../app.scss';
	import '../prism.scss';
	import '@fontsource/fira-mono';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<section class="topic-list">
		<div>
			<h3>Introduction</h3>
			<a sveltekit:prefetch href="/docs/getting-bridge">Getting Started</a>
			<a sveltekit:prefetch href="/docs/installing-scss">Installing SCSS</a>
		</div>
		<div>
			<h3>Core Features</h3>
			<a sveltekit:prefetch href="/docs/dark-mode">Dark Mode</a>
			<a sveltekit:prefetch href="/docs/responsive-design">Responsive Design</a>
			<a sveltekit:prefetch href="/docs/pseudo-elements">Pseudo Elements</a>
			<a sveltekit:prefetch href="/docs/animations">Animations</a>
		</div>
		<div>
			<h3>External Links</h3>
			<a href="https://github.com/wbunting/bridgecss">Github</a>
		</div>
	</section>
</footer>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	.topic-list {
		@include mt(70);
		display: flex;
		flex-direction: column;
		justify-content: center;
		@include px(5);
		@include space-y(3);

		@include tablet {
			flex-direction: row;
			@include space-x(40);
			@include px(0);
		}

		h3 {
			@include text-base;
			font-weight: bold;

			@include dark {
				color: $gray-200;
			}
		}

		div {
			@include text-sm;
			display: flex;
			flex-direction: column;
			@include space-y(2);

			a {
				color: $gray-600;

				@include dark {
					color: $gray-400;
				}

				&:hover {
					color: $gray-300;
				}
			}
		}
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
