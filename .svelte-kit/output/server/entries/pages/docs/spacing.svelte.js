import { c as create_ssr_component } from "../../../chunks/index-0a196191.js";
import { d as dev, b as browser } from "../../../chunks/env-14926626.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Spacing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Spacing</title>`, ""}`, ""}

<div class="${"content"}">Spacing Docs</div>`;
});
export { Spacing as default, hydrate, prerender, router };
