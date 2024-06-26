

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.MvrOEshE.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/index.__w-K0yc.js","_app/immutable/chunks/singletons.kjT-SOxK.js"];
export const stylesheets = ["_app/immutable/assets/0.-Mf2ELVv.css"];
export const fonts = [];
