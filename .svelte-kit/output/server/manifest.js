export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-d7b6dc1c.js","js":["start-d7b6dc1c.js","chunks/vendor-c6709e0e.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "todos",
				pattern: /^\/todos\/?$/,
				params: null,
				path: "/todos",
				shadow: () => import('./entries/endpoints/todos/index.ts.js'),
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "docs/responsive-design",
				pattern: /^\/docs\/responsive-design\/?$/,
				params: null,
				path: "/docs/responsive-design",
				shadow: null,
				a: [4,5],
				b: []
			},
			{
				type: 'page',
				key: "docs/installing-scss",
				pattern: /^\/docs\/installing-scss\/?$/,
				params: null,
				path: "/docs/installing-scss",
				shadow: null,
				a: [4,6],
				b: []
			},
			{
				type: 'page',
				key: "docs/pseudo-elements",
				pattern: /^\/docs\/pseudo-elements\/?$/,
				params: null,
				path: "/docs/pseudo-elements",
				shadow: null,
				a: [4,7],
				b: []
			},
			{
				type: 'page',
				key: "docs/getting-bridge",
				pattern: /^\/docs\/getting-bridge\/?$/,
				params: null,
				path: "/docs/getting-bridge",
				shadow: null,
				a: [4,8],
				b: []
			},
			{
				type: 'page',
				key: "docs/animations",
				pattern: /^\/docs\/animations\/?$/,
				params: null,
				path: "/docs/animations",
				shadow: null,
				a: [4,9],
				b: []
			},
			{
				type: 'page',
				key: "docs/dark-mode",
				pattern: /^\/docs\/dark-mode\/?$/,
				params: null,
				path: "/docs/dark-mode",
				shadow: null,
				a: [4,10],
				b: []
			},
			{
				type: 'page',
				key: "docs/upgrading",
				pattern: /^\/docs\/upgrading\/?$/,
				params: null,
				path: "/docs/upgrading",
				shadow: null,
				a: [4,11],
				b: []
			},
			{
				type: 'page',
				key: "docs/padding",
				pattern: /^\/docs\/padding\/?$/,
				params: null,
				path: "/docs/padding",
				shadow: null,
				a: [4,12],
				b: []
			},
			{
				type: 'page',
				key: "docs/spacing",
				pattern: /^\/docs\/spacing\/?$/,
				params: null,
				path: "/docs/spacing",
				shadow: null,
				a: [4,13],
				b: []
			},
			{
				type: 'page',
				key: "docs/margin",
				pattern: /^\/docs\/margin\/?$/,
				params: null,
				path: "/docs/margin",
				shadow: null,
				a: [4,14],
				b: []
			},
			{
				type: 'page',
				key: "docs/test",
				pattern: /^\/docs\/test\/?$/,
				params: null,
				path: "/docs/test",
				shadow: null,
				a: [4,15],
				b: []
			}
		]
	}
};
