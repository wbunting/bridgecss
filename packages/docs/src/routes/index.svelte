<script context="module" lang="ts">
	export const prerender = true;
	import Constrained from '$lib/home/Constrained.svelte';
	import BatteriesIncluded from '$lib/home/BatteriesIncluded.svelte';
	import FeatureCode from '$lib/home/FeatureCode.svx';
	import FeatureCodeStyle from '$lib/home/FeatureCodeStyle.svx';

	import Paragraph from '$lib/test.svx';
	import Customize from '$lib/customize.svx';

	import DataProps from '$lib/home/DataProps.svx';
	import ScopedSCSS from '$lib/home/ScopedSCSS.svx';
</script>

<script lang="ts">
	let featureTab = 'style';
 let isDataPropsActive = false;

 const handleDataPropsClick = () => {
	 isDataPropsActive = !isDataPropsActive;
 }

	const handleTabChange = (next: string) => {
		featureTab = next;
	};
</script>

<svelte:head>
	<title>BridgeCSS</title>
</svelte:head>

<section class="header">
	<h2>Style your website easily without having to learn yet another framework</h2>

	<p>
		A sane set of SCSS presets and mixins for rapid development of websites and web applications.
	</p>

	<a sveltekit:prefetch href="/docs/getting-bridge">
		<button class="get-started">Get Started</button>
	</a>
</section>

<section class="hero">
	<div class="left">
		<figure>
			<img
				src="https://images.unsplash.com/photo-1613379171002-3610ae01cf4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
				alt="hero quote"
			/>
			<div class="left-caption">
				<blockquote>
					<p>
						"BridgeCSS is designed to make starting new projects easy, but get out of your way as
						your project grows"
					</p>
				</blockquote>
				<figcaption>
					<div class="author">John Smith</div>
					<div class="title">Tech Lead, Google</div>
				</figcaption>
			</div>
		</figure>
	</div>

	<div class="code-frame">
		<div class="code">
			<div class="window">
				<div class="window-pane">
					<div class="window-decorations">
						<div class="window-decoration" />
						<div class="window-decoration" />
						<div class="window-decoration" />
					</div>
				</div>
				<div class="window-tabs">
					<button
						class="window-tab"
						data-active={featureTab === 'style'}
						on:click={() => handleTabChange('style')}>main.scss</button
					>
					<button
						class="window-tab"
						data-active={featureTab === 'markup'}
						on:click={() => handleTabChange('markup')}>index.html</button
					>
				</div>
				<div class="window-content">
					{#if featureTab === 'style'}
						<FeatureCodeStyle />
					{:else}
						<FeatureCode />
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<section class="feature">
	<span>Constrained</span>

	<h3>A battle-tested set of design constraints.</h3>

	<p>
		We've ported over a great set of design constraints and color pallette from other popular
		frameworks. This should make your transition to using BridgeCSS seamless.
	</p>

	<Constrained />
</section>

<section class="feature">
	<span>Customize</span>

	<h3>It's your design</h3>

	<p>
		Edit the base styles to get exactly the look you are going for without having to reference
		external docs or syntax since it's just CSS.
	</p>

	<Customize />
</section>

<section class="feature">
	<span>Batteries Included</span>

	<h3>No more ejecting</h3>

	<p>
		Want to use 3D CSS transforms? how about pseudo-elements? With BridgeCSS you can just use those
		as you normally would without having to eject from a utility-first framework
	</p>

	<BatteriesIncluded />
</section>

<section class="feature">
	<span>Flexible</span>

	<h3>Zero Javascript Dependencies</h3>

	<p>
		While BridgeCSS can be used to react to changes in your site induced by Javascript, it is in now
		way coupled to it. So use as little or as much Javascript as you like (not as much as your CSS
		framework likes).
	</p>

	<div>
		<svg
			id="screenshot"
			viewBox="319 283.5 155 155"
			width="100"
			height="100"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			style="-webkit-print-color-adjust: exact;"
			><g id="shape-063b7400-a502-11ec-8338-071957b39045"
				><g id="shape-bdb2f340-a4ff-11ec-8338-071957b39045"
					><g id="shape-d3ad7280-a502-11ec-8338-071957b39045"
						><path
							d="M345,306.5L447,306.5L447,408.5L345,408.5L345,306.5ZM379.560373422916,387.3799249643521L371.75113682899587,392.1077622257676C374.0133684714761,396.8955583487676,378.46166779712684,400.87066882083343,386.14288411901543,400.87066882083343C394.6440783858144,400.87066882083343,400.4681905083603,396.3494465554179,400.4681905083603,386.41572164968466L400.4681905083603,353.6652191464424L390.87477265486234,353.6652191464424L390.87477265486234,386.2860808678806C390.87477265486234,391.0811692848572,388.88640716394315,392.3143772217676,385.7345156563327,392.3143772217676C382.4383987789654,392.3143772217676,381.06744751138774,390.0537660890601,379.560373422916,387.3799249643521ZM413.45009429626106,386.5486034510336L405.65382178052135,391.0779282653118C408.47026776521386,396.64275882424977,414.22631847731253,400.88849442833157,423.13588120679447,400.88849442833157C432.24800765784505,400.88849442833157,439.0330820755132,396.1566058924848,439.0330820755132,387.5192888047916C439.0330820755132,379.50748848930255,434.43083432147023,375.94398749946424,426.279670165542,372.4485479200732L423.8813157021676,371.42114472427613C419.76522087988974,369.6385839744711,417.9826601300844,368.4734374480073,417.9826601300844,365.595412091958C417.9826601300844,363.2667395488029,419.76360037011716,361.4841787989976,422.57356431571935,361.4841787989976C425.32843092905506,361.4841787989976,427.1028891299976,362.64608430591613,428.7477065491362,365.595412091958L436.2182566005933,360.79870316520885C433.05826254412017,355.2403546453613,428.67316309959887,353.1174868433203,422.57356431571935,353.1174868433203C414.00592914824585,353.1174868433203,408.52374458770805,358.59480987454026,408.52374458770805,365.78987326466404C408.52374458770805,373.6007303683566,413.1227513222059,377.2954926497713,420.04556907054103,380.2448204358129L422.4439235339155,381.27384414138226C426.81929991980127,383.18766618276425,429.42832065360744,384.35281270922803,429.42832065360744,387.6424475475052C429.42832065360744,390.38759110220553,426.8889818400209,392.3743360833522,422.91387136795504,392.3743360833522C418.18198283210813,392.3743360833522,415.5065211976275,389.90629969975805,413.45009429626106,386.5486034510336Z"
							style="fill: rgb(177, 178, 181); fill-opacity: 1;"
						/></g
					></g
				><g id="shape-04acbdb0-a502-11ec-8338-071957b39045"
					><path
						d="M396.5,283.5C439.273414398285,283.5,474,318.226585601715,474,361C474,403.7734143982849,439.273414398285,438.5,396.5,438.5C353.726585601715,438.5,319,403.7734143982849,319,361C319,318.226585601715,353.726585601715,283.5,396.5,283.5ZM396.9378531073446,295.7598870056497C360.6891968376115,295.7598870056497,331.2598870056497,325.18919683761146,331.2598870056497,361.4378531073446C331.2598870056497,397.68650937707764,360.6891968376115,427.1158192090395,396.9378531073446,427.1158192090395C433.18650937707764,427.1158192090395,462.61581920903956,397.68650937707764,462.61581920903956,361.4378531073446C462.61581920903956,325.18919683761146,433.18650937707764,295.7598870056497,396.9378531073446,295.7598870056497ZM359.45741505260924,306.69019932459446L369.7497685620255,300.02894638013595L444.9267657383512,416.18550689009464L434.6344122289349,422.84675983455327L359.45741505260924,306.69019932459446Z"
						style="fill: rgb(113, 141, 1); fill-opacity: 1;"
					/></g
				></g
			></svg
		>
	</div>
</section>

<section class="feature">
	<span>Git</span>

	<h3>Great looking git diffs</h3>

	<p>Since each style gets it's own line changes are easy to review.</p>

	<Paragraph />
</section>

<section class="feature">
	<span>Reactive</span>

	<h3>Reactivity? Meet data-props</h3>

	<p>
		Data props are a great, framework-independent, way to allow your css to react to changes in the
		DOM induced by Javascript
	</p>

	<div class="side-by-side">
		<DataProps />
        <div>
			<button class="data-props" data-active={isDataPropsActive} on:click={handleDataPropsClick}>
				{#if isDataPropsActive}
					Click Me
				{:else}
					Active
				{/if}
			</button>
       </div>
	</div>
</section>

<section class="feature">
	<span>Naming is hard</span>

	<h3>Tired of naming classes? Try scoped SCSS</h3>

	<p>
		Some frameworks even allow you to scope your css to particular components making naming classes
		almost irrelevant
	</p>

	<ScopedSCSS />
</section>

<section class="topic-list">
	<div>Getting Started</div>

	<div>Customizing</div>

	<div>About</div>
</section>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
        background-color: bg-opacity($slate-700, 0.1);
		flex: 1;
		@include py(5);
		@include px(5);
		@include mr(3);
		@include ml(3);
		@include mt(3);
		@include mb(3);
        backdrop-filter: blur(5px);

		&.topic-list {
			display: flex;
			flex-direction: row;
			@include space-x(3);
		}
	}

 .feature {

		span {
			@include mt(5);
			text-transform: uppercase;
			font-weight: 700;
			color: $orange-100;
		}

		div {
			display: flex;
			justify-content: center;
			@include space-x(4);
		}

		&:before {
			content: ' ';
			width: 100%;
			height: 1rem;
			background: repeating-linear-gradient(
				rgba(255, 255, 255, 0.2) 0%,
				rgba(255, 255, 255, 0.2) 10%,
				rgb(34, 34, 34) 10%,
				rgb(34, 34, 34) 20%
			);
		}
	}

	button.get-started {
		color: $white;
		font-weight: 500;
		@include px(3);
		@include py(2);
		border-radius: 0.5rem;

		background: $gray-600 radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, $gray-700);
		box-shadow: inset 9px 9px 0px -7px $gray-600, inset -7px -7px 0 -7px rgba(255, 255, 255, 0.3),
			-2px -2px 2px 0 rgba(0, 0, 0, 0.2), -10px -10px 7px 2px rgba(0, 0, 0, 0.1);

		border-image: linear-gradient(to bottom, $gray-700, rgba(255, 255, 255, 1), $gray-700) 1 100%;
	}

	.header {
		align-items: center;
	}

	.hero {
		@include py(5);
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));

		align-items: center;

		.left {
			border-radius: 1rem;
			overflow: hidden;
			border-radius: 1em;
			background-color: $gray-700;
			grid-column-start: 1;
			grid-column: span 5;

			figure {
				@include p(8);
				margin: 0px;

				.left-caption {
					@include pt(3);

					@include tablet {
						@include p(4);
					}
				}

				@include tablet {
					display: flex;
					padding: 0;
				}

				img {
					width: spacing(24);
					height: spacing(24);
					border-radius: 9999px;
					object-fit: contain;

					@include tablet {
						width: spacing(48);
						height: spacing(54);
						border-radius: 0px;
					}
				}

				blockquote {
					margin: 0;
					@include text-lg;
				}

				figcaption {
					.author {
						color: $sky-500;
						@include dark() {
							color: $sky-400;
						}
					}

					.title {
						color: $slate-700;
						@include dark() {
							color: $slate-500;
						}
					}
				}
			}
		}
	}

	.code-frame {
		grid-column-start: 6;
		grid-column: span 7;
		transform-style: preserve-3d;
		perspective: 1000px;
	}

	.code {
		border-radius: 1em;
		background-color: $gray-700;

		transform-style: preserve-3d;
		box-shadow: 0 0 1em #000;
		transform: rotateX(var(--rotate-x, 0turn)) rotateY(var(--rotate-y, 0turn));
		animation: rotate-card 3s ease-in-out;
		animation-iteration-count: infinite;
		animation-fill-mode: forwards;

		.window {
			display: flex;
			position: relative;
			width: 100%;
			flex-direction: column;
		}

		.window-tabs {
			display: flex;
			align-items: center;
			@include space-x(3);
			@include px(3);
			@include py(1);
			font-family: $mono;

			> :not(:last-child) {
				@include pr(3);
				border-right: 1px solid $gray-100;
			}

			> [data-active='true'] {
				font-weight: 700;
			}
		}

		.window-pane {
			border-bottom: 1px solid $gray-200;

			.window-decorations {
				display: flex;
				align-items: center;
				height: 1rem;
				@include space-x(1.5);
				@include px(3);

				.window-decoration {
					width: 0.25em;
					height: 0.25em;
					background-color: $gray-300;
					border-radius: 9999px;
				}
			}
		}
	}

	@property --rotate-x {
		syntax: '<angle>';
		inherits: false;
		initial-value: 0turn;
	}

	@property --rotate-y {
		syntax: '<angle>';
		inherits: false;
		initial-value: 0turn;
	}

	@keyframes rotate-card {
		from {
			--rotate-x: 0turn;
			--rotate-y: 0turn;
		}
		50% {
			--rotate-y: -0.01turn;
			--rotate-x: -0.01turn;
		}
		to {
			--rotate-y: 0turn;
			--rotate-x: 0turn;
		}
	}

	h2 {
		@include text-4xl;
		text-align: center;
	}

	h3 {
		@include text-2xl;
		@include leading(3);
	}


  button.data-props {
    background-color: $gray-700;

    &[data-active="true"] {
      background-color: $gray-800;
    }
  }
</style>
