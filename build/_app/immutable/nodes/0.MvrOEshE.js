import{s as A,n as k,o as P,c as R,d as W,u as F,g as J,e as O}from"../chunks/scheduler.wSyzJd0C.js";import{S as H,i as V,g as _,s as w,h as v,j as D,x as M,c as L,f as m,k as h,a as g,y as p,z as G,e as C,m as N,n as I,o as K,t as $,b as Q,d as y,p as X,r as j,u as S,v as B,w as q}from"../chunks/index.__w-K0yc.js";import{d as Y}from"../chunks/singletons.kjT-SOxK.js";function Z(r){let e,t,s=`<a href="/" class="font-semibold text-lg"><img src="/LynixLogo.svg" alt="lynix" class="h-14 w-14"/></a> <a href="/projects" class="font-semibold text-lg hover:text-cyan-600 transition-colors">Projects</a> <a href="/blog" class="font-semibold text-lg hover:text-cyan-600 transition-colors">Blog</a> <a href="/events" class="font-semibold text-lg hover:text-cyan-600 transition-colors flex items-center">Events
			<i class="fa fa-circle text-xs ml-2 text-cyan-700 animate-pulse" aria-hidden="true"></i></a> <a href="/station" class="flex items-center font-semibold text-lg hover:text-cyan-600 transition-colors">The Station <span class="ml-2 bg-cyan-700 text-white text-xs me-2 px-2.5 py-0.5 rounded-full font-bold">New</span></a> <a href="/about" class="font-semibold text-lg hover:text-cyan-600 transition-colors">About</a> <a href="/contact" class="font-semibold text-lg hover:text-cyan-600 transition-colors">Contact</a>`,n,a,i='<svg height="24px" width="24px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg>',u,l;return{c(){e=_("header"),t=_("nav"),t.innerHTML=s,n=w(),a=_("button"),a.innerHTML=i,this.h()},l(o){e=v(o,"HEADER",{class:!0});var c=D(e);t=v(c,"NAV",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-1aiueiq"&&(t.innerHTML=s),n=L(c),a=v(c,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),M(a)!=="svelte-meag4x"&&(a.innerHTML=i),c.forEach(m),this.h()},h(){h(t,"class","flex items-center space-x-8"),h(a,"class","nav-button hidden"),h(a,"aria-label","Toggle Navigation"),h(e,"class","text-white items-center py-14 md:flex hidden")},m(o,c){g(o,e,c),p(e,t),p(e,n),p(e,a),u||(l=G(a,"click",r[0]),u=!0)},p:k,i:k,o:k,d(o){o&&m(e),u=!1,l()}}}function ee(r){return[()=>{}]}class te extends H{constructor(e){super(),V(this,e,ee,Z,A,{})}}function z(r){let e,t,s,n,a,i,u="Attention! Sticker production has stopped due to a event plan change, stickers are now strictly reserved for FE 2024 Attendees!";return{c(){e=_("div"),t=N("Lynix is going to Animaritime in "),s=N(r[0]),n=N(" days! Watch out for a Lynix sticker, 1 left!"),a=w(),i=_("div"),i.textContent=u,this.h()},l(l){e=v(l,"DIV",{class:!0});var o=D(e);t=I(o,"Lynix is going to Animaritime in "),s=I(o,r[0]),n=I(o," days! Watch out for a Lynix sticker, 1 left!"),o.forEach(m),a=L(l),i=v(l,"DIV",{class:!0,"data-svelte-h":!0}),M(i)!=="svelte-1t5txc5"&&(i.textContent=u),this.h()},h(){h(e,"class","bg-cyan-900 py-2 px-5 max-w-[800px] md:rounded-full rounded-xl font-semibold -ml-1 md:mt-0 mt-10"),h(i,"class","hidden bg-red-900 py-2 px-5 max-w-[800px] md:rounded-full rounded-xl font-semibold -ml-1 md:mt-5 mt-10")},m(l,o){g(l,e,o),p(e,t),p(e,s),p(e,n),g(l,a,o),g(l,i,o)},p(l,o){o&1&&K(s,l[0])},d(l){l&&(m(e),m(a),m(i))}}}function se(r){let e,t=r[0]>0&&z(r);return{c(){t&&t.c(),e=C()},l(s){t&&t.l(s),e=C()},m(s,n){t&&t.m(s,n),g(s,e,n)},p(s,[n]){s[0]>0?t?t.p(s,n):(t=z(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:k,o:k,d(s){s&&m(e),t&&t.d(s)}}}function ne(r,e,t){let s=0;const n=new Date("June 29, 2024 00:00:00").getTime();function a(){const u=n-new Date().getTime();t(0,s=Math.floor(u/(1e3*60*60*24)))}return P(()=>{a();const i=setInterval(a,1e3);return()=>clearInterval(i)}),[s]}class ae extends H{constructor(e){super(),V(this,e,ne,se,A,{})}}const le=()=>{const r=Y;return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},updated:r.updated}},re={subscribe(r){return le().page.subscribe(r)}};function ie(r){let e;const t=r[2].default,s=W(t,r,r[1],null);return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,a){s&&s.m(n,a),e=!0},p(n,a){s&&s.p&&(!e||a&2)&&F(s,t,n,n[1],e?O(t,n[1],a,null):J(n[1]),null)},i(n){e||(y(s,n),e=!0)},o(n){$(s,n),e=!1},d(n){s&&s.d(n)}}}function oe(r){let e,t,s,n,a,i,u,l,o,c=r[0].url?.pathname=="/"&&U();a=new te({}),u=new ae({});const E=r[2].default,d=W(E,r,r[1],null);return{c(){e=_("div"),t=_("div"),c&&c.c(),s=w(),n=_("div"),j(a.$$.fragment),i=w(),j(u.$$.fragment),l=w(),d&&d.c(),this.h()},l(f){e=v(f,"DIV",{class:!0});var b=D(e);t=v(b,"DIV",{class:!0});var T=D(t);c&&c.l(T),s=L(T),n=v(T,"DIV",{class:!0});var x=D(n);S(a.$$.fragment,x),i=L(x),S(u.$$.fragment,x),l=L(x),d&&d.l(x),x.forEach(m),T.forEach(m),b.forEach(m),this.h()},h(){h(n,"class","z-50 md:w-3/4 w-full md:px-0 px-7"),h(t,"class","min-h-screen flex justify-center"),h(e,"class","text-white bg-neutral-950")},m(f,b){g(f,e,b),p(e,t),c&&c.m(t,null),p(t,s),p(t,n),B(a,n,null),p(n,i),B(u,n,null),p(n,l),d&&d.m(n,null),o=!0},p(f,b){f[0].url?.pathname=="/"?c||(c=U(),c.c(),c.m(t,s)):c&&(c.d(1),c=null),d&&d.p&&(!o||b&2)&&F(d,E,f,f[1],o?O(E,f[1],b,null):J(f[1]),null)},i(f){o||(y(a.$$.fragment,f),y(u.$$.fragment,f),y(d,f),o=!0)},o(f){$(a.$$.fragment,f),$(u.$$.fragment,f),$(d,f),o=!1},d(f){f&&m(e),c&&c.d(),q(a),q(u),d&&d.d(f)}}}function U(r){let e,t='<div id="stars"></div> <div id="stars2"></div> <div id="stars3"></div>';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-16mq1k8"&&(e.innerHTML=t),this.h()},h(){h(e,"class","background-container w-full")},m(s,n){g(s,e,n)},d(s){s&&m(e)}}}function ce(r){let e,t,s,n;const a=[oe,ie],i=[];function u(l,o){return l[0].url?.pathname!="/lcm/overlay"?0:1}return e=u(r),t=i[e]=a[e](r),{c(){t.c(),s=C()},l(l){t.l(l),s=C()},m(l,o){i[e].m(l,o),g(l,s,o),n=!0},p(l,[o]){let c=e;e=u(l),e===c?i[e].p(l,o):(X(),$(i[c],1,1,()=>{i[c]=null}),Q(),t=i[e],t?t.p(l,o):(t=i[e]=a[e](l),t.c()),y(t,1),t.m(s.parentNode,s))},i(l){n||(y(t),n=!0)},o(l){$(t),n=!1},d(l){l&&m(s),i[e].d(l)}}}function fe(r,e,t){let s;R(r,re,i=>t(0,s=i));let{$$slots:n={},$$scope:a}=e;return r.$$set=i=>{"$$scope"in i&&t(1,a=i.$$scope)},[s,a,n]}class pe extends H{constructor(e){super(),V(this,e,fe,ce,A,{})}}export{pe as component};