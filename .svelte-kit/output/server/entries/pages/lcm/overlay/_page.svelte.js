import { c as create_ssr_component } from "../../../../chunks/ssr.js";
let tiltify = 13091.19;
let other = 4e3;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { charityDonationAmount = tiltify + other } = $$props;
  fetch("https://api.lynix.ca/charity/donation_amount").then((response) => response.json()).then((data) => {
    charityDonationAmount = data.amount;
  });
  if ($$props.charityDonationAmount === void 0 && $$bindings.charityDonationAmount && charityDonationAmount !== void 0)
    $$bindings.charityDonationAmount(charityDonationAmount);
  return `<div class="p-5 bg-neutral-950 border-b border-gray-600" data-svelte-h="svelte-1bjdsgp"> <div class="flex items-center space-x-5"><img src="/lynix.png" alt="lynix" class="w-10 -mt-1"> <div class="flex flex-col flex-1"><h3 class="text-2xl font-semibold">Current Panel: Waiting for FE 2024!</h3> <p class="text-lg text-neutral-400">Next Panel: Flight (38 Days)</p></div> <h3 class="text-2xl">A furry weekend in Toronto!!</h3></div></div> <div class="px-5 py-2 bg-cyan-950 text-xl" data-svelte-h="svelte-1amyx8g">Join us for some Furality Luma Festival Moments shortly!</div> <div class="px-5 py-2 bg-blue-950 text-xl" data-svelte-h="svelte-2t6kll">LCM is currently connecting to 192.168.2.110 (Lynix) ...</div> <p class="fixed bottom-5 right-5 opacity-80 text-xl text-right" data-svelte-h="svelte-1pq55ic">This is an unofficial Furality Stream benefiting Furality Inc.<br>
    All donations go towards this goal.</p>`;
});
export {
  Page as default
};
