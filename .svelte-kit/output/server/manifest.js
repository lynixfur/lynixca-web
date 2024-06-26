export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["BadgeWarning.png","bg-circle.png","bg.png","cn-tower.svg","favicon.svg","fontawesome/css/all.css","fontawesome/css/all.min.css","fontawesome/webfonts/fa-brands-400.ttf","fontawesome/webfonts/fa-brands-400.woff2","fontawesome/webfonts/fa-regular-400.ttf","fontawesome/webfonts/fa-regular-400.woff2","fontawesome/webfonts/fa-solid-900.ttf","fontawesome/webfonts/fa-solid-900.woff2","fonts/cyber.ttf","freedy.jpeg","logos/bloodyark.png","logos/ccnb.png","logos/furalitylogo.png","logos/logo.svg","lynix-blep.png","lynix-sticker.png","lynix.png","lynix2.png","LynixLogo.svg","lynix_signature_glitch.png","lynix_solo.png","Megaphone.png","ref.png","sylva-in-winter.png","test-lynix-removebg-preview.png","Warning.png","WaterWolf_TSWhite.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".css":"text/css",".ttf":"font/ttf",".woff2":"font/woff2",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DMaBMATU.js","app":"_app/immutable/entry/app.CcYdeLg8.js","imports":["_app/immutable/entry/start.DMaBMATU.js","_app/immutable/chunks/entry.DNIaBOX3.js","_app/immutable/chunks/scheduler.CLaU1I6x.js","_app/immutable/entry/app.CcYdeLg8.js","_app/immutable/chunks/scheduler.CLaU1I6x.js","_app/immutable/chunks/index.DJK8FsWi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
