import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col mt-20" data-svelte-h="svelte-1ck32ez"><h1 class="text-6xl font-semibold mb-5 text-cyan-600">No Service</h1> <h2 class="text-3xl text-neutral-300">Website Unavailable</h2> <p class="pt-4 text-lg grow text-neutral-400">Lynix.ca is currently closed due to some issues, you can find me on my socials as <span class="text-blue-500 font-bold">lynixfur</span>!</p> <a href="/" class="hidden w-32 mt-10 rounded-full bg-cyan-800 hover:bg-cyan-900 transition-colors text-white font-bold py-2 px-5 text-center">Go Home</a> <img src="/lynix.png" class="hidden fixed bottom-0 right-48 w-64 mt-4" alt="lynix peeking in the corner of the screen"></div>`;
});
export {
  Page as default
};
