import { c as create_ssr_component, a as add_attribute } from "./index-0a196191.js";
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1qgo7ev.svelte-1qgo7ev{font-size:16pt}header.svelte-1qgo7ev.svelte-1qgo7ev{display:flex;justify-content:space-between;align-items:center;padding-left:1.25rem;padding-right:1.25rem}header[data-sticky=true].svelte-1qgo7ev.svelte-1qgo7ev{position:sticky;top:0;backdrop-filter:blur(8px);background-color:transparent;z-index:50}nav.svelte-1qgo7ev.svelte-1qgo7ev{display:flex;justify-content:center;position:relative}nav.svelte-1qgo7ev a.svelte-1qgo7ev{display:flex;height:100%;align-items:center;padding:0 1em;color:#9ca3af;font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}nav.svelte-1qgo7ev a.svelte-1qgo7ev:hover{color:#d1d5db}svg.svelte-1qgo7ev.svelte-1qgo7ev{width:1.5rem;height:1.5rem}ul.svelte-1qgo7ev.svelte-1qgo7ev{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background-size:contain}ul.svelte-1qgo7ev li.svelte-1qgo7ev{position:relative;height:100%;display:flex;align-items:center}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sticky = false } = $$props;
  if ($$props.sticky === void 0 && $$bindings.sticky && sticky !== void 0)
    $$bindings.sticky(sticky);
  $$result.css.add(css);
  return `<header${add_attribute("data-sticky", sticky, 0)} class="${"svelte-1qgo7ev"}"><div><h1 class="${"svelte-1qgo7ev"}"><a href="${"/"}">BridgeCSS</a></h1></div>

	<nav class="${"svelte-1qgo7ev"}"><ul class="${"svelte-1qgo7ev"}"><li class="${"svelte-1qgo7ev"}"><a sveltekit:prefetch href="${"/docs/installing-scss"}" class="${"svelte-1qgo7ev"}">Docs</a></li>
			<li class="${"svelte-1qgo7ev"}"><a href="${"https://github.com/wbunting/bridgecss"}" class="${"svelte-1qgo7ev"}">Github</a></li>
			<li class="${"svelte-1qgo7ev"}"><button>${`<svg fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1qgo7ev"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}"></path></svg>`}</button></li></ul></nav>
</header>`;
});
var app = "";
var resets = "";
export { Header as H };
