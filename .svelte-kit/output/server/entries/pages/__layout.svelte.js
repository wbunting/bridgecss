import { c as create_ssr_component, v as validate_component } from "../../chunks/index-0a196191.js";
import { H as Header } from "../../chunks/resets-efca1b8b.js";
var prism = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-6j09x{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:80rem;margin:0 auto;box-sizing:border-box}footer.svelte-6j09x{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}@media(min-width: 480px){footer.svelte-6j09x{padding:40px 0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-6j09x"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-6j09x"}">BridgeCSS</footer>`;
});
export { _layout as default };
