import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import moment from "moment";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let now = moment();
  now.format("MMMM YYYY");
  return `<div class="my-20 w-full space-y-5"><h1 class="text-6xl font-semibold text-neutral-100 pb-5" data-svelte-h="svelte-k4irjh"><i class="fa-solid fa-code"></i> Projects</h1>  <div class="flex items-center space-x-4 w-1/2" data-svelte-h="svelte-kfe7vv"> <input type="text" class="border-2 border-neutral-700 bg-neutral-900 px-4 py-2 rounded-full w-full" placeholder="Search projects"></div>  <div class="grid grid-cols-2 gap-10 pt-10"><div class="flex space-x-4"><div><h2 class="text-2xl text-cyan-500 font-bold mb-2" data-svelte-h="svelte-cw229k">Lynx Network</h2> <p class="font-semibold text-cyan-200">${escape(`February 2019 to Present`)}</p> <p data-svelte-h="svelte-1gav0ov">Lynx Network is my personal infrastructure where I work on
                    IT things and even host this website! <strong>Did you know?</strong> It&#39;s called Lynx as the my favorite animal is a lynx!</p> <div class="flex space-x-2 mt-3" data-svelte-h="svelte-1l2oxgz"><a href="https://lynix.ca" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-solid fa-link"></i></a> <a href="#" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-brands fa-github"></i></a></div></div> <img src="https://lynix.ca/imgs/logos/LynixLogo.svg" alt="Lynix" class="rounded-xl w-32 h-32 pt-5 border-2 bg-neutral-900 border-neutral-800 p-3 object-fit"></div> <div class="flex space-x-4"><div><h2 class="text-2xl text-cyan-500 font-bold mb-2" data-svelte-h="svelte-6b28jk">WaterWolf</h2> <p class="font-semibold text-cyan-200">${escape(`May 2024 to Present`)}</p> <p data-svelte-h="svelte-gi52pe">WaterWolf is a community in VRChat focused on building,
                    exploring and promoting immersive and enjoyable worlds.</p> <div class="flex space-x-2 mt-3" data-svelte-h="svelte-gij3at"><a href="https://lynix.ca" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-solid fa-link"></i></a> <a href="#" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-brands fa-github"></i></a> <a href="#" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-brands fa-discord"></i></a></div></div> <img src="/WaterWolf_TSWhite.png" alt="Lynix" class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"></div> <div class="flex space-x-4"><div><h2 class="text-2xl text-cyan-500 font-bold mb-2" data-svelte-h="svelte-ywtbsc">DEFCON Furs 2024</h2> <p class="font-semibold text-cyan-200">${escape(`June 2024 to Present`)}</p> <p data-svelte-h="svelte-1f882u2">DEFCON Furs is a non-profit group that organizes events and
                    parties at DEF CON for members of the infosec community that
                    share an interest in the furry fandom.</p> <div class="flex space-x-2 mt-3" data-svelte-h="svelte-1l2oxgz"><a href="https://lynix.ca" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-solid fa-link"></i></a> <a href="#" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-brands fa-github"></i></a></div></div> <img src="/logos/logo.svg" alt="Lynix" class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"></div> <div class="flex space-x-4"><div><h2 class="text-2xl text-cyan-500 font-bold mb-2" data-svelte-h="svelte-1yz1jvt">Furality</h2> <p class="font-semibold text-cyan-200">${escape(`December 2023 to Present`)}</p> <p class="" data-svelte-h="svelte-yfuqw8">Furality is an online furry convention that is held annually
                    in VRChat, I currently contribute with furality to make
                    great events for our future attendees while helping in the
                    backend systems of furality with my paws!</p> <div class="flex space-x-2 mt-3" data-svelte-h="svelte-dtc51v"><a href="https://furality.org" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-solid fa-link"></i></a> <a href="https://furality.org" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-brands fa-github"></i></a></div></div> <img src="/logos/furalitylogo.png" alt="Lynix" class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"></div> <div class="flex space-x-4"><div><h2 class="text-2xl text-cyan-500 font-bold mb-2" data-svelte-h="svelte-g3e2kj">DEFCON Furs 2023</h2> <p class="font-semibold text-cyan-200">${escape(`May 2023 to August 2023`)}</p> <p data-svelte-h="svelte-1f882u2">DEFCON Furs is a non-profit group that organizes events and
                    parties at DEF CON for members of the infosec community that
                    share an interest in the furry fandom.</p> <div class="flex space-x-2 mt-3" data-svelte-h="svelte-1l2oxgz"><a href="https://lynix.ca" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-solid fa-link"></i></a> <a href="#" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-brands fa-github"></i></a></div></div> <img src="/logos/logo.svg" alt="Lynix" class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"></div> <div class="flex space-x-4"><div><h2 class="text-2xl text-cyan-500 font-bold mb-2" data-svelte-h="svelte-52h2ks">CCNB Cyse Network Infrastructure</h2> <p class="font-semibold text-cyan-200">${escape(`September 2022 to April 2024`)}</p> <p data-svelte-h="svelte-1i0vu7v">During my studies at CCNB in Cybersecurity I got the chance
                    to develop and design a infrastructure with my Cybersecurity
                    Coordinator. We built this network to help students with VMS
                    or Labs and providing secure wifi for both CYSE 1 and CYSE 2</p></div> <img src="/logos/ccnb.png" alt="Lynix" class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"></div> <div class="flex space-x-4"><div><h2 class="text-2xl text-cyan-500 font-bold mb-2" data-svelte-h="svelte-7jyoik">Bloody ARK</h2> <p class="font-semibold text-cyan-200">${escape(`September 2021 to Present`)}</p> <p data-svelte-h="svelte-1o48fzf">Bloody ARK is a massive ARK: Survival Evolved Cluster that
                    I&#39;ve contributed to by making their backend CMS and HUB
                    Portal which relays information between ARK and your
                    browser.</p> <div class="flex space-x-2 mt-3" data-svelte-h="svelte-1p52jm5"><a href="https://bloody.gg" target="_blank" class="h-10 w-10 bg-neutral-800 border border-neutral-700 p-2 flex items-center justify-center rounded-2xl text-neutral-300 hover:text-neutral-400 transition-colors"><i class="fa-solid fa-link"></i></a></div></div> <img src="/logos/bloodyark.png" alt="Lynix" class="rounded-xl w-32 h-32 mb-1 border-2 bg-neutral-900 border-neutral-800 p-3"></div></div></div>`;
});
export {
  Page as default
};
