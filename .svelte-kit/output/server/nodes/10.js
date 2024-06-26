

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/stream-overlays/furality/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.jfOj24qb.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/index.jUc3c_yE.js"];
export const stylesheets = [];
export const fonts = [];
