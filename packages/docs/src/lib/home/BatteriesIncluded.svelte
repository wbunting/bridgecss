<script>
	import ThreeDDark from '$lib/icons/3DDark.svelte';
	import AnimationsDark from '$lib/icons/AnimationsDark.svelte';
	import PseudoDark from '$lib/icons/PseudoDark.svelte';

	let active = 'spacing';

	function handleClick(next) {
		active = next;
	}
</script>

<div class="feature--top">
	<div class="feature--top-container">
		<span class="feature--tag">Batteries Included</span>

		<h3>No more ejecting</h3>

		<p>
			Want to use 3D CSS transforms? how about pseudo-elements? With BridgeCSS you can just use
			those as you normally would without having to eject from a utility-first framework
		</p>
		<div>
			<div class="selector">
				<button on:click={() => handleClick('spacing')} data-active={'spacing' === active}>
					<ThreeDDark />
				</button>
				<button on:click={() => handleClick('colors')} data-active={'colors' === active}>
					<AnimationsDark />
				</button>
				<button on:click={() => handleClick('typography')} data-active={'typography' === active}>
					<PseudoDark />
				</button>
			</div>
		</div>
	</div>
</div>
<div class="feature--item">
	<div class="feature--item-container">
		<div class="feature--item-left" />
		<div class="feature--item-right" />
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

			height: spacing(20);
			width: spacing(20);

			@include tablet {
				height: spacing(40);
				width: spacing(40);
			}

			&[data-active='true'] {
				border: 2px solid $blue-500;
			}
		}
	}
</style>
