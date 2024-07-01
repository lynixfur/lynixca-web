import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let status = "Fetching status...";
  let statusClass = "text-cyan-500";
  return `<main class="flex py-10"><div class=""><div class="grid gap-4 grid-cols-1 md:grid-cols-3"><div class="my-16 flex flex-col items-start grow md:col-span-2"><div class="block md:flex items-center mb-5 space-x-0 md:space-x-3" data-svelte-h="svelte-fsq82v"><img src="/lynix-sticker.png" class="w-20 mb-1.5" alt="lynix"> <h1 class="text-6xl font-semibold text-neutral-100">Hi, I&#39;m Lynix!</h1></div> <p class="pt-4 text-lg grow text-neutral-400">As a proud member of the furry community, I believe in using technology to promote inclusivity. My IT expertise allows me to build bridges and create platforms that welcome diverse voices, fostering a more connected and understanding world.
					<br><br> <span class="${"text-sm font-semibold " + escape(statusClass, true)}">Lynx Network - ${escape(status)}</span></p> <div class="grid gap-5 grid-cols-5 mt-8" data-svelte-h="svelte-18z01r8"><a href="https://discord.com/users/885224265014738975" aria-label="Discord"><i class="fa-brands fa-discord text-4xl text-neutral-400"></i></a> <a href="https://t.me/lynixfur" aria-label="Telegram"><i class="fa-brands fa-telegram text-4xl text-neutral-400"></i></a> <a href="https://github.com/lynixfur" aria-label="GitHub"><i class="fa-brands fa-github text-4xl text-neutral-400"></i></a> <a href="https://twitter.com/lynixfur" aria-label="Twitter"><i class="fa-brands fa-twitter text-4xl text-neutral-400"></i></a> <a href="https://www.linkedin.com/in/anthony-roy-6316a624b/" aria-label="LinkedIn"><i class="fa-brands fa-linkedin text-4xl text-neutral-400"></i></a></div></div></div></div></main>`;
});
export {
  Page as default
};
