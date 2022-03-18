import { c as create_ssr_component } from "../../../chunks/index-0a196191.js";
import { d as dev, b as browser } from "../../../chunks/env-14926626.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Pseudo_elements = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Pseudo Elements</title>`, ""}`, ""}

<div class="${"content"}">Pseudo Elements Docs</div>`;
});
export { Pseudo_elements as default, hydrate, prerender, router };
