import{S as Pt,i as Ot,s as It,e as l,t as s,k as c,c as r,a as i,h as n,d as t,m as u,b as Ze,g as p,G as a,L as et}from"../../chunks/vendor-c6709e0e.js";function Wt(_t){let y,de,K,S,ke,Q,C,he,U,x,fe,V,d,me,B,ye,ve,H,ge,we,M,Ee,_e,F,be,Se,X,T,Ce,Y,E,bt=`<code class="language-scss"><span class="token selector">p </span><span class="token punctuation">&#123;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$gray-800</span><span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token function">dark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// dark mode overrides go here</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$gray-200</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Z,v,xe,R,Te,De,ee,D,Pe,te,P,Oe,ae,g,Ie,L,We,je,se,O,Be,ne,_,St=`<code class="language-javascript"><span class="token keyword">let</span> mode<span class="token punctuation">;</span>

<span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
		localStorage<span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">'dark'</span> <span class="token operator">||</span>
		<span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">'theme'</span> <span class="token keyword">in</span> localStorage<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">'(prefers-color-scheme: dark)'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>matches<span class="token punctuation">)</span>
	<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		mode <span class="token operator">=</span> <span class="token string">'dark'</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
		mode <span class="token operator">=</span> <span class="token string">'light'</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,oe,h,He,N,Me,Fe,A,Re,Le,pe,b,Ct=`<code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">handleToggleDark</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span>theme <span class="token operator">===</span> <span class="token string">'dark'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		localStorage<span class="token punctuation">.</span>theme <span class="token operator">=</span> <span class="token string">'light'</span><span class="token punctuation">;</span>
		document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'data-theme'</span><span class="token punctuation">,</span> <span class="token string">'light'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		mode <span class="token operator">=</span> <span class="token string">'light'</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
		localStorage<span class="token punctuation">.</span>theme <span class="token operator">=</span> <span class="token string">'dark'</span><span class="token punctuation">;</span>
		document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'data-theme'</span><span class="token punctuation">,</span> <span class="token string">'dark'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		mode <span class="token operator">=</span> <span class="token string">'dark'</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,le,k,Ne,J,Ae,Je,$,$e,qe,q,Ge,ze,re,I,Ke,ie,f,Qe,G,Ue,Ve,z,Xe,Ye;return{c(){y=l("p"),de=s("It is very easy to style your application for dark-mode using BridgeCSS."),K=c(),S=l("p"),ke=s("For dark mode there are often two considerations:"),Q=c(),C=l("p"),he=s("1) What is the user-preferred theme set to by default (if any)"),U=c(),x=l("p"),fe=s("2) Is there a way to manually set the theme in the user interface"),V=c(),d=l("p"),me=s("With BridgeCSS these are both achieved via single mixin "),B=l("code"),ye=s("dark()"),ve=s(". With the "),H=l("code"),ge=s("dark"),we=s(" mixin it will first check to see if the user has set a default color mode set, then it will look for the "),M=l("code"),Ee=s("data-theme"),_e=s(" attribute. If it finds "),F=l("code"),be=s('data-theme="dark"'),Se=s(" it will render the dark mode styles regardless of the set preference in the browser."),X=c(),T=l("p"),Ce=s("To see it in action consider the following styles:"),Y=c(),E=l("pre"),Z=c(),v=l("p"),xe=s("So the procedure is to build your app, light-mode first and then apply the "),R=l("code"),Te=s("dark"),De=s(" mixin wherever you want to change a given style, or set of styles, in dark mode."),ee=c(),D=l("h2"),Pe=s("Toggling Dark Mode in Javascript"),te=c(),P=l("p"),Oe=s("It may be desired to provide the user a toggle for dark-mode rather than relying only on the system preference (eg. as on this website). For a web-application the easiest way to do that is to store / reference the users\u2019s preference from localStorage, although you could do it via database storage or in a cookie."),ae=c(),g=l("p"),Ie=s("Dark mode will be respected in Bridge if the "),L=l("code"),We=s('data-theme="dark"'),je=s(" property is set on the root document element. There are two steps to getting dark mode working properly. The first is getting the user\u2019s preferred scheme, and the second is handling a manual theme selection."),se=c(),O=l("p"),Be=s("For getting the user\u2019s theme we can run a hook on mount."),ne=c(),_=l("pre"),oe=c(),h=l("p"),He=s("Here we are getting the user setting, and using it to set the "),N=l("code"),Me=s("mode"),Fe=s(" variable. The "),A=l("code"),Re=s("mode"),Le=s(" variable can be used to eg. toggle between a sun and a moon icon in the user interface. Then when the user toggles the theme we run a handler:"),pe=c(),b=l("pre"),le=c(),k=l("p"),Ne=s("you may need to slightly adapt this to your javascript framework. Eg. in React you probably would want to keep the "),J=l("code"),Ae=s("mode"),Je=s(" as state. What we are doing here is setting the "),$=l("code"),$e=s("data-theme"),qe=s(" property on the root document element. Then our mixin "),q=l("code"),Ge=s("dark()"),ze=s(" will respond to that value preferrentially over the user\u2019s default theme."),re=c(),I=l("h2"),Ke=s("Compared with utility-first"),ie=c(),f=l("p"),Qe=s("In the utility-first approach you must supply the "),G=l("code"),Ue=s("dark:"),Ve=s(" prefix on every dark mode style that is used in a given className. This can lead to exteremly long lists of classNames in more complex cases. Whereas in the BridgeCSS approach you just need to declare every dark mode style under the same "),z=l("code"),Xe=s("dark"),Ye=s(" mixin, reducing duplication and improving readability."),this.h()},l(e){y=r(e,"P",{});var o=i(y);de=n(o,"It is very easy to style your application for dark-mode using BridgeCSS."),o.forEach(t),K=u(e),S=r(e,"P",{});var tt=i(S);ke=n(tt,"For dark mode there are often two considerations:"),tt.forEach(t),Q=u(e),C=r(e,"P",{});var at=i(C);he=n(at,"1) What is the user-preferred theme set to by default (if any)"),at.forEach(t),U=u(e),x=r(e,"P",{});var st=i(x);fe=n(st,"2) Is there a way to manually set the theme in the user interface"),st.forEach(t),V=u(e),d=r(e,"P",{});var m=i(d);me=n(m,"With BridgeCSS these are both achieved via single mixin "),B=r(m,"CODE",{});var nt=i(B);ye=n(nt,"dark()"),nt.forEach(t),ve=n(m,". With the "),H=r(m,"CODE",{});var ot=i(H);ge=n(ot,"dark"),ot.forEach(t),we=n(m," mixin it will first check to see if the user has set a default color mode set, then it will look for the "),M=r(m,"CODE",{});var pt=i(M);Ee=n(pt,"data-theme"),pt.forEach(t),_e=n(m," attribute. If it finds "),F=r(m,"CODE",{});var lt=i(F);be=n(lt,'data-theme="dark"'),lt.forEach(t),Se=n(m," it will render the dark mode styles regardless of the set preference in the browser."),m.forEach(t),X=u(e),T=r(e,"P",{});var rt=i(T);Ce=n(rt,"To see it in action consider the following styles:"),rt.forEach(t),Y=u(e),E=r(e,"PRE",{class:!0});var xt=i(E);xt.forEach(t),Z=u(e),v=r(e,"P",{});var ce=i(v);xe=n(ce,"So the procedure is to build your app, light-mode first and then apply the "),R=r(ce,"CODE",{});var it=i(R);Te=n(it,"dark"),it.forEach(t),De=n(ce," mixin wherever you want to change a given style, or set of styles, in dark mode."),ce.forEach(t),ee=u(e),D=r(e,"H2",{});var ct=i(D);Pe=n(ct,"Toggling Dark Mode in Javascript"),ct.forEach(t),te=u(e),P=r(e,"P",{});var ut=i(P);Oe=n(ut,"It may be desired to provide the user a toggle for dark-mode rather than relying only on the system preference (eg. as on this website). For a web-application the easiest way to do that is to store / reference the users\u2019s preference from localStorage, although you could do it via database storage or in a cookie."),ut.forEach(t),ae=u(e),g=r(e,"P",{});var ue=i(g);Ie=n(ue,"Dark mode will be respected in Bridge if the "),L=r(ue,"CODE",{});var dt=i(L);We=n(dt,'data-theme="dark"'),dt.forEach(t),je=n(ue," property is set on the root document element. There are two steps to getting dark mode working properly. The first is getting the user\u2019s preferred scheme, and the second is handling a manual theme selection."),ue.forEach(t),se=u(e),O=r(e,"P",{});var kt=i(O);Be=n(kt,"For getting the user\u2019s theme we can run a hook on mount."),kt.forEach(t),ne=u(e),_=r(e,"PRE",{class:!0});var Tt=i(_);Tt.forEach(t),oe=u(e),h=r(e,"P",{});var W=i(h);He=n(W,"Here we are getting the user setting, and using it to set the "),N=r(W,"CODE",{});var ht=i(N);Me=n(ht,"mode"),ht.forEach(t),Fe=n(W," variable. The "),A=r(W,"CODE",{});var ft=i(A);Re=n(ft,"mode"),ft.forEach(t),Le=n(W," variable can be used to eg. toggle between a sun and a moon icon in the user interface. Then when the user toggles the theme we run a handler:"),W.forEach(t),pe=u(e),b=r(e,"PRE",{class:!0});var Dt=i(b);Dt.forEach(t),le=u(e),k=r(e,"P",{});var w=i(k);Ne=n(w,"you may need to slightly adapt this to your javascript framework. Eg. in React you probably would want to keep the "),J=r(w,"CODE",{});var mt=i(J);Ae=n(mt,"mode"),mt.forEach(t),Je=n(w," as state. What we are doing here is setting the "),$=r(w,"CODE",{});var yt=i($);$e=n(yt,"data-theme"),yt.forEach(t),qe=n(w," property on the root document element. Then our mixin "),q=r(w,"CODE",{});var vt=i(q);Ge=n(vt,"dark()"),vt.forEach(t),ze=n(w," will respond to that value preferrentially over the user\u2019s default theme."),w.forEach(t),re=u(e),I=r(e,"H2",{});var gt=i(I);Ke=n(gt,"Compared with utility-first"),gt.forEach(t),ie=u(e),f=r(e,"P",{});var j=i(f);Qe=n(j,"In the utility-first approach you must supply the "),G=r(j,"CODE",{});var wt=i(G);Ue=n(wt,"dark:"),wt.forEach(t),Ve=n(j," prefix on every dark mode style that is used in a given className. This can lead to exteremly long lists of classNames in more complex cases. Whereas in the BridgeCSS approach you just need to declare every dark mode style under the same "),z=r(j,"CODE",{});var Et=i(z);Xe=n(Et,"dark"),Et.forEach(t),Ye=n(j," mixin, reducing duplication and improving readability."),j.forEach(t),this.h()},h(){Ze(E,"class","language-scss"),Ze(_,"class","language-javascript"),Ze(b,"class","language-javascript")},m(e,o){p(e,y,o),a(y,de),p(e,K,o),p(e,S,o),a(S,ke),p(e,Q,o),p(e,C,o),a(C,he),p(e,U,o),p(e,x,o),a(x,fe),p(e,V,o),p(e,d,o),a(d,me),a(d,B),a(B,ye),a(d,ve),a(d,H),a(H,ge),a(d,we),a(d,M),a(M,Ee),a(d,_e),a(d,F),a(F,be),a(d,Se),p(e,X,o),p(e,T,o),a(T,Ce),p(e,Y,o),p(e,E,o),E.innerHTML=bt,p(e,Z,o),p(e,v,o),a(v,xe),a(v,R),a(R,Te),a(v,De),p(e,ee,o),p(e,D,o),a(D,Pe),p(e,te,o),p(e,P,o),a(P,Oe),p(e,ae,o),p(e,g,o),a(g,Ie),a(g,L),a(L,We),a(g,je),p(e,se,o),p(e,O,o),a(O,Be),p(e,ne,o),p(e,_,o),_.innerHTML=St,p(e,oe,o),p(e,h,o),a(h,He),a(h,N),a(N,Me),a(h,Fe),a(h,A),a(A,Re),a(h,Le),p(e,pe,o),p(e,b,o),b.innerHTML=Ct,p(e,le,o),p(e,k,o),a(k,Ne),a(k,J),a(J,Ae),a(k,Je),a(k,$),a($,$e),a(k,qe),a(k,q),a(q,Ge),a(k,ze),p(e,re,o),p(e,I,o),a(I,Ke),p(e,ie,o),p(e,f,o),a(f,Qe),a(f,G),a(G,Ue),a(f,Ve),a(f,z),a(z,Xe),a(f,Ye)},p:et,i:et,o:et,d(e){e&&t(y),e&&t(K),e&&t(S),e&&t(Q),e&&t(C),e&&t(U),e&&t(x),e&&t(V),e&&t(d),e&&t(X),e&&t(T),e&&t(Y),e&&t(E),e&&t(Z),e&&t(v),e&&t(ee),e&&t(D),e&&t(te),e&&t(P),e&&t(ae),e&&t(g),e&&t(se),e&&t(O),e&&t(ne),e&&t(_),e&&t(oe),e&&t(h),e&&t(pe),e&&t(b),e&&t(le),e&&t(k),e&&t(re),e&&t(I),e&&t(ie),e&&t(f)}}}class Bt extends Pt{constructor(y){super();Ot(this,y,null,Wt,It,{})}}export{Bt as default};
