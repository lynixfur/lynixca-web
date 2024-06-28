

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.G1NhtvAM.js","_app/immutable/chunks/scheduler.CLaU1I6x.js","_app/immutable/chunks/index.DJK8FsWi.js"];
export const stylesheets = [];
export const fonts = [];
