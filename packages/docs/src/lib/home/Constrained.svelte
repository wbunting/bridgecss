<script>
    import ColorDark from '$lib/icons/ColorsDark.svelte';
	import Scale from '$lib/icons/SpacingDark.svelte';
	import Typography from '$lib/icons/TypographyDark.svelte';

	import Spacing from './Spacing.svx';
	import ColorPalette from './ColorPalette.svx';
    import Fonts from './Fonts.svx';

	let active = 'spacing';

	function handleClick(next) {
		active = next;
	}
</script>

<div>
	<div class="selector">
		<button on:click={() => handleClick('spacing')} data-active={'spacing' === active}>
			<Scale />
		</button>
		<button on:click={() => handleClick('colors')} data-active={'colors' === active}>
			<ColorDark />
		</button>
		<button on:click={() => handleClick('typography')} data-active={'typography' === active}>
			<Typography />
		</button>
	</div>

	<div>
		{#if active === 'spacing'}
			<Spacing />
		{:else if active === 'colors'}
			<ColorPalette />
		{:else if active === 'typography'}
			<Fonts />
		{/if}
	</div>
</div>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	.selector {
		display: flex;
		@include space-x(3);

		button {
			display: flex;
			flex-direction: column;
			align-items: center;
			border-radius: 28px;
			padding: 0;
		    border: 2px solid $slate-500;

			&[data-active='true'] {
				border: 2px solid $blue-500;
			}
		}
	}
</style>
