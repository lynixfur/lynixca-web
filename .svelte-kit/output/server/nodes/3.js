

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/404/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.iSQtviJJ.js","_app/immutable/chunks/scheduler.CLaU1I6x.js","_app/immutable/chunks/index.DJK8FsWi.js"];
export const stylesheets = [];
export const fonts = [];
