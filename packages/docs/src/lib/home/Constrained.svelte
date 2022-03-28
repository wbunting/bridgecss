<script lang="ts">
	import ColorDark from '$lib/icons/ColorsDark.svelte';
	import Scale from '$lib/icons/SpacingDark.svelte';
	import Typography from '$lib/icons/TypographyDark.svelte';

	import SpacingCode from './Spacing.svx';
	import Spacing from './Spacing.svelte';
	import ColorPaletteCode from './ColorPalette.svx';
	import ColorPalette from './ColorPalette.svelte';
	import FontsCode from './Fonts.svx';
	import Fonts from './Fonts.svelte';

	let active = 'spacing';

	function handleClick(next: any) {
		active = next;
	}
</script>

<div class="feature--top">
	<div class="feature--top-container">
		<span class="feature--tag">Constrained</span>

		<h3>A battle-tested set of design constraints.</h3>

		<p>
			We've synthesized a great set of design constraints from other popular frameworks. This should
			make your transition to using BridgeCSS seamless.
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
			<div class="circle1" />
			<div class="circle2" />
			<div class="circle3" />
			{#if active === 'spacing'}
				<SpacingCode />
			{:else if active === 'colors'}
				<ColorPaletteCode />
			{:else if active === 'typography'}
				<FontsCode />
			{/if}
		</div>
		<div class="feature--item-right">
			{#if active === 'spacing'}
				<Spacing />
			{:else if active === 'colors'}
				<ColorPalette />
			{:else if active === 'typography'}
				<Fonts />
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
			border-radius: spacing(5);
			padding: 0;
			border: 2px solid $slate-500;

			height: spacing(20);
			width: spacing(20);

			@include tablet {
				height: spacing(28);
				width: spacing(28);
				border-radius: spacing(7);
			}

			&[data-active='true'] {
				border: 2px solid $blue-500;
			}
		}
	}

	.circle1 {
		@include circle(200px, -10px);
	}

	.circle2 {
		@include circle(10px, 200px) {
			@include tablet {
				left: 300px;
			}
		}
	}

	.circle3 {
		@include circle(230px, 200px);
	}
</style>
