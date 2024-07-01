import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C_8HScss.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.B1-yeNeU.js","_app/immutable/chunks/stores.BdjySevY.js","_app/immutable/chunks/entry.BdUaJUgK.js"];
export const stylesheets = ["_app/immutable/assets/0.BjCKY-Na.css"];
export const fonts = [];
