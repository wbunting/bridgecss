<div class="code">
	<div class="window">
		<div class="window-tabs">
			<slot name="tabs" />
		</div>
		<div class="window-content">
			<slot name="content" />
		</div>
	</div>
</div>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	.code {
		@include glass;
		border-radius: spacing(4);
		box-shadow: 0 0 1em #000;
		background-color: $slate-900;
		color: $slate-200;

		.window {
			display: flex;
			position: relative;
			width: 100%;
			flex-direction: column;
		}
	}
</style>
