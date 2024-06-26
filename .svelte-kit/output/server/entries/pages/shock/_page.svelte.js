import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "socket.io-client";
const css = {
  code: "hr.svelte-wlw0p{border:rgb(85, 85, 85) 1px solid}p.svelte-wlw0p{margin-top:5px}label.svelte-wlw0p{color:white;margin-top:5px;font-size:18px}input[type='number'].svelte-wlw0p,select.svelte-wlw0p{width:100px;padding:5px 5px;margin:8px 0;box-sizing:border-box;font-family:Cyber, sans-serif;font-weight:700;background-color:#202020;border:none;color:white}button.svelte-wlw0p{all:unset;background:#0ea5e9;color:#111111;padding:0.5rem 1rem;font-weight:700;font-size:18px}button.svelte-wlw0p:hover{background:#0284c7}.connected.svelte-wlw0p{color:green}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="min-h-screen p-5">${`<p class="text-4xl text-cyan-500 svelte-wlw0p" data-svelte-h="svelte-2uo03y">Access Denied!<br><span class="text-lg text-white">Verify your client ID!</span></p>`} </div>`;
});
export {
  Page as default
};
