

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shock/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.EGg3d5cl.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/index.jUc3c_yE.js"];
export const stylesheets = ["_app/immutable/assets/9.JexxaoWD.css"];
export const fonts = [];
