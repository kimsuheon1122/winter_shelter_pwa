/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
"use strict";

var precacheConfig = [
  ["css/cover_popup.css", "ac1b8c8c42263eb4e0e375c42dc0ef3a"],
  ["css/cover_popup.css.map", "f15e2abbf71530234b3f5c5075ff18f4"],
  ["css/home_page.css", "79292c4403d16e58adefcea5180c5ab3"],
  ["css/home_page.css.map", "ba7a18df7f36b3e201c9ebf347f0ddd4"],
  ["css/location_list_page.css", "53e6450e725287ae694c01594a46d49c"],
  ["css/location_list_page.css.map", "f7189b0880ca325fa50a07c214097207"],
  ["css/main.css", "9ab675d152fe915203b1b35259479ae3"],
  ["css/main.css.map", "8a90af5a58cb8037c3fe685ed9dc712a"],
  ["css/map_page.css", "e298ce13f70b69899ac3fe53ac1b1f9a"],
  ["css/map_page.css.map", "a286b4cc2aaff61f2e6dd5931c75ab02"],
  ["css/reset.css", "1b4f88acf1c07a5e6ba018b2315252cd"],
  ["css/search_for_AED_page.css", "026a5d687507c0d450d7273a80add63f"],
  ["css/search_for_AED_page.css.map", "c0e0092c86c2f2f7fe5991c0e90422b9"],
  ["css/shelter_list_detail.css", "4654d8e27b0bc75354a1d03e5ffdfcac"],
  ["css/shelter_list_detail.css.map", "7d4a7a610485bb839d1e5d2ab2c8c885"],
  ["css/shelter_type_page.css", "bc498f3d4435d7b638c9ed2668743e15"],
  ["css/shelter_type_page.css.map", "9820e755d70fe74bc6a9c1b63e797320"],
  ["css/temp_cloth_page.css", "f2a8ad58b78bd54044bfde087967f560"],
  ["css/temp_cloth_page.css.map", "84a254a439b636ae4f2fe764d1617b20"],
  ["img/20181010000733388_1.jpg", "ed1d5a82dee3dc2a5fba5ba84863ec38"],
  ["img/AED/aed_usage_1.gif", "dcd4fdc77dd41882ae8468bccf33b3c2"],
  ["img/AED/aed_usage_2.gif", "785843a534a38b7becb143453a7dbfda"],
  ["img/AED/aed_usage_3.gif", "47f50946d0d81034c91955e022fdb44a"],
  ["img/AED/aed_usage_4.gif", "230f7e90dff6620036a6c64636849ab6"],
  ["img/AED/aed_usage_5.gif", "5f1f6e1d8123cf90a05be19388361345"],
  ["img/AED_logo.png", "826c72acaa5b0e88ffd746d4ee4ecccc"],
  ["img/AED_map.PNG", "1f7275ed271b3a43613f2f7acc57c80f"],
  [
    "img/chandler-cruttenden-w8hWTFpGtpY-unsplash.jpg",
    "6020cd8dc9333f57d21eceb5d376b0a3",
  ],
  ["img/chat_icon.svg", "50a27a1d2a115233e210b9c650f03fe8"],
  ["img/cover_logo.png", "5349b78b8342552b2322cc9a85398c08"],
  ["img/fall.png", "3916dc66a935b05a25ad87adb1bf341a"],
  ["img/fall_human.png", "c6afe571a5462cac7f1f510b98f3b272"],
  ["img/gangnam_load.jpg", "61abbadc7632684824f3f7f8bf02fdda"],
  ["img/gn_CI_png/1. CI국영문좌우.png", "eaffa079e6ba202fa024950c61b6ff8e"],
  ["img/gn_CI_png/10. all ci .png", "6bb2146a1f97ad4b7f26ac674372add4"],
  ["img/gn_CI_png/2. CI국영문세로.png", "efd9443c541606dd426d8f1f788fc8ac"],
  ["img/gn_CI_png/3. CI국문좌우.png", "0b350ae59d3e13fa3260ecc09804a8bd"],
  ["img/gn_CI_png/4. CI국문세로.png", "f2a3239a2a6b5f7cee729cf9008138d7"],
  ["img/gn_CI_png/5. CI영문좌우.png", "fc7b10ab5d06a9aff8e031df89c8c296"],
  ["img/gn_CI_png/6. CI영문세로.png", "cb8c85efad0a75f776636376d55f1a11"],
  ["img/gn_CI_png/7. CI한영문좌우.png", "bf52df95ffa1b32063bf7535195da8d0"],
  ["img/gn_CI_png/8. CI한영문세로.png", "e1994e97fe91d3a851ad141eab22858e"],
  ["img/gn_CI_png/9. CI한문좌우.png", "259fd2f2011febe99f331579486427a0"],
  ["img/info.svg", "eb14732a0464bd341bd868a0c6381bc3"],
  ["img/korea_manager.png", "72bbfe493fff87dbb19e7f4908ea621b"],
  ["img/logo.png", "8b81c29f218bbb4fe6044d0c950ada07"],
  ["img/lounge.png", "510fc69222952bb9d3b785039bf07345"],
  ["img/map.PNG", "7240775990ec05df29c088de7df5ea20"],
  ["img/maskable_icon_x192.png", "268fe14118940b9c5fef63088bd2d660"],
  ["img/maskable_icon_x384.png", "90cc0f4a091710a4d5bc31541fc0b0f2"],
  ["img/maskable_icon_x512.png", "9da1301f6e2a973281fad373169a3b33"],
  [
    "img/matthaeus-Hl8JR2Y7dbI-unsplash.jpg",
    "61abbadc7632684824f3f7f8bf02fdda",
  ],
  ["img/red_phone_.png", "4f94fd31deed2a14f2e76e050a5a1f65"],
  ["img/screen_shot_1.png", "3d55d9e2344e5a885eb25b470235dfac"],
  ["img/screen_shot_2.png", "321192f163bb94549bf139a6abe435b1"],
  ["img/screen_shot_3.png", "2e434908a56e14f08f093be93833a7c8"],
  ["img/search_as_map.png", "eb98957c293499ed4db0971f6f613545"],
  ["img/search_as_type.png", "491f8555f1dce5f5f6425eecbd9f7d21"],
  ["img/search_for_AED.png", "5ae43ad0288af5811bd4c1f1cfd96403"],
  ["img/silvertown.png", "bf0d24b0e6b8bc7fa88c08797a1c15f1"],
  ["img/snowman.png", "d66f47bf8a9bcff81363e7bb402a13a1"],
  ["img/socialcenter.png", "a4d2c07769c03686192fdd79052cccfb"],
  ["img/spring.png", "939ab0dee3a7df4409f026f3ec390c10"],
  ["img/summer.png", "4e1c320a84345d45020a1d1232e917ff"],
  ["img/temp_cloth.png", "f7992c1c7d4b934bf1b2fab7d9222bb2"],
  ["img/welfare_center.png", "e8b5a67f16752649960f0e2a8d6489e7"],
  ["img/국삐.PNG", "a2d8c84294a914bedb64bdc4cf97f047"],
  ["index.html", "5d7d7a7a6576766b5f8861181f2846d0"],
  ["js/main.js", "312d48e542c1d60abd6d4b273c99dcc4"],
  ["manifest.json", "7d030f7762e9142440c106b069cdcf98"],
  
  


  ["package.json", "a97853073b93a8e5182f2762f52bbfce"],
  ["sass/cover_popup.scss", "dd48a9405f069cb09ca025144ca9ca3b"],
  ["sass/home_page.scss", "b9b9210f6d0747a5d5ed6535e00c07c3"],
  ["sass/location_list_page.scss", "e39dce4487a99552a104f16f9e1b9b42"],
  ["sass/main.scss", "2acf0b06869e4f40a45969be7d93e2c4"],
  ["sass/map_page.scss", "f2664661f682f6430b4f852b34c12b8c"],
  ["sass/mixvariables.scss", "ae5d70de4d1215236874da3240092128"],
  ["sass/search_for_AED_page.scss", "4330850940fb114ce01d141037def308"],
  ["sass/shelter_list_detail.scss", "b7626f4f7935184446e052163f8de68d"],
  ["sass/shelter_type_page.scss", "57c927b40d09b689e5beea6b0fed9cb7"],
  ["sass/temp_cloth_page.scss", "82e98eb1cb5044e2d4ea3b05feb0e504"],
  ["sw-precache-config.js", "2d4963e90500378e6f23150990a0781d"],
  ["yarn.lock", "2c592a707240a4c7ba39269a00cccb7f"],
];
var cacheName =
  "sw-precache-v3-sw-precache-" +
  (self.registration ? self.registration.scope : "");

var ignoreUrlParametersMatching = [/^utm_/];

var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === "/") {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise =
    "body" in originalResponse
      ? Promise.resolve(originalResponse.body)
      : originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText,
    });
  });
};

var createCacheKey = function (
  originalUrl,
  paramName,
  paramValue,
  dontCacheBustUrlsMatching,
) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (
    !dontCacheBustUrlsMatching ||
    !url.pathname.match(dontCacheBustUrlsMatching)
  ) {
    url.search +=
      (url.search ? "&" : "") +
      encodeURIComponent(paramName) +
      "=" +
      encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = new URL(absoluteUrlString).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (
  originalUrl,
  ignoreUrlParametersMatching,
) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = "";

  url.search = url.search
    .slice(1) // Exclude initial '?'
    .split("&") // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split("="); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join("="); // Join each [key, value] array into a 'key=value' string
    })
    .join("&"); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};

var hashParamName = "_sw-precache";
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  }),
);

function setOfCachedUrls(cache) {
  return cache
    .keys()
    .then(function (requests) {
      return requests.map(function (request) {
        return request.url;
      });
    })
    .then(function (urls) {
      return new Set(urls);
    });
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return setOfCachedUrls(cache).then(function (cachedUrls) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
              // If we don't have a key matching url in the cache already, add it.
              if (!cachedUrls.has(cacheKey)) {
                var request = new Request(cacheKey, {
                  credentials: "same-origin",
                });
                return fetch(request).then(function (response) {
                  // Bail out of installation unless we get back a 200 OK for
                  // every request.
                  if (!response.ok) {
                    throw new Error(
                      "Request for " +
                        cacheKey +
                        " returned a " +
                        "response with status " +
                        response.status,
                    );
                  }

                  return cleanResponse(response).then(function (
                    responseToCache,
                  ) {
                    return cache.put(cacheKey, responseToCache);
                  });
                });
              }
            }),
          );
        });
      })
      .then(function () {
        // Force the SW to transition from installing -> active state
        return self.skipWaiting();
      }),
  );
});

self.addEventListener("activate", function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return cache.keys().then(function (existingRequests) {
          return Promise.all(
            existingRequests.map(function (existingRequest) {
              if (!setOfExpectedUrls.has(existingRequest.url)) {
                return cache.delete(existingRequest);
              }
            }),
          );
        });
      })
      .then(function () {
        return self.clients.claim();
      }),
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method === "GET") {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(
      event.request.url,
      ignoreUrlParametersMatching,
    );
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = "index.html";
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = "";
    if (
      !shouldRespond &&
      navigateFallback &&
      event.request.mode === "navigate" &&
      isPathWhitelisted([], event.request.url)
    ) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches
          .open(cacheName)
          .then(function (cache) {
            return cache
              .match(urlsToCacheKeys.get(url))
              .then(function (response) {
                if (response) {
                  return response;
                }
                throw Error(
                  "The cached response that was expected is missing.",
                );
              });
          })
          .catch(function (e) {
            // Fall back to just fetch()ing the request if some unexpected error
            // prevented the cached response from being valid.
            console.warn(
              'Couldn\'t serve response for "%s" from cache: %O',
              event.request.url,
              e,
            );
            return fetch(event.request);
          }),
      );
    }
  }
});
