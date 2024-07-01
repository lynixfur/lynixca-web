

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/station/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.DIqDq4_X.js","_app/immutable/chunks/scheduler.CLaU1I6x.js","_app/immutable/chunks/index.DJK8FsWi.js","_app/immutable/chunks/moment.C5S46NFB.js"];
export const stylesheets = [];
export const fonts = [];
