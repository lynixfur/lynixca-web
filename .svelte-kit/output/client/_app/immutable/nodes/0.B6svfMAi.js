import{s as j,n as b,o as Z,c as ee,d as P,u as Q,g as X,e as Y}from"../chunks/scheduler.Bmg8oFKD.js";import{S as q,i as B,e as $,s as D,c as k,a as C,k as E,f as L,d as _,l as h,g as w,h as p,z as te,m as I,t as V,b as A,j as ne,n as T,o as se,p as M,r as le,v as F,w as J,x as O,y as R}from"../chunks/index.B1-yeNeU.js";import{p as ae}from"../chunks/stores.Ch8igdoi.js";function ie(r){let e,t,n='<a href="/" class="font-semibold text-lg"><img src="/LynixLogo.svg" alt="lynix" class="h-14 w-14"/></a>',s,i,a='<svg height="24px" width="24px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg>',u,l;return{c(){e=$("header"),t=$("nav"),t.innerHTML=n,s=D(),i=$("button"),i.innerHTML=a,this.h()},l(o){e=k(o,"HEADER",{class:!0});var f=C(e);t=k(f,"NAV",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-it4ght"&&(t.innerHTML=n),s=L(f),i=k(f,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),E(i)!=="svelte-meag4x"&&(i.innerHTML=a),f.forEach(_),this.h()},h(){h(t,"class","flex items-center space-x-8"),h(i,"class","nav-button hidden"),h(i,"aria-label","Toggle Navigation"),h(e,"class","text-white items-center py-14 md:flex hidden")},m(o,f){w(o,e,f),p(e,t),p(e,s),p(e,i),u||(l=te(i,"click",r[0]),u=!0)},p:b,i:b,o:b,d(o){o&&_(e),u=!1,l()}}}function re(r){return[()=>{}]}class oe extends q{constructor(e){super(),B(this,e,re,ie,j,{})}}function G(r){let e,t,n,s,i,a,u=`Attention! Sticker production has stopped due to a event plan change,\r
		stickers are now strictly reserved for FE 2024 Attendees!`;return{c(){e=$("div"),t=V("Lynix is going to Animaritime in "),n=V(r[0]),s=V(` days! Watch out for a\r
		Lynix sticker, 1 left!`),i=D(),a=$("div"),a.textContent=u,this.h()},l(l){e=k(l,"DIV",{class:!0});var o=C(e);t=A(o,"Lynix is going to Animaritime in "),n=A(o,r[0]),s=A(o,` days! Watch out for a\r
		Lynix sticker, 1 left!`),o.forEach(_),i=L(l),a=k(l,"DIV",{class:!0,"data-svelte-h":!0}),E(a)!=="svelte-1ibqybu"&&(a.textContent=u),this.h()},h(){h(e,"class","hidden bg-cyan-900 py-2 px-5 max-w-[800px] md:rounded-full rounded-xl font-semibold -ml-1 md:mt-0 mt-10"),h(a,"class","hidden bg-red-900 py-2 px-5 max-w-[800px] md:rounded-full rounded-xl font-semibold -ml-1 md:mt-5 mt-10")},m(l,o){w(l,e,o),p(e,t),p(e,n),p(e,s),w(l,i,o),w(l,a,o)},p(l,o){o&1&&ne(n,l[0])},d(l){l&&(_(e),_(i),_(a))}}}function ue(r){let e,t=r[0]>0&&G(r);return{c(){t&&t.c(),e=I()},l(n){t&&t.l(n),e=I()},m(n,s){t&&t.m(n,s),w(n,e,s)},p(n,[s]){n[0]>0?t?t.p(n,s):(t=G(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:b,o:b,d(n){n&&_(e),t&&t.d(n)}}}function ce(r,e,t){let n=0;const s=new Date("June 29, 2024 00:00:00").getTime();function i(){const u=s-new Date().getTime();t(0,n=Math.floor(u/(1e3*60*60*24)))}return Z(()=>{i();const a=setInterval(i,1e3);return()=>clearInterval(a)}),[n]}class fe extends q{constructor(e){super(),B(this,e,ce,ue,j,{})}}function de(r){let e;const t=r[2].default,n=P(t,r,r[1],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&2)&&Q(n,t,s,s[1],e?Y(t,s[1],i,null):X(s[1]),null)},i(s){e||(M(n,s),e=!0)},o(s){T(n,s),e=!1},d(s){n&&n.d(s)}}}function me(r){var S,z,U;let e,t,n,s,i='<div id="stars"></div> <div id="stars2"></div> <div id="stars3"></div>',a,u,l,o,f,N,x,d=(((S=r[0].url)==null?void 0:S.pathname)=="/"||((z=r[0].url)==null?void 0:z.pathname)=="/station"||((U=r[0].url)==null?void 0:U.pathname)=="/station/")&&K();l=new oe({}),f=new fe({});const H=r[2].default,m=P(H,r,r[1],null);return{c(){e=$("div"),t=$("div"),d&&d.c(),n=D(),s=$("div"),s.innerHTML=i,a=D(),u=$("div"),F(l.$$.fragment),o=D(),F(f.$$.fragment),N=D(),m&&m.c(),this.h()},l(c){e=k(c,"DIV",{class:!0});var y=C(e);t=k(y,"DIV",{class:!0});var v=C(t);d&&d.l(v),n=L(v),s=k(v,"DIV",{class:!0,"data-svelte-h":!0}),E(s)!=="svelte-16mq1k8"&&(s.innerHTML=i),a=L(v),u=k(v,"DIV",{class:!0});var g=C(u);J(l.$$.fragment,g),o=L(g),J(f.$$.fragment,g),N=L(g),m&&m.l(g),g.forEach(_),v.forEach(_),y.forEach(_),this.h()},h(){h(s,"class","background-container w-full"),h(u,"class","z-50 md:w-3/4 w-full md:px-0 px-7"),h(t,"class","min-h-screen flex justify-center"),h(e,"class","text-white bg-neutral-950")},m(c,y){w(c,e,y),p(e,t),d&&d.m(t,null),p(t,n),p(t,s),p(t,a),p(t,u),O(l,u,null),p(u,o),O(f,u,null),p(u,N),m&&m.m(u,null),x=!0},p(c,y){var v,g,W;((v=c[0].url)==null?void 0:v.pathname)=="/"||((g=c[0].url)==null?void 0:g.pathname)=="/station"||((W=c[0].url)==null?void 0:W.pathname)=="/station/"?d||(d=K(),d.c(),d.m(t,n)):d&&(d.d(1),d=null),m&&m.p&&(!x||y&2)&&Q(m,H,c,c[1],x?Y(H,c[1],y,null):X(c[1]),null)},i(c){x||(M(l.$$.fragment,c),M(f.$$.fragment,c),M(m,c),x=!0)},o(c){T(l.$$.fragment,c),T(f.$$.fragment,c),T(m,c),x=!1},d(c){c&&_(e),d&&d.d(),R(l),R(f),m&&m.d(c)}}}function K(r){return{c:b,l:b,m:b,d:b}}function pe(r){let e,t,n,s;const i=[me,de],a=[];function u(l,o){var f;return((f=l[0].url)==null?void 0:f.pathname)!="/lcm/overlay"?0:1}return e=u(r),t=a[e]=i[e](r),{c(){t.c(),n=I()},l(l){t.l(l),n=I()},m(l,o){a[e].m(l,o),w(l,n,o),s=!0},p(l,[o]){let f=e;e=u(l),e===f?a[e].p(l,o):(le(),T(a[f],1,1,()=>{a[f]=null}),se(),t=a[e],t?t.p(l,o):(t=a[e]=i[e](l),t.c()),M(t,1),t.m(n.parentNode,n))},i(l){s||(M(t),s=!0)},o(l){T(t),s=!1},d(l){l&&_(n),a[e].d(l)}}}function _e(r,e,t){let n;ee(r,ae,a=>t(0,n=a));let{$$slots:s={},$$scope:i}=e;return r.$$set=a=>{"$$scope"in a&&t(1,i=a.$$scope)},[n,i,s]}class be extends q{constructor(e){super(),B(this,e,_e,pe,j,{})}}export{be as component};