import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import moment from "moment";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let countdown = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  moment("2039-06-27T00:00:00");
  return `<div class="flex flex-col mt-20"><h1 class="text-6xl font-semibold mb-5 text-cyan-600" data-svelte-h="svelte-2m1xkg">The Station</h1> <h2 class="text-3xl text-neutral-300 hidden">${escape(countdown.years)} Years ${escape(countdown.days)} Days ${escape(countdown.hours)} Hours ${escape(countdown.minutes)} Minutes ${escape(countdown.seconds)} Seconds</h2> <p class="pt-4 text-lg grow text-neutral-400" data-svelte-h="svelte-bcjks7">Something awaits here.</p> <a href="/" class="w-[150px] mt-10 rounded-full bg-cyan-800 hover:bg-cyan-900 transition-colors text-white font-bold py-2 px-5 text-center" data-svelte-h="svelte-utc931">Return Home</a></div>`;
});
export {
  Page as default
};
