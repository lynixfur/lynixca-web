export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["BadgeWarning.png","bg-circle.png","bg.png","cn-tower.svg","favicon.png","fontawesome/css/all.css","fontawesome/css/all.min.css","fontawesome/webfonts/fa-brands-400.ttf","fontawesome/webfonts/fa-brands-400.woff2","fontawesome/webfonts/fa-regular-400.ttf","fontawesome/webfonts/fa-regular-400.woff2","fontawesome/webfonts/fa-solid-900.ttf","fontawesome/webfonts/fa-solid-900.woff2","fonts/cyber.ttf","freedy.jpeg","logos/bloodyark.png","logos/ccnb.png","logos/furalitylogo.png","logos/logo.svg","lynix-blep.png","lynix-sticker.png","lynix.png","lynix2.png","LynixLogo.svg","lynix_signature_glitch.png","lynix_solo.png","Megaphone.png","sylva-in-winter.png","WaterWolf_TSWhite.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".css":"text/css",".ttf":"font/ttf",".woff2":"font/woff2",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.k5_bTeqd.js","app":"_app/immutable/entry/app.wukomI9S.js","imports":["_app/immutable/entry/start.k5_bTeqd.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/singletons.kjT-SOxK.js","_app/immutable/entry/app.wukomI9S.js","_app/immutable/chunks/scheduler.wSyzJd0C.js","_app/immutable/chunks/index.__w-K0yc.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
