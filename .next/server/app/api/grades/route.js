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
exports.id = "app/api/grades/route";
exports.ids = ["app/api/grades/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgrades%2Froute&page=%2Fapi%2Fgrades%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgrades%2Froute.ts&appDir=D%3A%5CFILE%20FIKRI%5Cpenilaian%20sd%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFILE%20FIKRI%5Cpenilaian%20sd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgrades%2Froute&page=%2Fapi%2Fgrades%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgrades%2Froute.ts&appDir=D%3A%5CFILE%20FIKRI%5Cpenilaian%20sd%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFILE%20FIKRI%5Cpenilaian%20sd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_FILE_FIKRI_penilaian_sd_src_app_api_grades_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/grades/route.ts */ \"(rsc)/./src/app/api/grades/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/grades/route\",\n        pathname: \"/api/grades\",\n        filename: \"route\",\n        bundlePath: \"app/api/grades/route\"\n    },\n    resolvedPagePath: \"D:\\\\FILE FIKRI\\\\penilaian sd\\\\src\\\\app\\\\api\\\\grades\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_FILE_FIKRI_penilaian_sd_src_app_api_grades_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/grades/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZncmFkZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdyYWRlcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdyYWRlcyUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDRklMRSUyMEZJS1JJJTVDcGVuaWxhaWFuJTIwc2QlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNGSUxFJTIwRklLUkklNUNwZW5pbGFpYW4lMjBzZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDYTtBQUMxRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3BlbmlsYWlhbi1ndXJ1LXNkLz85ZjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXEZJTEUgRklLUklcXFxccGVuaWxhaWFuIHNkXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGdyYWRlc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ3JhZGVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ3JhZGVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ncmFkZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxGSUxFIEZJS1JJXFxcXHBlbmlsYWlhbiBzZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxncmFkZXNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2dyYWRlcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgrades%2Froute&page=%2Fapi%2Fgrades%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgrades%2Froute.ts&appDir=D%3A%5CFILE%20FIKRI%5Cpenilaian%20sd%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFILE%20FIKRI%5Cpenilaian%20sd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) {\n                    return null;\n                }\n                const isPasswordValid = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.verifyPassword)(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    assignedClass: user.assignedClass\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.assignedClass = user.assignedClass;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.id = token.sub;\n                session.user.assignedClass = token.assignedClass;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDZ0I7QUFDNUI7QUFDTTtBQUVwQyxNQUFNSSxjQUEyQjtJQUN0Q0MsV0FBVztRQUNUSiwyRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsT0FBTztnQkFDVDtnQkFFQSxNQUFNRSxPQUFPLE1BQU1YLCtDQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQ0xQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQzFCO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0ssTUFBTTtvQkFDVCxPQUFPO2dCQUNUO2dCQUVBLE1BQU1HLGtCQUFrQixNQUFNYix5REFBY0EsQ0FBQ0ksWUFBWUksUUFBUSxFQUFFRSxLQUFLRixRQUFRO2dCQUVoRixJQUFJLENBQUNLLGlCQUFpQjtvQkFDcEIsT0FBTztnQkFDVDtnQkFFQSxPQUFPO29CQUNMQyxJQUFJSixLQUFLSSxFQUFFO29CQUNYVCxPQUFPSyxLQUFLTCxLQUFLO29CQUNqQkYsTUFBTU8sS0FBS1AsSUFBSTtvQkFDZlksZUFBZUwsS0FBS0ssYUFBYTtnQkFDbkM7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFVixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUlUsTUFBTUwsYUFBYSxHQUFHLEtBQWNBLGFBQWE7WUFDbkQ7WUFDQSxPQUFPSztRQUNUO1FBQ0EsTUFBTUosU0FBUSxFQUFFQSxPQUFPLEVBQUVJLEtBQUssRUFBRTtZQUM5QixJQUFJQSxTQUFTSixRQUFRTixJQUFJLEVBQUU7Z0JBQ3pCTSxRQUFRTixJQUFJLENBQUNJLEVBQUUsR0FBR00sTUFBTUMsR0FBRztnQkFDM0JMLFFBQVFOLElBQUksQ0FBQ0ssYUFBYSxHQUFHSyxNQUFNTCxhQUFhO1lBQ2xEO1lBQ0EsT0FBT0M7UUFDVDtJQUNGO0lBQ0FNLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBQztBQUVELE1BQU1DLFVBQVUzQixnREFBUUEsQ0FBQ0k7QUFFaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZW5pbGFpYW4tZ3VydS1zZC8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJ1xyXG5pbXBvcnQgeyB2ZXJpZnlQYXNzd29yZCB9IGZyb20gJ0AvbGliL2F1dGgnXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IEF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6ICdjcmVkZW50aWFscycsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdFbWFpbCcsIHR5cGU6ICdlbWFpbCcgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCB2ZXJpZnlQYXNzd29yZChjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZClcclxuXHJcbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgIGFzc2lnbmVkQ2xhc3M6IHVzZXIuYXNzaWduZWRDbGFzc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICBdLFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiAnand0J1xyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4uYXNzaWduZWRDbGFzcyA9ICh1c2VyIGFzIGFueSkuYXNzaWduZWRDbGFzc1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlblxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgIGlmICh0b2tlbiAmJiBzZXNzaW9uLnVzZXIpIHtcclxuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWIhXHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLmFzc2lnbmVkQ2xhc3MgPSB0b2tlbi5hc3NpZ25lZENsYXNzXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNlc3Npb25cclxuICAgIH1cclxuICB9LFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46ICcvbG9naW4nLFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInByaXNtYSIsInZlcmlmeVBhc3N3b3JkIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlzUGFzc3dvcmRWYWxpZCIsImlkIiwiYXNzaWduZWRDbGFzcyIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic3ViIiwicGFnZXMiLCJzaWduSW4iLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/grades/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/grades/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\n// GET - Ambil semua nilai\nasync function GET(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const { searchParams } = new URL(request.url);\n        const studentId = searchParams.get(\"studentId\");\n        const subjectId = searchParams.get(\"subjectId\");\n        const whereClause = {\n            teacherId: session.user.id\n        };\n        if (studentId) whereClause.studentId = studentId;\n        if (subjectId) whereClause.subjectId = subjectId;\n        const grades = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.grade.findMany({\n            where: whereClause,\n            include: {\n                student: {\n                    select: {\n                        id: true,\n                        name: true,\n                        nisn: true\n                    }\n                },\n                subject: {\n                    select: {\n                        id: true,\n                        name: true\n                    }\n                }\n            },\n            orderBy: [\n                {\n                    date: \"desc\"\n                },\n                {\n                    student: {\n                        name: \"asc\"\n                    }\n                }\n            ]\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(grades);\n    } catch (error) {\n        console.error(\"Get grades error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Terjadi kesalahan server\"\n        }, {\n            status: 500\n        });\n    }\n}\n// POST - Tambah nilai baru\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const body = await request.json();\n        const { studentId, subjectId, taskName, score, maxScore = 100 } = body;\n        if (!studentId || !subjectId || !taskName || score === undefined) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Semua field harus diisi\"\n            }, {\n                status: 400\n            });\n        }\n        if (score < 0 || score > maxScore) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: `Nilai harus antara 0-${maxScore}`\n            }, {\n                status: 400\n            });\n        }\n        // Verifikasi siswa milik guru yang login\n        const student = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.student.findFirst({\n            where: {\n                id: studentId,\n                teacherId: session.user.id\n            }\n        });\n        if (!student) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Siswa tidak ditemukan\"\n            }, {\n                status: 404\n            });\n        }\n        // Verifikasi mata pelajaran sesuai dengan tingkat kelas\n        const subject = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.subject.findFirst({\n            where: {\n                id: subjectId,\n                classLevel: student.class <= 3 ? 3 : 6\n            }\n        });\n        if (!subject) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Mata pelajaran tidak sesuai dengan tingkat kelas\"\n            }, {\n                status: 400\n            });\n        }\n        const grade = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.grade.create({\n            data: {\n                studentId,\n                subjectId,\n                teacherId: session.user.id,\n                taskName,\n                score: parseFloat(score),\n                maxScore: parseFloat(maxScore)\n            },\n            include: {\n                student: {\n                    select: {\n                        id: true,\n                        name: true,\n                        nisn: true\n                    }\n                },\n                subject: {\n                    select: {\n                        id: true,\n                        name: true\n                    }\n                }\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Nilai berhasil ditambahkan\",\n            grade\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Create grade error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Terjadi kesalahan server\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVuaWxhaWFuLWd1cnUtc2QvLi9zcmMvYXBwL2FwaS9ncmFkZXMvcm91dGUudHM/YTQ2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnLi4vYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlJ1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnXHJcblxyXG4vLyBHRVQgLSBBbWJpbCBzZW11YSBuaWxhaVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxyXG5cclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybClcclxuICAgIGNvbnN0IHN0dWRlbnRJZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3N0dWRlbnRJZCcpXHJcbiAgICBjb25zdCBzdWJqZWN0SWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdzdWJqZWN0SWQnKVxyXG5cclxuICAgIGNvbnN0IHdoZXJlQ2xhdXNlOiBhbnkgPSB7XHJcbiAgICAgIHRlYWNoZXJJZDogc2Vzc2lvbi51c2VyLmlkXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0dWRlbnRJZCkgd2hlcmVDbGF1c2Uuc3R1ZGVudElkID0gc3R1ZGVudElkXHJcbiAgICBpZiAoc3ViamVjdElkKSB3aGVyZUNsYXVzZS5zdWJqZWN0SWQgPSBzdWJqZWN0SWRcclxuXHJcbiAgICBjb25zdCBncmFkZXMgPSBhd2FpdCBwcmlzbWEuZ3JhZGUuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogd2hlcmVDbGF1c2UsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBzdHVkZW50OiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgICAgIG5pc246IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1YmplY3Q6IHtcclxuICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeTogW1xyXG4gICAgICAgIHsgZGF0ZTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgeyBzdHVkZW50OiB7IG5hbWU6ICdhc2MnIH0gfVxyXG4gICAgICBdXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihncmFkZXMpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0dldCBncmFkZXMgZXJyb3I6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdUZXJqYWRpIGtlc2FsYWhhbiBzZXJ2ZXInIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLy8gUE9TVCAtIFRhbWJhaCBuaWxhaSBiYXJ1XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxyXG5cclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgIGNvbnN0IHsgc3R1ZGVudElkLCBzdWJqZWN0SWQsIHRhc2tOYW1lLCBzY29yZSwgbWF4U2NvcmUgPSAxMDAgfSA9IGJvZHlcclxuXHJcbiAgICBpZiAoIXN0dWRlbnRJZCB8fCAhc3ViamVjdElkIHx8ICF0YXNrTmFtZSB8fCBzY29yZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnU2VtdWEgZmllbGQgaGFydXMgZGlpc2knIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2NvcmUgPCAwIHx8IHNjb3JlID4gbWF4U2NvcmUpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IGBOaWxhaSBoYXJ1cyBhbnRhcmEgMC0ke21heFNjb3JlfWAgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmaWthc2kgc2lzd2EgbWlsaWsgZ3VydSB5YW5nIGxvZ2luXHJcbiAgICBjb25zdCBzdHVkZW50ID0gYXdhaXQgcHJpc21hLnN0dWRlbnQuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogc3R1ZGVudElkLFxyXG4gICAgICAgIHRlYWNoZXJJZDogc2Vzc2lvbi51c2VyLmlkXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFzdHVkZW50KSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnU2lzd2EgdGlkYWsgZGl0ZW11a2FuJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZpa2FzaSBtYXRhIHBlbGFqYXJhbiBzZXN1YWkgZGVuZ2FuIHRpbmdrYXQga2VsYXNcclxuICAgIGNvbnN0IHN1YmplY3QgPSBhd2FpdCBwcmlzbWEuc3ViamVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBzdWJqZWN0SWQsXHJcbiAgICAgICAgY2xhc3NMZXZlbDogc3R1ZGVudC5jbGFzcyA8PSAzID8gMyA6IDZcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoIXN1YmplY3QpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdNYXRhIHBlbGFqYXJhbiB0aWRhayBzZXN1YWkgZGVuZ2FuIHRpbmdrYXQga2VsYXMnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBncmFkZSA9IGF3YWl0IHByaXNtYS5ncmFkZS5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgc3R1ZGVudElkLFxyXG4gICAgICAgIHN1YmplY3RJZCxcclxuICAgICAgICB0ZWFjaGVySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgICAgICB0YXNrTmFtZSxcclxuICAgICAgICBzY29yZTogcGFyc2VGbG9hdChzY29yZSksXHJcbiAgICAgICAgbWF4U2NvcmU6IHBhcnNlRmxvYXQobWF4U2NvcmUpXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBzdHVkZW50OiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgICAgIG5pc246IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1YmplY3Q6IHtcclxuICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgbWVzc2FnZTogJ05pbGFpIGJlcmhhc2lsIGRpdGFtYmFoa2FuJywgZ3JhZGUgfSxcclxuICAgICAgeyBzdGF0dXM6IDIwMSB9XHJcbiAgICApXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0ZSBncmFkZSBlcnJvcjonLCBlcnJvcilcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogJ1RlcmphZGkga2VzYWxhaGFuIHNlcnZlcicgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsIkdFVCIsInJlcXVlc3QiLCJzZXNzaW9uIiwidXNlciIsImlkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwic3R1ZGVudElkIiwiZ2V0Iiwic3ViamVjdElkIiwid2hlcmVDbGF1c2UiLCJ0ZWFjaGVySWQiLCJncmFkZXMiLCJncmFkZSIsImZpbmRNYW55Iiwid2hlcmUiLCJpbmNsdWRlIiwic3R1ZGVudCIsInNlbGVjdCIsIm5hbWUiLCJuaXNuIiwic3ViamVjdCIsIm9yZGVyQnkiLCJkYXRlIiwiY29uc29sZSIsIlBPU1QiLCJib2R5IiwidGFza05hbWUiLCJzY29yZSIsIm1heFNjb3JlIiwidW5kZWZpbmVkIiwiZmluZEZpcnN0IiwiY2xhc3NMZXZlbCIsImNsYXNzIiwiY3JlYXRlIiwiZGF0YSIsInBhcnNlRmxvYXQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/grades/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   verifyPassword: () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(password) {\n    const saltRounds = 12;\n    return await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, saltRounds);\n}\nasync function verifyPassword(password, hashedPassword) {\n    return await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(password, hashedPassword);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQjtBQUVwQixlQUFlQyxhQUFhQyxRQUFnQjtJQUNqRCxNQUFNQyxhQUFhO0lBQ25CLE9BQU8sTUFBTUgsa0RBQVcsQ0FBQ0UsVUFBVUM7QUFDckM7QUFFTyxlQUFlRSxlQUFlSCxRQUFnQixFQUFFSSxjQUFzQjtJQUMzRSxPQUFPLE1BQU1OLHFEQUFjLENBQUNFLFVBQVVJO0FBQ3hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVuaWxhaWFuLWd1cnUtc2QvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgY29uc3Qgc2FsdFJvdW5kcyA9IDEyXHJcbiAgcmV0dXJuIGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0Um91bmRzKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZywgaGFzaGVkUGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIHJldHVybiBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpXHJcbn0iXSwibmFtZXMiOlsiYmNyeXB0IiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJzYWx0Um91bmRzIiwiaGFzaCIsInZlcmlmeVBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJjb21wYXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsa0JBQWtCQztBQUlqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO0tBQVE7QUFDaEIsR0FBRTtBQUVKLElBQUlDLElBQXlCLEVBQWNKLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlbmlsYWlhbi1ndXJ1LXNkLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XHJcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XHJcbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xyXG4gIG5ldyBQcmlzbWFDbGllbnQoe1xyXG4gICAgbG9nOiBbJ3F1ZXJ5J10sXHJcbiAgfSlcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgrades%2Froute&page=%2Fapi%2Fgrades%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgrades%2Froute.ts&appDir=D%3A%5CFILE%20FIKRI%5Cpenilaian%20sd%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CFILE%20FIKRI%5Cpenilaian%20sd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();