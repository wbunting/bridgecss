<script lang="ts">
	import flip from '$lib/flip';

	let state = 'small';
	let container;

	function toggleState() {
		state = state === 'big' ? 'small' : 'big';
		// force update without waiting for svelte re-render
		container.dataset.state = state;
	}
	function handleClick() {
		flip(toggleState, container);
	}
</script>

<div class="wrapper">
	<div class="container" on:click={handleClick} bind:this={container} data-state="big">
		<div class="content content--small">
			<span class="click-me">Click Me</span>
			<div class="filler" />
			<div class="filler filler--full" />
			<div class="filler filler--tall" />
		</div>
		<div class="content content--big">
			<span class="click-me">Click Me</span>
			<div class="filler" />
			<div class="filler filler--full filler--tall" />
			<div class="filler" />
			<div class="filler filler--full" />
			<div class="filler" />
			<div class="filler" />
		</div>
		<div class="bg" />
	</div>
	<div class="container container--hidden" data-state="small" data-flipping="true">
		<div class="content content--small" />
		<div class="bg" />
	</div>
</div>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	$radius: spacing(4);

	.click-me {
		font-weight: 700;
		text-decoration: underline;
	}

	.wrapper {
		height: spacing(60);
		display: grid;
	}

	.bg {
		background-color: $slate-600;
		border-radius: $radius;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform-origin: top left;
		transition: inherit;
		transition-property: transform, border-radius;

		[data-flipping] > & {
			transform: scaleY(calc(1 / var(--dh)));
			border-radius: calc((var(--dw)) * $radius) / calc((var(--dh)) * $radius);
		}
	}

	.container {
		@include space-y(5);
		width: spacing(100);

		display: grid;
		position: relative;
		align-items: center;
		margin: auto;

		/* this is so svelte loads all the css states without purging the inactive ones */
		&--hidden {
			display: none;
		}

		transform-origin: top left;
		transition-property: transform;
		transition-duration: 0.5s;
		transition-delay: 0.5s;
		transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);

		> * {
			grid-area: 1 / 1;
		}

		&[data-flipping] {
			transition: none;
			transform: translateY(calc(-1px * var(--dy)));
		}

		&[data-state='big'] .content--big,
		&[data-state='small'] .content--small {
			position: relative;
			transition-delay: 1s;
			opacity: 1;
		}
	}

	.content {
		@include space-y(3);
		@include p(3);
		transition-property: opacity;
		transition-duration: 0.5s;
		transition-timing-function: linear;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		opacity: 0;
		z-index: 10;
	}

	.filler {
		background-color: $gray-300;

		width: 50%;
		height: spacing(4);
		border-radius: spacing(1);

		&--full {
			width: 100%;
		}

		&--tall {
			height: spacing(8);
		}
	}
</style>
