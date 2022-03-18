import { c as create_ssr_component } from "../../../chunks/index-0a196191.js";
import { d as dev, b as browser } from "../../../chunks/env-14926626.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Installing_scss = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Installing SCSS</title>`, ""}`, ""}

<div class="${"content"}">Some docs on installing SCSS</div>`;
});
export { Installing_scss as default, hydrate, prerender, router };
