

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.ByhLtzm_.js","_app/immutable/chunks/scheduler.CLaU1I6x.js","_app/immutable/chunks/index.DJK8FsWi.js"];
export const stylesheets = [];
export const fonts = [];
