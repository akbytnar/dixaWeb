"use strict";var precacheConfig=[["/dixaWeb/index.html","4654a0be9967afdb5dde9274119d35b4"],["/dixaWeb/static/js/main.428a49fa.js","683cf69e771c14a4df7e82a6bbcb6d81"],["/dixaWeb/static/media/art-global_something.651e4f6b.png","651e4f6b0608d669e30dfede91bec5d0"],["/dixaWeb/static/media/art-hero_copy.f1ec08c7.png","f1ec08c7171dd7751216b765c8bc90ee"],["/dixaWeb/static/media/art-inteligent_routing.16cbcea2.png","16cbcea21befb478ecd62863b9cdfb19"],["/dixaWeb/static/media/art-smooth_setup.16e066c2.png","16e066c2a8614cdcac4f39221aee419e"],["/dixaWeb/static/media/fb.d052e877.png","d052e87782019e8db3005f60990ce76a"],["/dixaWeb/static/media/in.e6ab7234.png","e6ab72342d134f560faa494469d00646"],["/dixaWeb/static/media/product1.1a6596c1.png","1a6596c17120ee70450013eda62abe30"],["/dixaWeb/static/media/product2.d9ad9bcb.png","d9ad9bcb3fa2ab826b6c3fc8b0a8a7ba"],["/dixaWeb/static/media/product3.18f7c688.png","18f7c6880656da210bce387eaafb5501"],["/dixaWeb/static/media/product4.ec727dce.png","ec727dceea8e6d7d26664100b931e2c1"],["/dixaWeb/static/media/product5.a79b1246.png","a79b12461dc193c56067a8c7f3115fda"],["/dixaWeb/static/media/product6.7b28b23b.png","7b28b23b52fa139e0afcc4478998d719"],["/dixaWeb/static/media/product7.48b0ff37.png","48b0ff37e4b76b26a83ce85f138d1250"],["/dixaWeb/static/media/twitter.71230a78.png","71230a788ce210117c0a475ca2b0fce9"],["/dixaWeb/static/media/yt.78e3f993.png","78e3f9931a89706c55c3ea72e061631a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/dixaWeb/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});