import{S as Y,i as Z,s as $,e as n,t as L,k as j,c as i,a as c,h as I,d as o,m as G,b as t,g as N,G as a,K as ee,L as X,v as te,M as x,N as M}from"./vendor-c6709e0e.js";function se(d){let e,s;return{c(){e=x("svg"),s=x("path"),this.h()},l(l){e=M(l,"svg",{fill:!0,stroke:!0,viewBox:!0,xmlns:!0,class:!0});var r=c(e);s=M(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),c(s).forEach(o),r.forEach(o),this.h()},h(){t(s,"stroke-linecap","round"),t(s,"stroke-linejoin","round"),t(s,"stroke-width","2"),t(s,"d","M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"),t(e,"fill","none"),t(e,"stroke","currentColor"),t(e,"viewBox","0 0 24 24"),t(e,"xmlns","http://www.w3.org/2000/svg"),t(e,"class","svelte-1qgo7ev")},m(l,r){N(l,e,r),a(e,s)},d(l){l&&o(e)}}}function re(d){let e,s;return{c(){e=x("svg"),s=x("path"),this.h()},l(l){e=M(l,"svg",{fill:!0,stroke:!0,viewBox:!0,xmlns:!0,class:!0});var r=c(e);s=M(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),c(s).forEach(o),r.forEach(o),this.h()},h(){t(s,"stroke-linecap","round"),t(s,"stroke-linejoin","round"),t(s,"stroke-width","2"),t(s,"d","M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"),t(e,"fill","none"),t(e,"stroke","currentColor"),t(e,"viewBox","0 0 24 24"),t(e,"xmlns","http://www.w3.org/2000/svg"),t(e,"class","svelte-1qgo7ev")},m(l,r){N(l,e,r),a(e,s)},d(l){l&&o(e)}}}function le(d){let e,s,l,r,q,_,p,u,E,g,A,B,w,m,H,C,b,k,D,T;function z(h,f){return h[1]==="dark"?re:se}let S=z(d),v=S(d);return{c(){e=n("header"),s=n("div"),l=n("h1"),r=n("a"),q=L("BridgeCSS"),_=j(),p=n("nav"),u=n("ul"),E=n("li"),g=n("a"),A=L("Docs"),B=j(),w=n("li"),m=n("a"),H=L("Github"),C=j(),b=n("li"),k=n("button"),v.c(),this.h()},l(h){e=i(h,"HEADER",{"data-sticky":!0,class:!0});var f=c(e);s=i(f,"DIV",{});var U=c(s);l=i(U,"H1",{class:!0});var V=c(l);r=i(V,"A",{href:!0});var K=c(r);q=I(K,"BridgeCSS"),K.forEach(o),V.forEach(o),U.forEach(o),_=G(f),p=i(f,"NAV",{class:!0});var O=c(p);u=i(O,"UL",{class:!0});var y=c(u);E=i(y,"LI",{class:!0});var R=c(E);g=i(R,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var F=c(g);A=I(F,"Docs"),F.forEach(o),R.forEach(o),B=G(y),w=i(y,"LI",{class:!0});var J=c(w);m=i(J,"A",{href:!0,class:!0});var P=c(m);H=I(P,"Github"),P.forEach(o),J.forEach(o),C=G(y),b=i(y,"LI",{class:!0});var Q=c(b);k=i(Q,"BUTTON",{});var W=c(k);v.l(W),W.forEach(o),Q.forEach(o),y.forEach(o),O.forEach(o),f.forEach(o),this.h()},h(){t(r,"href","/"),t(l,"class","svelte-1qgo7ev"),t(g,"sveltekit:prefetch",""),t(g,"href","/docs/installing-scss"),t(g,"class","svelte-1qgo7ev"),t(E,"class","svelte-1qgo7ev"),t(m,"href","https://github.com/wbunting/bridgecss"),t(m,"class","svelte-1qgo7ev"),t(w,"class","svelte-1qgo7ev"),t(b,"class","svelte-1qgo7ev"),t(u,"class","svelte-1qgo7ev"),t(p,"class","svelte-1qgo7ev"),t(e,"data-sticky",d[0]),t(e,"class","svelte-1qgo7ev")},m(h,f){N(h,e,f),a(e,s),a(s,l),a(l,r),a(r,q),a(e,_),a(e,p),a(p,u),a(u,E),a(E,g),a(g,A),a(u,B),a(u,w),a(w,m),a(m,H),a(u,C),a(u,b),a(b,k),v.m(k,null),D||(T=ee(k,"click",d[2]),D=!0)},p(h,[f]){S!==(S=z(h))&&(v.d(1),v=S(h),v&&(v.c(),v.m(k,null))),f&1&&t(e,"data-sticky",h[0])},i:X,o:X,d(h){h&&o(e),v.d(),D=!1,T()}}}function ae(d,e,s){let{sticky:l=!1}=e,r;te(()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?s(1,r="dark"):s(1,r="light")});const q=()=>{localStorage.theme==="dark"?(localStorage.theme="light",document.documentElement.setAttribute("data-theme","light"),s(1,r="light")):(localStorage.theme="dark",document.documentElement.setAttribute("data-theme","dark"),s(1,r="dark"))};return d.$$set=_=>{"sticky"in _&&s(0,l=_.sticky)},[l,r,q]}class ce extends Y{constructor(e){super();Z(this,e,ae,le,$,{sticky:0})}}export{ce as H};
