import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.W_FF4L8F.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/index.jUc3c_yE.js","_app/immutable/chunks/singletons.VEM6dSLC.js","_app/immutable/chunks/paths.TJyZu5gx.js"];
export const stylesheets = ["_app/immutable/assets/app.UqI474k4.css"];
export const fonts = [];
