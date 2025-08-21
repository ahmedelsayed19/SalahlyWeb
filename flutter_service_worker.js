'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".idea/caches/deviceStreaming.xml": "40cef57de371023cfb5e3992a3c85114",
".idea/misc.xml": "462105237233c352c95c0e913d6d4524",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "b0f5953b3635d84820d7fe6b618bfddb",
"assets/AssetManifest.bin": "23640524b45f3bc751ecc85ff4e566d4",
"assets/AssetManifest.bin.json": "cc5efce3f85aed5d781f7874aaa188fa",
"assets/AssetManifest.json": "0b60bee7b75cb4857e14173da389baca",
"assets/assets/images/appleIcon.svg": "2e36a6769e4c60e022ab861f92cb4ecc",
"assets/assets/images/arrived.json": "8a65becc5c7640aaec4e7d410e0ac0fb",
"assets/assets/images/calendar.svg": "581ac76cc517cf5c6bb7c1447d4a5246",
"assets/assets/images/carpenter.png": "0571fa723ccf666ee50a7fe2608d6b6e",
"assets/assets/images/circle.png": "98322f5fde2d995c367697fdf1c14a6a",
"assets/assets/images/circle.svg": "57479879bbcb2f2f82a42426b425e952",
"assets/assets/images/cleaning.png": "085a30882ac2837ee9b603062bdc8b9f",
"assets/assets/images/deleteaccountimg.png": "e35ecab8c664a4dd7324337a2bddb397",
"assets/assets/images/deleteaccountimg.svg": "83aee2b7f4ed1edd0cc7c6da4f261b90",
"assets/assets/images/dollarSignIcon.svg": "5e68d7ae397c2ac5ae8a8fb80456976b",
"assets/assets/images/electrician.png": "1e55640fa949c647d9a685cd608b6e21",
"assets/assets/images/expressIcon.svg": "3bf32fe4763aa7329ed770b13dbabdab",
"assets/assets/images/facebookIcon.svg": "5786e232fb8899a5240e91916eeaeac5",
"assets/assets/images/googleIcon.svg": "0dcbf7654db0a53cb9b294c21468e423",
"assets/assets/images/homeBackground.jpeg": "f58f19633f1ec5dea609eb215eef50d4",
"assets/assets/images/landing1.png": "4c884bee9dc661752ec63a16ae540959",
"assets/assets/images/landing1.svg": "332e420e2d10b6be35465b8dbd8bbfab",
"assets/assets/images/landing2.png": "17d46d6f7686d39893037e844ee9503b",
"assets/assets/images/landing2.svg": "9e58eda5ed602f0b64e170a855dbf29c",
"assets/assets/images/landing3.png": "9b2fb1ccd31f51115e3e01d18754de68",
"assets/assets/images/landing3.svg": "876e495776d9f6bca8597176f7b5aba1",
"assets/assets/images/landing4.svg": "6456e67038d3cd11f361b9a431d7c3c5",
"assets/assets/images/microphone.svg": "4667a2964293b2b6fe269b6b8d0b4735",
"assets/assets/images/network.png": "9749691949efb19abc2115e234f7a517",
"assets/assets/images/ontheway.json": "8fbf32b12badaa80c8e514cc5777fc51",
"assets/assets/images/orderCompletedImage.png": "2c2e16347de67f2ff25ead07dd581f84",
"assets/assets/images/pending.json": "7a2ddabc1f03fb2125c3febb2060950d",
"assets/assets/images/plumber.png": "a9e343951d51d1fe0e17c5896147fe31",
"assets/assets/images/sendIcon.svg": "66ad84a6183f63cccb3a94c4642b81c3",
"assets/assets/images/splash1.png": "c2e9dc710f57c02c10bb14ce2efba5e8",
"assets/assets/images/splash2.png": "f38a74b2f43b80a4c43a1c21b705949a",
"assets/assets/images/splash3.png": "bd99f91555744e37ab0ac601a1befdca",
"assets/assets/images/splash4.png": "b53c1e3cfc713d021e3c7df21eda0b84",
"assets/assets/images/splash5.png": "9ddae0e845ff3db78b5a360dabca0db6",
"assets/assets/images/splashbg.svg": "888f4e7cd0acc4037b575b8c8e85d186",
"assets/assets/images/splashlogo.svg": "33a03efcf0381be679afbf01869eb5ec",
"assets/assets/images/upload.svg": "e0f47245e6368870c3899596be88737e",
"assets/FontManifest.json": "7920de41c58b42dbd3b2fdc96094529a",
"assets/fonts/MaterialIcons-Regular.otf": "e6379e43df0efc6df564d853f5386187",
"assets/NOTICES": "07687b0c61542457e4bffefb78ccc47a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "8a5f575ecdf23f21bcae8204882d54bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "0b929c568f5bcc30d8b2b05109d6a079",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "5bb8a48b073e5aaad8d129ba77d2afa5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d177cb1d1540ed7a241362980230097",
"/": "4d177cb1d1540ed7a241362980230097",
"main.dart.js": "b9c6c55a82d64fcb0769e8efa5b173f8",
"manifest.json": "08faf394b96101c7aa2b04b2240146ca",
"version.json": "5f42826f9b6ed769cf047f4f921008f7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
