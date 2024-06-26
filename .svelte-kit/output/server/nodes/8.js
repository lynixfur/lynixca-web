

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shock/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.ciUK1ifa.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/index.jUc3c_yE.js"];
export const stylesheets = ["_app/immutable/assets/8.JexxaoWD.css"];
export const fonts = [];
