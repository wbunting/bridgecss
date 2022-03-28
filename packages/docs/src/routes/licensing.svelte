<svelte:head>
	<title>BridgeCSS | Licensing</title>
</svelte:head>

<section>
	<h2 class="license-tag">Dual licensed for maximum flexibility</h2>
</section>
<section class="price-cards">
	<div class="price-cards__left">
		<h2 class="price-cards__title">GPL</h2>
		<span class="price-cards__tag">Free as in freedom</span>
		<div class="price-cards__priceperiod">
			<span class="price">$0</span>
			<span class="period">year</span>
		</div>
		<p>You <span>must</span> release your source code</p>
	</div>
	<div class="price-cards__right">
		<h2 class="price-cards__title">Proprietary</h2>
		<span class="price-cards__tag">License for businesses</span>
		<div class="price-cards__priceperiod price-cards__priceperiod--right">
			<span class="price">$1000</span>
			<span class="period">year</span>
		</div>
		<button class="price-cards__buybutton">Buy Now</button>
	</div>
	<div class="price-cards__circle1" />
	<div class="price-cards__circle2" />
	<div class="price-cards__circle3" />
</section>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	.license-tag {
		@include text-lg;
		@include py(4);
		@include mb(8);
		color: $slate-300;
	}

	.price-cards {
		display: flex;
		position: relative;
		flex-direction: column;

		@include tablet {
			flex-direction: row;
		}

		&__left {
			display: flex;
			flex-direction: column;
			align-items: center;
			@include glass;
			@include pxy(8, 1);
			height: 350px;
			border-radius: spacing(3);
		}

		&__right {
			position: fixed;
			left: 0px;
			@include tablet {
				left: -20px;
			}
			top: -20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			@include glass;
			@include pxy(20, 1);
			border-radius: spacing(3);
		}

		&__priceperiod {
			@include my(10);
			position: relative;

			.price {
				font-family: monospace;
				font-size: 3rem;

				&:after {
					content: '/';
					position: absolute;
					top: spacing(-6);
					right: spacing(-8);
					font-weight: 200;
					font-size: 70pt;
				}
			}

			.period {
				@include ml(5);
				color: $slate-300;
				position: absolute;
				top: 32px;
			}

			&--right {
				@include my(24);
			}
		}

		&__tag {
			@include text-lg;
			color: $slate-400;
			font-weight: bold;
		}

		&__title {
			font-size: 2rem;
			color: $slate-100;
			font-weight: bold;
		}

		&__buybutton {
			@include three-d($green-400);
			color: $green-900;
			@include pxy(8, 3);
			@include text-xl;
			border-radius: spacing(2);
			font-weight: 700;
			@include mb(3);
			transition-property: background-color, color;
			transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
			transition-duration: 200ms;

			&:hover {
				@include three-d($green-300);
			}
		}

		&__circle1 {
			position: absolute;
			top: 200px;
			left: -10px;
			content: '';
			height: 100px;
			width: 100px;
			border-radius: 9999px;
			background: $slate-600;
			z-index: -10;
		}

		&__circle2 {
			position: absolute;
			left: 200px;
			@include tablet {
				left: 600px;
			}
			content: '';
			height: 100px;
			width: 100px;
			border-radius: 9999px;
			background: $slate-600;
			z-index: -10;
		}

		&__circle3 {
			position: absolute;
			top: 280px;
			left: 200px;
			content: '';
			height: 100px;
			width: 100px;
			border-radius: 9999px;
			background: $slate-600;
			z-index: -10;
		}
	}
</style>
