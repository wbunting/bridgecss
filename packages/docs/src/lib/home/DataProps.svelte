<script lang="ts">
	let isDataPropsActive = false;

	const handleDataPropsClick = () => {
		isDataPropsActive = !isDataPropsActive;
	};
</script>

<div class="container">
	<div class="container--color">
		<button class="data-props" data-active={isDataPropsActive} on:click={handleDataPropsClick}>
			{#if isDataPropsActive}
				Click Me
			{:else}
				Active
			{/if}
		</button>
	</div>
</div>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	.container {
		box-sizing: border-box;
		position: relative;
		background-clip: padding-box;
		border: solid spacing(2) transparent;
		border-radius: spacing(4);
		z-index: 10;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: -1;
			margin: spacing(-2);
			border-radius: inherit;
			background: linear-gradient(to right, $gray-500, $slate-700);
		}

		&--color {
			display: flex;
			justify-content: center;
			background-color: $gray-800;
			@include space-x(3);
			@include p(8);
			border-radius: spacing(4);
		}
	}

	button.data-props {
		background-color: $gray-700;

		&[data-active='true'] {
			background-color: $gray-800;
		}
	}
</style>
