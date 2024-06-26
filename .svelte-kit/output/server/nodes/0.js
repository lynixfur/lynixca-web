import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DM8F-sl9.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/index.jUc3c_yE.js","_app/immutable/chunks/singletons.ed9M4kUB.js","_app/immutable/chunks/paths.6Is5Bjui.js"];
export const stylesheets = ["_app/immutable/assets/app.Jh0qrPJf.css"];
export const fonts = [];
