<div class="app">
	<div class="elements">
		<div class="card" />
		<div class="name">John Smith</div>
	</div>
</div>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	* {
		transform-style: preserve-3d;
		perspective: 10000px;
	}

	.app {
		display: flex;
		justify-content: center;
		align-items: center;
		width: spacing(70);
		height: spacing(100);
		animation: perspective 2s infinite;
	}

	.elements {
		width: spacing(100);
		height: spacing(40);

		background-clip: padding-box;
		border: solid spacing(2) transparent;
		border-radius: spacing(4);
		background-color: $gray-300;
		position: absolute;
		top: 0;
		left: 0;
		outline-offset: 2px;
		border-radius: spacing(3);

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
	}

	.card {
		display: flex;
		justify-content: center;
		background-color: $gray-800;
		@include space-x(3);
		@include p(8);
		border-radius: spacing(4);
		width: 100%;
		height: 100%;
	}

	.name {
		color: $gray-200;
		font-weight: 700;
		@include text-lg;
		position: absolute;
		top: 10px;
		left: 10px;
		height: 100%;
		width: 100%;
		outline-offset: 2px;

		animation: fly-in 2s infinite;
	}

	@keyframes fly-in {
		from {
			transform: translateZ(50vmin) translateY(50%);
			opacity: 0;
		}
		to {
			transform: none;
			opacity: 1;
		}
	}

	@keyframes perspective {
		from {
			transform: rotateX(-10deg) rotateY(-40deg);
		}
		50% {
			transform: rotateX(-5deg) rotateY(-45deg);
		}
		100% {
			transform: rotateX(-10deg) rotateY(-40deg);
		}
	}
</style>
