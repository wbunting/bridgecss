<div class="container">
	<div class="container--color">
		<div class="row">
			<div class="row--label" />
			<div class="column-header">100</div>
			<div class="column-header">200</div>
			<div class="column-header">300</div>
			<div class="column-header">400</div>
			<div class="column-header">500</div>
			<div class="column-header">600</div>
			<div class="column-header">700</div>
		</div>
		<div class="row">
			<div class="row--label">gray</div>
			<div class="square square--gray-100" />
			<div class="square square--gray-200" />
			<div class="square square--gray-300" />
			<div class="square square--gray-400" />
			<div class="square square--gray-500" />
			<div class="square square--gray-600" />
			<div class="square square--gray-700" />
		</div>
		<div class="row">
			<div class="row--label">blue</div>
			<div class="square square--blue-100" />
			<div class="square square--blue-200" />
			<div class="square square--blue-300" />
			<div class="square square--blue-400" />
			<div class="square square--blue-500" />
			<div class="square square--blue-600" />
			<div class="square square--blue-700" />
		</div>
	</div>
</div>

<style lang="scss">
	@use 'src/bridge.scss' as *;
	.column-header {
		width: spacing(16);
		font-family: $mono;
		display: flex;
		justify-content: center;
		@include text-xs;

		@include tablet {
			@include text-base;
		}
	}

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
			@include p(4);
			border-radius: spacing(4);

			@include tablet {
				@include p(8);
			}
		}
	}

	.row {
		display: flex;
		@include space-x(3);

		&--label {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			width: spacing(16);
			@include text-xs;

			@include tablet {
				@include text-base;
			}
		}
	}

	.square {
		height: spacing(6);
		width: spacing(6);
		position: relative;
		border-radius: spacing(4);

		@include tablet {
			height: spacing(10);
			width: spacing(10);
		}

		&--gray-100 {
			@include three-d($gray-100);
		}
		&--gray-200 {
			@include three-d($gray-200);
		}
		&--gray-300 {
			@include three-d($gray-300);
		}
		&--gray-400 {
			@include three-d($gray-400);
		}
		&--gray-500 {
			@include three-d($gray-500);
		}
		&--gray-600 {
			@include three-d($gray-600);
		}
		&--gray-700 {
			@include three-d($gray-700);
		}
		&--blue-100 {
			@include three-d($blue-100);
		}
		&--blue-200 {
			@include three-d($blue-200);
		}
		&--blue-300 {
			@include three-d($blue-300);
		}
		&--blue-400 {
			@include three-d($blue-400);
		}
		&--blue-500 {
			@include three-d($blue-500);
		}
		&--blue-600 {
			@include three-d($blue-600);
		}
		&--blue-700 {
			@include three-d($blue-700);
		}
	}
</style>
