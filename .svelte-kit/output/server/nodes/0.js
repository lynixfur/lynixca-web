

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.pLpJOHxd.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/index.__w-K0yc.js","_app/immutable/chunks/singletons.rtnKt3C4.js"];
export const stylesheets = ["_app/immutable/assets/0.cBfTqhOI.css"];
export const fonts = [];
