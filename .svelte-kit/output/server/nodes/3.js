

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/404/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DFoMrbb-.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.B1-yeNeU.js"];
export const stylesheets = [];
export const fonts = [];
