import { c as create_ssr_component } from "../../../chunks/index-0a196191.js";
const Dark_mode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>It is very easy to style your application for dark-mode using BridgeCSS. </p>
<p>For dark mode there are often two considerations:</p>
<p>1) What is the user-preferred theme set to by default (if any)</p>
<p>2) Is there a way to manually set the theme in the user interface</p>
<p>With BridgeCSS these are both achieved via single mixin <code>dark()</code>. With the <code>dark</code> mixin it will first check to see if the user has set a default color mode set, then it will look for the <code>data-theme</code> attribute. If it finds <code>data-theme=&quot;dark&quot;</code> it will render the dark mode styles regardless of the set preference in the browser.</p>
<p>To see it in action consider the following styles:</p>
<pre class="${"language-scss"}"><!-- HTML_TAG_START -->${`<code class="language-scss"><span class="token selector">p </span><span class="token punctuation">&#123;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$gray-800</span><span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token function">dark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// dark mode overrides go here</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$gray-200</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>So the procedure is to build your app, light-mode first and then apply the <code>dark</code> mixin wherever you want to change a given style, or set of styles, in dark mode. </p>
<h2>Toggling Dark Mode in Javascript</h2>
<p>It may be desired to provide the user a toggle for dark-mode rather than relying only on the system preference (eg. as on this website). For a web-application the easiest way to do that is to store / reference the users\u2019s preference from localStorage, although you could do it via database storage or in a cookie.</p>
<p>Dark mode will be respected in Bridge if the <code>data-theme=&quot;dark&quot;</code> property is set on the root document element. There are two steps to getting dark mode working properly. The first is getting the user\u2019s preferred scheme, and the second is handling a manual theme selection.</p>
<p>For getting the user\u2019s theme we can run a hook on mount.</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">let</span> mode<span class="token punctuation">;</span>

<span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
		localStorage<span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">'dark'</span> <span class="token operator">||</span>
		<span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">'theme'</span> <span class="token keyword">in</span> localStorage<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">'(prefers-color-scheme: dark)'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>matches<span class="token punctuation">)</span>
	<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		mode <span class="token operator">=</span> <span class="token string">'dark'</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
		mode <span class="token operator">=</span> <span class="token string">'light'</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Here we are getting the user setting, and using it to set the <code>mode</code> variable. The <code>mode</code> variable can be used to eg. toggle between a sun and a moon icon in the user interface. Then when the user toggles the theme we run a handler:</p>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">handleToggleDark</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">'dark'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		localStorage<span class="token punctuation">.</span>theme <span class="token operator">=</span> <span class="token string">'light'</span><span class="token punctuation">;</span>
		document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'data-theme'</span><span class="token punctuation">,</span> <span class="token string">'light'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		mode <span class="token operator">=</span> <span class="token string">'light'</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
		localStorage<span class="token punctuation">.</span>theme <span class="token operator">=</span> <span class="token string">'dark'</span><span class="token punctuation">;</span>
		document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'data-theme'</span><span class="token punctuation">,</span> <span class="token string">'dark'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		mode <span class="token operator">=</span> <span class="token string">'dark'</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>you may need to slightly adapt this to your javascript framework. Eg. in React you probably would want to keep the <code>mode</code> as state. What we are doing here is setting the <code>data-theme</code> property on the root document element. Then our mixin <code>dark()</code> will respond to that value preferrentially over the user\u2019s default theme. </p>
<h2>Compared with utility-first</h2>
<p>In the utility-first approach you must supply the <code>dark:</code> prefix on every dark mode style that is used in a given className. This can lead to exteremly long lists of classNames in more complex cases. Whereas in the BridgeCSS approach you just need to declare every dark mode style under the same <code>dark</code> mixin, reducing duplication and improving readability. </p>`;
});
export { Dark_mode as default };
