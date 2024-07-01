import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="text-white items-center py-14 md:flex hidden"><nav class="flex items-center space-x-8" data-svelte-h="svelte-it4ght"><a href="/" class="font-semibold text-lg"><img src="/LynixLogo.svg" alt="lynix" class="h-14 w-14"></a> </nav>  <button class="nav-button hidden" aria-label="Toggle Navigation" data-svelte-h="svelte-meag4x"><svg height="24px" width="24px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button></header>`;
});
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$page.url?.pathname != "/lcm/overlay" ? `<div class="text-white bg-neutral-950"><div class="min-h-screen flex justify-center">${$page.url?.pathname == "/" || $page.url?.pathname == "/station" || $page.url?.pathname == "/station/" ? `` : ``} <div class="background-container w-full" data-svelte-h="svelte-16mq1k8"> <div id="stars"></div> <div id="stars2"></div> <div id="stars3"></div></div> <div class="z-50 md:w-3/4 w-full md:px-0 px-7">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}</div></div></div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
export {
  Layout as default
};
