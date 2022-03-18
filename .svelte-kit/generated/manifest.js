const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/todos/index.svelte"),
	() => import("../../src/routes/docs/__layout.reset.svelte"),
	() => import("../../src/routes/docs/responsive-design.svelte"),
	() => import("../../src/routes/docs/installing-scss.svelte"),
	() => import("../../src/routes/docs/pseudo-elements.svelte"),
	() => import("../../src/routes/docs/getting-bridge.svx"),
	() => import("../../src/routes/docs/animations.svelte"),
	() => import("../../src/routes/docs/dark-mode.svx"),
	() => import("../../src/routes/docs/upgrading.svx"),
	() => import("../../src/routes/docs/padding.svx"),
	() => import("../../src/routes/docs/spacing.svelte"),
	() => import("../../src/routes/docs/margin.svelte"),
	() => import("../../src/routes/docs/test.svx")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/todos/index.svelte
	[/^\/todos\/?$/, [c[0], c[3]], [c[1]], null, 'todos'],

	// src/routes/docs/responsive-design.svelte
	[/^\/docs\/responsive-design\/?$/, [c[4], c[5]], []],

	// src/routes/docs/installing-scss.svelte
	[/^\/docs\/installing-scss\/?$/, [c[4], c[6]], []],

	// src/routes/docs/pseudo-elements.svelte
	[/^\/docs\/pseudo-elements\/?$/, [c[4], c[7]], []],

	// src/routes/docs/getting-bridge.svx
	[/^\/docs\/getting-bridge\/?$/, [c[4], c[8]], []],

	// src/routes/docs/animations.svelte
	[/^\/docs\/animations\/?$/, [c[4], c[9]], []],

	// src/routes/docs/dark-mode.svx
	[/^\/docs\/dark-mode\/?$/, [c[4], c[10]], []],

	// src/routes/docs/upgrading.svx
	[/^\/docs\/upgrading\/?$/, [c[4], c[11]], []],

	// src/routes/docs/padding.svx
	[/^\/docs\/padding\/?$/, [c[4], c[12]], []],

	// src/routes/docs/spacing.svelte
	[/^\/docs\/spacing\/?$/, [c[4], c[13]], []],

	// src/routes/docs/margin.svelte
	[/^\/docs\/margin\/?$/, [c[4], c[14]], []],

	// src/routes/docs/test.svx
	[/^\/docs\/test\/?$/, [c[4], c[15]], []]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];