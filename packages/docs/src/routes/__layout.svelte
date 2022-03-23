<script lang="ts">
	import Header from '$lib/header/Header.svelte';

	import '../resets.scss';
	import '../app.scss';
	import '../prism.scss';
</script>

<Header />

<main>
	<slot />
</main>

<footer>BridgeCSS</footer>

<style>
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
