

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DGmlI4Gj.js","_app/immutable/chunks/scheduler.CLaU1I6x.js","_app/immutable/chunks/index.DJK8FsWi.js"];
export const stylesheets = [];
export const fonts = [];
