<script>
	import ColorDark from '$lib/icons/ColorsDark.svelte';
	import Scale from '$lib/icons/SpacingDark.svelte';
	import Typography from '$lib/icons/TypographyDark.svelte';

	import SpacingCode from './Spacing.svx';
	import Spacing from './Spacing.svelte';
	import ColorPalette from './ColorPalette.svx';
	import Fonts from './Fonts.svx';

	let active = 'spacing';

	function handleClick(next) {
		active = next;
	}
</script>

<div class="feature--top">
	<div class="feature--top-container">
		<span class="feature--tag">Constrained</span>

		<h3>A battle-tested set of design constraints.</h3>

		<p>
			We've ported over a great set of design constraints and color pallette from other popular
			frameworks. This should make your transition to using BridgeCSS seamless.
		</p>

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
		</div>
	</div>
</div>
<div class="feature--item">
	<div class="feature--item-container">
		<div class="feature--item-left">
			{#if active === 'spacing'}
				<SpacingCode />
			{:else if active === 'colors'}
				<ColorPalette />
			{:else if active === 'typography'}
				<Fonts />
			{/if}
		</div>
		<div class="feature--item-right">
			{#if active === 'spacing'}
				<Spacing />
			{/if}
		</div>
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
