<div>
	<div class="modal">
		<div>Modal Content</div>
		<div class="modal--arrow" />
	</div>
</div>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	.modal {
		@include mt(8);
		border-radius: spacing(4);
		@include three-d($gray-500);
		width: spacing(80);
		height: spacing(20);
		position: relative;
		@include p(3);
		display: flex;
		justify-content: center;
		font-weight: 700;

		&--arrow {
			position: absolute;
			top: spacing(-2);
			left: spacing(60);
			width: spacing(4);
			height: spacing(4);

			&:before {
				background-color: $green-500;
				box-shadow: 0 0 spacing(3) $green-500;
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: spacing(4);
				height: spacing(4);
				z-index: -1;

				transform: rotate(45deg);
				transform-origin: center;
			}
		}
	}
</style>
