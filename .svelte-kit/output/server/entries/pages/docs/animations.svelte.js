import { c as create_ssr_component } from "../../../chunks/index-0a196191.js";
import { d as dev, b as browser } from "../../../chunks/env-14926626.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Animations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Animations</title>`, ""}`, ""}

<div class="${"content"}">Animaitons Docs</div>`;
});
export { Animations as default, hydrate, prerender, router };
