<script context="module" lang="ts">
	export const prerender = true;
	import Constrained from '$lib/home/Constrained.svelte';
	import BatteriesIncluded from '$lib/home/BatteriesIncluded.svelte';
	import FeatureCode from '$lib/home/FeatureCode.svx';
	import FeatureCodeStyle from '$lib/home/FeatureCodeStyle.svx';

	import Diff from '$lib/home/Diff.svx';
	import DiffBad from '$lib/home/DiffBad.svx';
	import Customize from '$lib/customize.svx';

	import DataPropsCode from '$lib/home/DataProps.svx';
	import DataProps from '$lib/home/DataProps.svelte';
	import ScopedSCSSCode from '$lib/home/ScopedSCSS.svx';
	import ScopedSCSS from '$lib/home/ScopedSCSS.svelte';

	import IDE from '$lib/IDE.svelte';
</script>

<script lang="ts">
	let featureTab = 1;

	const handleTabChange = (next: number) => {
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
	<div class="hero--left">
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

	<div class="hero--right">
		<IDE>
			<svelte:fragment slot="tabs">
				<button
					class="window-tab"
					data-active={featureTab === 1}
					on:click={() => handleTabChange(1)}
				>
					main.scss
				</button>
				<button
					class="window-tab"
					data-active={featureTab === 2}
					on:click={() => handleTabChange(2)}
				>
					index.html
				</button>
			</svelte:fragment>
			<svelte:fragment slot="content">
				{#if featureTab === 1}
					<FeatureCodeStyle />
				{:else if featureTab === 2}
					<FeatureCode />
				{/if}
			</svelte:fragment>
		</IDE>
	</div>
</section>

<section class="feature">
	<Constrained />
</section>

<section class="feature">
	<div class="feature--top">
		<div class="feature--top-container">
			<div class="feature--top-container-content">
				<span class="feature--tag">Customize</span>

				<h3>It's your design</h3>

				<p>
					Edit the base styles to get exactly the look you are going for without having to reference
					external docs or syntax since it's just CSS.
				</p>
			</div>
		</div>
	</div>
	<div class="feature--item">
		<div class="feature--item-container">
			<div class="feature--item-center">
				<div class="circle1" />
				<div class="circle2" />
				<div class="circle3" />
				<Customize />
			</div>
		</div>
	</div>
</section>

<section class="feature">
	<BatteriesIncluded />
</section>

<section class="feature">
	<div class="feature--top">
		<div class="feature--top-container">
			<div class="feature--top-container-content">
				<span class="feature--tag">Flexible</span>

				<h3>Zero Javascript Dependencies</h3>

				<p>
					While BridgeCSS can be used to react to changes in your site induced by Javascript, it is
					in now way coupled to it. So use as little or as much Javascript as you like (not as much
					as your CSS framework likes).
				</p>

				<div class="js-logo-bg">
					<svg
						id="screenshot"
						viewBox="319 283.5 155 155"
						width="75"
						height="75"
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
			</div>
		</div>
	</div>
	<div class="feature--item feature--item--small" />
</section>

<section class="feature">
	<div class="feature--top">
		<div class="feature--top-container">
			<div class="feature--top-container-content">
				<span class="feature--tag">Git</span>

				<h3>Great looking git diffs</h3>

				<p>Since each style gets it's own line changes are easy to review.</p>
			</div>
		</div>
	</div>
	<div class="feature--item">
		<div class="feature--item-container">
			<div class="feature--item-left">
				<Diff />
			</div>
			<div class="feature--item-right">
				<DiffBad />
			</div>
		</div>
	</div>
</section>

<section class="feature">
	<div class="feature--top">
		<div class="feature--top-container">
			<div class="feature--top-container-content">
				<span class="feature--tag">Reactive</span>

				<h3>Reactivity? Meet data-props</h3>

				<p>
					Data props are a great, framework-independent, way to allow your css to react to changes
					in the DOM induced by Javascript
				</p>
			</div>
		</div>
	</div>
	<div class="feature--item">
		<div class="feature--item-container">
			<div class="feature--item-left">
				<DataPropsCode />
			</div>
			<div class="feature--item-right">
				<DataProps />
			</div>
		</div>
	</div>
</section>

<section class="feature">
	<div class="feature--top">
		<div class="feature--top-container">
			<div class="feature--top-container-content">
				<span class="feature--tag">Naming is hard</span>

				<h3>Tired of naming conflicts? Try scoped SCSS</h3>

				<p>
					Some frameworks even allow you to scope your css to particular components allowing for
					much more flexibility in naming classes
				</p>
			</div>
		</div>
	</div>
	<div class="feature--item">
		<div class="feature--item-container">
			<div class="feature--item-left">
				<ScopedSCSSCode />
			</div>
			<div class="feature--item-right">
				<ScopedSCSS />
			</div>
		</div>
	</div>
</section>

<section class="topic-list">
	<div>
		<a sveltekit:prefetch href="/docs/getting-bridge">Getting Started</a>
	</div>
</section>

<style lang="scss">
	@use 'src/bridge.scss' as *;

	.hero {
		max-width: 80rem;
		display: flex;
		justify-content: center;
	}

	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		flex: 1;
		@include mt(3);
		@include mb(3);

		@include tablet {
			@include py(5);
			@include mt(3);
			@include mb(3);
		}

		&.topic-list {
			display: flex;
			flex-direction: row;
			justify-content: center;
			@include space-x(10);
		}
	}

	button.get-started {
		color: $gray-900;
		font-weight: 600;
		@include px(3);
		@include py(2);
		border-radius: 0.5rem;
		// background: $gray-600 radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, $gray-700);
		@include three-d($gray-400);
		transition-property: background-color, color;
		transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
		transition-duration: 200ms;

		&:hover {
			@include three-d($gray-300);
		}
	}

	.header {
		align-items: center;
		max-width: 80rem;
		@include px(4);

		@include tablet {
			@include px(0);
		}
	}

	.hero {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		align-items: center;

		@include tablet {
			@include py(5);
		}

		&--left {
			overflow: hidden;
			background-color: $gray-400;
			grid-column-start: 1;
			grid-column: span 12;
			@include m(4);

			@include tablet {
				grid-column-start: 1;
				grid-column: span 5;
				@include m(0);
			}

			@include dark {
				background-color: $gray-700;
			}

			position: relative;
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

			figure {
				@include p(8);
				margin: 0px;
				border-radius: spacing(4);
				background-color: $slate-300;

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

				@include dark {
					background-color: $gray-800;
				}

				img {
					width: spacing(24);
					height: spacing(24);
					border-radius: 9999px;
					object-fit: cover;

					@include tablet {
						width: spacing(48);
						height: spacing(54);
						border-radius: 0px;
					}
				}

				blockquote {
					margin: 0;
					@include text-lg;
					font-style: italic;
				}

				figcaption {
					.author {
						color: $sky-500;
						@include mb(1);
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

		&--right {
			grid-column-start: 1;
			grid-column: span 12;

			@include tablet {
				grid-column-start: 6;
				grid-column: span 7;
			}
		}
	}

	h2 {
		@include text-4xl;
		text-align: center;
	}

	h3 {
		@include text-2xl;
	}

	.js-logo-bg {
		background-color: $slate-900;
		border: 1px solid $slate-300;
		border-radius: spacing(4);
		@include p(3);
	}

	.circle1 {
		@include circle(20%, -10%);
	}

	.circle2 {
		@include circle(10%, 50%) {
			@include tablet {
				left: 300px;
			}
		}
	}

	.circle3 {
		@include circle(40%, 50%);
	}
</style>
