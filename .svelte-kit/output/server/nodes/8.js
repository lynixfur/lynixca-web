

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shock/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.IO-IBTR9.js","_app/immutable/chunks/scheduler.CLaU1I6x.js","_app/immutable/chunks/index.DJK8FsWi.js"];
export const stylesheets = ["_app/immutable/assets/8.l7HFqhYN.css"];
export const fonts = [];
