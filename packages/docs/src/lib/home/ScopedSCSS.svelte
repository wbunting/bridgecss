<div class="container">
	<div class="container--color">
		<form>
			<label for="name">Name</label>
			<input type="text" name="name" id="name" />
			<button type="submit">Submit</button>
		</form>
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

	form {
		display: flex;
		flex-direction: column;
		@include space-y(3);

		label {
			@include mb(2);
			text-transform: uppercase;
			font-weight: 700;
			@include text-lg;
			color: $gray-200;
		}

		input {
			border: 1px solid $gray-900;
			@include pxy(3, 2);
			color: $gray-200;
		}

		button {
			@include three-d($gray-200);
			color: $gray-900;
			@include pxy(3, 2);
		}
	}
</style>
