import { c as create_ssr_component } from "../../../chunks/index-0a196191.js";
const Padding = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Basic usage</h2>
<h3>Adding padding to a single side</h3>
<p>If you want to add padding to a single side on an element you an use the mixins <code>pl</code> <code>pr</code> <code>pt</code> and <code>pb</code>. For example:</p>
<pre class="${"language-scss"}"><!-- HTML_TAG_START -->${`<code class="language-scss"><span class="token selector">div </span><span class="token punctuation">&#123;</span>
  <span class="token keyword">@include</span> <span class="token function">pl</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h3>Adding padding horizonatally or vertically</h3>
<p>There are two options for adding simultaneous vertical / horizontal padding. You can either use the separate mixins <code>px</code> and <code>py</code> which will add the appropriate padding along the single dimension. Or you can use the <code>pxy</code> mixin which will add padding both horizontally and vertically.</p>
<p>For example to add vertical-only padding:</p>
<pre class="${"language-scss"}"><!-- HTML_TAG_START -->${`<code class="language-scss"><span class="token selector">div </span><span class="token punctuation">&#123;</span>
    <span class="token keyword">@include</span> <span class="token function">py</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// or</span>

    <span class="token keyword">@include</span> <span class="token function">pxy</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>To add both horizontal and vertical padding we can do:</p>
<pre class="${"language-scss"}"><!-- HTML_TAG_START -->${`<code class="language-scss"><span class="token selector">div </span><span class="token punctuation">&#123;</span>
    <span class="token keyword">@include</span> <span class="token function">pxy</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// or</span>

    <span class="token keyword">@include</span> <span class="token function">px</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">@include</span> <span class="token function">py</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h3>Adding padding to all sides</h3>
<p>To add equal padding to all sides of an element you can use the <code>p</code> mixin. For example:</p>
<pre class="${"language-scss"}"><!-- HTML_TAG_START -->${`<code class="language-scss"><span class="token selector">div </span><span class="token punctuation">&#123;</span>
    <span class="token keyword">@include</span> <span class="token function">p</span><span class="token punctuation">(</span>4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2>With the <code>spacing</code> function</h2>
<p>All paddings are computed with the <code>spacing</code> function in BridgeCSS. This function computes a spacing scale that is universally respsected by the Bridge style scheme. Therefore if you want to add padding you can use that function rahter than than mixins should you desire:</p>
<pre class="${"language-scss"}"><!-- HTML_TAG_START -->${`<code class="language-scss"><span class="token selector">div </span><span class="token punctuation">&#123;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token function">spacing</span><span class="token punctuation">(</span>4<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token function">spacing</span><span class="token punctuation">(</span>4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The advantage to this approach is that the CSS reads more like vanilla CSS (eg. instead of hiding the selector behind the mixin). The downside is that in cases where you want to apply multiple styles (like <code>p</code>, <code>pxy</code>, <code>px</code> or <code>py</code>) you need to separate out multiple lines / calls to the <code>spacing</code> function.  </p>
<p>Our recommendation is to try both approaches and see what feels more natural to your coding style. </p>`;
});
export { Padding as default };
