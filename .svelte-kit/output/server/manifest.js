export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bg-circle.png","bg.png","cn-tower.svg","favicon.png","fontawesome/css/all.css","fontawesome/css/all.min.css","fontawesome/webfonts/fa-brands-400.ttf","fontawesome/webfonts/fa-brands-400.woff2","fontawesome/webfonts/fa-regular-400.ttf","fontawesome/webfonts/fa-regular-400.woff2","fontawesome/webfonts/fa-solid-900.ttf","fontawesome/webfonts/fa-solid-900.woff2","fonts/cyber.ttf","logos/bloodyark.png","logos/ccnb.png","logos/furalitylogo.png","logos/logo.svg","lynix-blep.png","lynix-sticker.png","lynix.png","lynix2.png","lynix_signature_glitch.png","lynix_solo.png","Megaphone.png","sylva-in-winter.png","WaterWolf_TSWhite.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".css":"text/css",".ttf":"font/ttf",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.8EUwkhRX.js","app":"_app/immutable/entry/app.ABRgICty.js","imports":["_app/immutable/entry/start.8EUwkhRX.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/singletons.ed9M4kUB.js","_app/immutable/chunks/paths.6Is5Bjui.js","_app/immutable/entry/app.ABRgICty.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/index.jUc3c_yE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
