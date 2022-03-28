<script lang="ts">
	import ThreeDDark from '$lib/icons/3DDark.svelte';
	import AnimationsDark from '$lib/icons/AnimationsDark.svelte';
	import PseudoDark from '$lib/icons/PseudoDark.svelte';
	import Animations from '$lib/home/Animations.svelte';
	import AnimationsHTML from '$lib/home/AnimationsHTML.svx';
	import AnimationsJS from '$lib/home/AnimationsJS.svx';
	import AnimationsSCSS from '$lib/home/AnimationsSCSS.svx';
	import PseudoElements from '$lib/home/PseudoElements.svelte';
	import PseudoElementsCode from '$lib/home/PseudoElements.svx';
	import ThreeD from '$lib/home/ThreeD.svelte';
	import ThreeDCode from '$lib/home/ThreeD.svx';

	import IDE from '$lib/IDE.svelte';

	let active = '3d';
	let animationsTab = 1;

	function handleTabChange(next) {
		animationsTab = next;
	}

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
				<button on:click={() => handleClick('3d')} data-active={'3d' === active}>
					<ThreeDDark />
				</button>
				<button on:click={() => handleClick('animations')} data-active={'animations' === active}>
					<AnimationsDark />
				</button>
				<button on:click={() => handleClick('pseudo')} data-active={'pseudo' === active}>
					<PseudoDark />
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
			{#if active === 'animations'}
				<IDE>
					<svelte:fragment slot="tabs">
						<button
							class="window-tab"
							data-active={animationsTab === 1}
							on:click={() => handleTabChange(1)}
						>
							main.scss
						</button>
						<button
							class="window-tab"
							data-active={animationsTab === 2}
							on:click={() => handleTabChange(2)}
						>
							index.html
						</button>
						<button
							class="window-tab"
							data-active={animationsTab === 3}
							on:click={() => handleTabChange(3)}
						>
							index.js
						</button>
					</svelte:fragment>
					<svelte:fragment slot="content">
						{#if animationsTab === 1}
							<AnimationsSCSS />
						{:else if animationsTab === 2}
							<AnimationsHTML />
						{:else if animationsTab === 3}
							<AnimationsJS />
						{/if}
					</svelte:fragment>
				</IDE>
			{:else if active === 'pseudo'}
				<IDE>
					<svelte:fragment slot="tabs">
						<span class="ide-tabs">Modal.svelte</span></svelte:fragment
					>
					<svelte:fragment slot="content">
						<PseudoElementsCode />
					</svelte:fragment>
				</IDE>
			{:else if active === '3d'}
				<IDE>
					<svelte:fragment slot="tabs">
						<span class="ide-tabs">main.scss</span></svelte:fragment
					>
					<svelte:fragment slot="content">
						<ThreeDCode />
					</svelte:fragment>
				</IDE>
			{/if}
		</div>
		<div class="feature--item-right">
			{#if active === 'animations'}
				<Animations />
			{:else if active === 'pseudo'}
				<PseudoElements />
			{:else if active === '3d'}
				<ThreeD />
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	.ide-tabs {
		font-weight: 700;
		font-family: $mono;
	}

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
		@include circle(25%, 0%);
	}

	.circle2 {
		@include circle(-10%, 50%) {
			@include tablet {
				left: 300px;
			}
		}
	}

	.circle3 {
		@include circle(150%, 50%);
	}
</style>
