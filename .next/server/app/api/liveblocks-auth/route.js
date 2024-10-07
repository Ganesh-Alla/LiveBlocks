"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/liveblocks-auth/route";
exports.ids = ["app/api/liveblocks-auth/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=D%3A%5CBlock%5Cblocknote%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBlock%5Cblocknote&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=D%3A%5CBlock%5Cblocknote%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBlock%5Cblocknote&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Block_blocknote_src_app_api_liveblocks_auth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/liveblocks-auth/route.ts */ \"(rsc)/./src/app/api/liveblocks-auth/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/liveblocks-auth/route\",\n        pathname: \"/api/liveblocks-auth\",\n        filename: \"route\",\n        bundlePath: \"app/api/liveblocks-auth/route\"\n    },\n    resolvedPagePath: \"D:\\\\Block\\\\blocknote\\\\src\\\\app\\\\api\\\\liveblocks-auth\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Block_blocknote_src_app_api_liveblocks_auth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/liveblocks-auth/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsaXZlYmxvY2tzLWF1dGglMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmxpdmVibG9ja3MtYXV0aCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmxpdmVibG9ja3MtYXV0aCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDQmxvY2slNUNibG9ja25vdGUlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNCbG9jayU1Q2Jsb2Nrbm90ZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDYztBQUMzRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL0BsaXZlYmxvY2tzLWV4YW1wbGVzL25leHRqcy15anMtYmxvY2tub3RlLWFkdmFuY2VkLz9mMDk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXEJsb2NrXFxcXGJsb2Nrbm90ZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsaXZlYmxvY2tzLWF1dGhcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xpdmVibG9ja3MtYXV0aC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xpdmVibG9ja3MtYXV0aFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbGl2ZWJsb2Nrcy1hdXRoL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcQmxvY2tcXFxcYmxvY2tub3RlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGxpdmVibG9ja3MtYXV0aFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbGl2ZWJsb2Nrcy1hdXRoL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=D%3A%5CBlock%5Cblocknote%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBlock%5Cblocknote&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/liveblocks-auth/route.ts":
/*!**********************************************!*\
  !*** ./src/app/api/liveblocks-auth/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _liveblocks_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @liveblocks/node */ \"(rsc)/./node_modules/@liveblocks/node/dist/index.mjs\");\n\n/**\n * Authenticating your Liveblocks application\n * https://liveblocks.io/docs/authentication\n */ const liveblocks = new _liveblocks_node__WEBPACK_IMPORTED_MODULE_0__.Liveblocks({\n    secret: process.env.LIVEBLOCKS_SECRET_KEY\n});\nasync function POST(request) {\n    // Get the current user's unique id from your database\n    const userId = Math.floor(Math.random() * 10000);\n    // Create a session for the current user\n    // userInfo is made available in Liveblocks presence hooks, e.g. useOthers\n    const session = liveblocks.prepareSession(`user-${userId}`, {\n        userInfo: USER_INFO[Math.floor(Math.random() * 10) % USER_INFO.length]\n    });\n    // Use a naming pattern to allow access to rooms with a wildcard\n    session.allow(`liveblocks:examples:*`, session.FULL_ACCESS);\n    // Authorize the user and return the result\n    const { body, status } = await session.authorize();\n    return new Response(body, {\n        status\n    });\n}\nconst USER_INFO = [\n    {\n        name: \"Charlie Layne\",\n        color: \"#D583F0\",\n        picture: \"https://liveblocks.io/avatars/avatar-1.png\"\n    },\n    {\n        name: \"Mislav Abha\",\n        color: \"#F08385\",\n        picture: \"https://liveblocks.io/avatars/avatar-2.png\"\n    },\n    {\n        name: \"Tatum Paolo\",\n        color: \"#F0D885\",\n        picture: \"https://liveblocks.io/avatars/avatar-3.png\"\n    },\n    {\n        name: \"Anjali Wanda\",\n        color: \"#85EED6\",\n        picture: \"https://liveblocks.io/avatars/avatar-4.png\"\n    },\n    {\n        name: \"Jody Hekla\",\n        color: \"#85BBF0\",\n        picture: \"https://liveblocks.io/avatars/avatar-5.png\"\n    },\n    {\n        name: \"Emil Joyce\",\n        color: \"#8594F0\",\n        picture: \"https://liveblocks.io/avatars/avatar-6.png\"\n    },\n    {\n        name: \"Jory Quispe\",\n        color: \"#85DBF0\",\n        picture: \"https://liveblocks.io/avatars/avatar-7.png\"\n    },\n    {\n        name: \"Quinn Elton\",\n        color: \"#87EE85\",\n        picture: \"https://liveblocks.io/avatars/avatar-8.png\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9saXZlYmxvY2tzLWF1dGgvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFHOUM7OztDQUdDLEdBRUQsTUFBTUMsYUFBYSxJQUFJRCx3REFBVUEsQ0FBQztJQUNoQ0UsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxxQkFBcUI7QUFDM0M7QUFFTyxlQUFlQyxLQUFLQyxPQUFvQjtJQUM3QyxzREFBc0Q7SUFDdEQsTUFBTUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUs7SUFFMUMsd0NBQXdDO0lBQ3hDLDBFQUEwRTtJQUMxRSxNQUFNQyxVQUFVWCxXQUFXWSxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUVMLE9BQU8sQ0FBQyxFQUFFO1FBQzFETSxVQUFVQyxTQUFTLENBQUNOLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLE1BQU1JLFVBQVVDLE1BQU0sQ0FBQztJQUN4RTtJQUVBLGdFQUFnRTtJQUNoRUosUUFBUUssS0FBSyxDQUFDLENBQUMscUJBQXFCLENBQUMsRUFBRUwsUUFBUU0sV0FBVztJQUUxRCwyQ0FBMkM7SUFDM0MsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1SLFFBQVFTLFNBQVM7SUFDaEQsT0FBTyxJQUFJQyxTQUFTSCxNQUFNO1FBQUVDO0lBQU87QUFDckM7QUFFQSxNQUFNTCxZQUFZO0lBQ2hCO1FBQ0VRLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsU0FBUztJQUNYO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsU0FBUztJQUNYO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsU0FBUztJQUNYO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbGl2ZWJsb2Nrcy1leGFtcGxlcy9uZXh0anMteWpzLWJsb2Nrbm90ZS1hZHZhbmNlZC8uL3NyYy9hcHAvYXBpL2xpdmVibG9ja3MtYXV0aC9yb3V0ZS50cz8wNDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdmVibG9ja3MgfSBmcm9tIFwiQGxpdmVibG9ja3Mvbm9kZVwiO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuLyoqXG4gKiBBdXRoZW50aWNhdGluZyB5b3VyIExpdmVibG9ja3MgYXBwbGljYXRpb25cbiAqIGh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9kb2NzL2F1dGhlbnRpY2F0aW9uXG4gKi9cblxuY29uc3QgbGl2ZWJsb2NrcyA9IG5ldyBMaXZlYmxvY2tzKHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5MSVZFQkxPQ0tTX1NFQ1JFVF9LRVkhLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIC8vIEdldCB0aGUgY3VycmVudCB1c2VyJ3MgdW5pcXVlIGlkIGZyb20geW91ciBkYXRhYmFzZVxuICBjb25zdCB1c2VySWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG5cbiAgLy8gQ3JlYXRlIGEgc2Vzc2lvbiBmb3IgdGhlIGN1cnJlbnQgdXNlclxuICAvLyB1c2VySW5mbyBpcyBtYWRlIGF2YWlsYWJsZSBpbiBMaXZlYmxvY2tzIHByZXNlbmNlIGhvb2tzLCBlLmcuIHVzZU90aGVyc1xuICBjb25zdCBzZXNzaW9uID0gbGl2ZWJsb2Nrcy5wcmVwYXJlU2Vzc2lvbihgdXNlci0ke3VzZXJJZH1gLCB7XG4gICAgdXNlckluZm86IFVTRVJfSU5GT1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgJSBVU0VSX0lORk8ubGVuZ3RoXSxcbiAgfSk7XG5cbiAgLy8gVXNlIGEgbmFtaW5nIHBhdHRlcm4gdG8gYWxsb3cgYWNjZXNzIHRvIHJvb21zIHdpdGggYSB3aWxkY2FyZFxuICBzZXNzaW9uLmFsbG93KGBsaXZlYmxvY2tzOmV4YW1wbGVzOipgLCBzZXNzaW9uLkZVTExfQUNDRVNTKTtcblxuICAvLyBBdXRob3JpemUgdGhlIHVzZXIgYW5kIHJldHVybiB0aGUgcmVzdWx0XG4gIGNvbnN0IHsgYm9keSwgc3RhdHVzIH0gPSBhd2FpdCBzZXNzaW9uLmF1dGhvcml6ZSgpO1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIHsgc3RhdHVzIH0pO1xufVxuXG5jb25zdCBVU0VSX0lORk8gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkNoYXJsaWUgTGF5bmVcIixcbiAgICBjb2xvcjogXCIjRDU4M0YwXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItMS5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWlzbGF2IEFiaGFcIixcbiAgICBjb2xvcjogXCIjRjA4Mzg1XCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItMi5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGF0dW0gUGFvbG9cIixcbiAgICBjb2xvcjogXCIjRjBEODg1XCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItMy5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQW5qYWxpIFdhbmRhXCIsXG4gICAgY29sb3I6IFwiIzg1RUVENlwiLFxuICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly9saXZlYmxvY2tzLmlvL2F2YXRhcnMvYXZhdGFyLTQucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkpvZHkgSGVrbGFcIixcbiAgICBjb2xvcjogXCIjODVCQkYwXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItNS5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRW1pbCBKb3ljZVwiLFxuICAgIGNvbG9yOiBcIiM4NTk0RjBcIixcbiAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci02LnBuZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJKb3J5IFF1aXNwZVwiLFxuICAgIGNvbG9yOiBcIiM4NURCRjBcIixcbiAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci03LnBuZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJRdWlubiBFbHRvblwiLFxuICAgIGNvbG9yOiBcIiM4N0VFODVcIixcbiAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci04LnBuZ1wiLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJMaXZlYmxvY2tzIiwibGl2ZWJsb2NrcyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJMSVZFQkxPQ0tTX1NFQ1JFVF9LRVkiLCJQT1NUIiwicmVxdWVzdCIsInVzZXJJZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNlc3Npb24iLCJwcmVwYXJlU2Vzc2lvbiIsInVzZXJJbmZvIiwiVVNFUl9JTkZPIiwibGVuZ3RoIiwiYWxsb3ciLCJGVUxMX0FDQ0VTUyIsImJvZHkiLCJzdGF0dXMiLCJhdXRob3JpemUiLCJSZXNwb25zZSIsIm5hbWUiLCJjb2xvciIsInBpY3R1cmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/liveblocks-auth/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@liveblocks","vendor-chunks/fast-sha256","vendor-chunks/@stablelib"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=D%3A%5CBlock%5Cblocknote%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CBlock%5Cblocknote&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();