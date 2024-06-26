

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/404/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.EM5O2aAn.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/index.jUc3c_yE.js"];
export const stylesheets = [];
export const fonts = [];
