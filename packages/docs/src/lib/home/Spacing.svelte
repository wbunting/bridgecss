<div class="container">
	<div class="container--color">
		<div class="square square--first square--not-last" />
		<div class="square square--not-last" />
		<div class="square" />
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

	.square {
		background-color: $gray-400;
		height: spacing(16);
		width: spacing(16);
		position: relative;
		@include three-d($gray-400);
		border-radius: spacing(2);

		&--first {
			&:before {
				content: '16';
				font-family: $mono;
				@include text-xs;
				display: flex;
				align-items: center;
				position: absolute;
				@include pr(1);
				height: spacing(16);
				top: spacing(0);
				left: spacing(-6);
				border-right: spacing(1) solid $blue-500;
			}
		}

		&--not-last {
			&:after {
				content: '3';
				@include text-xs;
				font-family: $mono;
				position: absolute;
				display: flex;
				justify-content: center;
				width: spacing(3);
				top: spacing(-6);
				left: spacing(16);
				border-bottom: spacing(1) solid $blue-500;
			}
		}
	}
</style>
