

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.FOxV3Hml.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/index.__w-K0yc.js"];
export const stylesheets = [];
export const fonts = [];
