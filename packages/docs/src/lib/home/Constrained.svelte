<script>
	import Color from '$lib/icons/Color.svelte';
	import Scale from '$lib/icons/Scale.svelte';

	import Typography from '$lib/icons/Typography.svelte';

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
			<span>Spacing</span>
			<Scale />
		</button>
		<button on:click={() => handleClick('colors')} data-active={'colors' === active}>
			<span>Color Palette</span>
			<Color />
		</button>
		<button on:click={() => handleClick('typography')} data-active={'typography' === active}>
			<span>Fonts</span>
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
			span {
				text-transform: uppercase;
				@include text-sm;
				font-weight: 600;
				padding-bottom: spacing(2);
			}

			&[data-active='true'] {
				span {
					color: $blue-400;
				}
			}
		}
	}
</style>
