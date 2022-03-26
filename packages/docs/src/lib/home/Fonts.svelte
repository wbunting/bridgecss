<div class="container">
	<div class="container--color">
		<div class="row row--text-xl">The text is interesting</div>
		<div class="row row--text-lg">The text is interesting</div>
		<div class="row row--text-base">The text is interesting</div>
		<div class="row row--text-sm">The text is interesting</div>
		<div class="row row--text-xs">The text is interesting</div>
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
			@include space-y(3);
			background-color: $gray-800;
			@include space-x(3);
			@include p(8);
			border-radius: spacing(4);
		}
	}

	.row {
		&--text-xl {
			@include text-xl;
		}
		&--text-lg {
			@include text-lg;
		}
		&--text-base {
			@include text-base;
		}
		&--text-sm {
			@include text-sm;
		}
		&--text-xs {
			@include text-xs;
		}
	}
</style>
