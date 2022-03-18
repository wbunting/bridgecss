import { c as create_ssr_component, e as escape } from "../../../chunks/index-0a196191.js";
var upgrading_svx_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-umb3ed{color:#d1d5db}",
  map: null
};
const metadata = { "title": "Upgrading" };
const { title } = metadata;
const Upgrading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1>${escape(title)}</h1>
<p>How to ugrade BridgeCSS</p>
<h2 class="${"svelte-umb3ed"}">Manually by vendoring the styles</h2>
<h2 class="${"svelte-umb3ed"}">Using the NPM package</h2>
<p>You can run</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token string-property property">'b'</span><span class="token operator">:</span> <span class="token string">'foo'</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
export { Upgrading as default, metadata };
