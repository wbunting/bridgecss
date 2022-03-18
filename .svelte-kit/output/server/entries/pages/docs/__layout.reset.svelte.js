import { g as getContext, c as create_ssr_component, d as subscribe, v as validate_component, b as each, e as escape, a as add_attribute } from "../../../chunks/index-0a196191.js";
import Case from "case";
import { H as Header } from "../../../chunks/resets-efca1b8b.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var __layout_reset_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-18b8bgl p{margin-top:1.1428571429em;margin-bottom:1.1428571429em}article.svelte-18b8bgl h1{font-size:2.1428571429em;margin-top:0;margin-bottom:1.7142857143em;line-height:1.4}article.svelte-18b8bgl h2{font-size:1.4285714286em;margin-top:1.6em;margin-bottom:0.8em;line-height:1.4}article.svelte-18b8bgl h3{font-size:1.2857142857em;margin-top:1.5555555556em;margin-bottom:0.4444444444em;line-height:1.5555555556}article.svelte-18b8bgl code{font-size:0.8571428571em;background-color:#1e293b}article.svelte-18b8bgl pre{font-size:0.8571428571em;line-height:1.6666666667;margin-top:1.6666666667em;margin-bottom:1.6666666667em;border-radius:0.25rem;padding-top:0.6666666667em;padding-right:1em;padding-bottom:0.6666666667em;padding-left:1em;border-radius:0.75rem;padding:1.25rem;background-color:#1e293b}article.svelte-18b8bgl ol,article.svelte-18b8bgl ul{margin-top:1.1428571429em;margin-bottom:1.1428571429em;padding-left:1.5714285714em}article.svelte-18b8bgl ol>li,article.svelte-18b8bgl ul>li{padding-left:0.4285714286em}article.svelte-18b8bgl li{margin-top:0.2857142857em;margin-bottom:0.2857142857em}main.svelte-18b8bgl.svelte-18b8bgl.svelte-18b8bgl{box-sizing:border-box;padding-left:2rem;padding-right:2rem;margin-left:auto;margin-right:auto;max-width:90rem}.sidebar.svelte-18b8bgl.svelte-18b8bgl.svelte-18b8bgl{position:fixed;display:block;z-index:20;width:19.5rem;padding-bottom:2.5rem;padding-left:2rem;padding-right:2rem;top:3.8125rem;left:max(0px, 50% - 45rem);font-size:0.875rem;line-height:1.25rem;line-height:1.5rem}.sidebar.svelte-18b8bgl ul li h5.svelte-18b8bgl.svelte-18b8bgl{margin-bottom:0.75rem;font-weight:700;color:#0f172a;text-transform:uppercase}@media(prefers-color-scheme: dark){:root:not([data-theme=light]):not([data-theme=dark]) .sidebar.svelte-18b8bgl ul li h5.svelte-18b8bgl.svelte-18b8bgl{color:#e2e8f0}}:root[data-theme=dark] .sidebar.svelte-18b8bgl ul li h5.svelte-18b8bgl.svelte-18b8bgl{color:#e2e8f0}.sidebar.svelte-18b8bgl ul li ul.svelte-18b8bgl.svelte-18b8bgl{border-left:1px solid #1e293b}.sidebar.svelte-18b8bgl ul li ul.svelte-18b8bgl>.svelte-18b8bgl:not(:last-child){margin-bottom:0.5rem}.sidebar.svelte-18b8bgl ul li ul li a.svelte-18b8bgl.svelte-18b8bgl{padding-left:1rem;color:#94a3b8;transition:color 0.2s linear}.sidebar.svelte-18b8bgl ul li ul li a.svelte-18b8bgl.svelte-18b8bgl:hover{color:#cbd5e1;margin-left:-1px;border-left:1px solid #64748b}.sidebar.svelte-18b8bgl ul li ul li a[data-active=true].svelte-18b8bgl.svelte-18b8bgl{font-weight:600;color:#38bdf8;margin-left:-1px;border-left:1px solid #38bdf8}.content.svelte-18b8bgl.svelte-18b8bgl.svelte-18b8bgl{min-height:100vh;margin-left:19.5rem;border-left:1px solid #1e293b;border-right:1px solid #1e293b;padding-bottom:5rem}.content.svelte-18b8bgl h3.section.svelte-18b8bgl.svelte-18b8bgl{text-transform:uppercase;font-size:0.875rem;line-height:1.25rem;color:#38bdf8}",
  map: null
};
const _layout_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url.pathname;
  let activePage = null;
  let docsIndex = [
    {
      name: "Getting Started",
      pages: [
        { name: "Getting Bridge" },
        { name: "Installing SCSS" },
        { name: "Upgrading" }
      ]
    },
    {
      name: "Core Features",
      pages: [
        { name: "Dark Mode" },
        { name: "Responsive Design" },
        { name: "Pseudo Elements" },
        { name: "Animations" }
      ]
    },
    {
      name: "Spacing",
      pages: [{ name: "Padding" }, { name: "Margin" }]
    }
  ];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(Header, "Header").$$render($$result, { sticky: true }, {}, {})}

<main class="${"svelte-18b8bgl"}"><div class="${"sidebar svelte-18b8bgl"}"><nav><ul class="${"svelte-18b8bgl"}">${each(docsIndex, (section) => {
    return `<li class="${"svelte-18b8bgl"}"><h5 class="${"svelte-18b8bgl"}">${escape(section.name)}</h5>
						<ul class="${"svelte-18b8bgl"}">${each(section.pages, (item) => {
      return `<li class="${"svelte-18b8bgl"}"><a sveltekit:prefetch${add_attribute("href", `/docs/${Case.kebab(item.name)}`, 0)}${add_attribute("data-active", $page.url.pathname === `/docs/${Case.kebab(item.name)}`, 0)} class="${"svelte-18b8bgl"}">${escape(item.name)}</a>
								</li>`;
    })}</ul>
					</li>`;
  })}</ul></nav></div>
	<article class="${"content svelte-18b8bgl"}"><h3 class="${"section svelte-18b8bgl"}">${escape(activePage?.section)}</h3>
		<h1>${escape(activePage?.name)}</h1>
		${slots.default ? slots.default({}) : ``}</article></main>

${$$result.head += `${$$result.title = `<title>${escape(activePage?.name)} - BridgeCSS</title>`, ""}`, ""}`;
});
export { _layout_reset as default };
