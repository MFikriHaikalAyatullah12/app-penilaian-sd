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

/***/ "(rsc)/./src/app/api/grades/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/grades/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth-config */ \"(rsc)/./src/lib/auth-config.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\n// GET - Ambil semua nilai\nasync function GET(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth_config__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const { searchParams } = new URL(request.url);\n        const studentId = searchParams.get(\"studentId\");\n        const subjectId = searchParams.get(\"subjectId\");\n        const whereClause = {\n            teacherId: session.user.id\n        };\n        if (studentId) whereClause.studentId = studentId;\n        if (subjectId) whereClause.subjectId = subjectId;\n        const grades = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.grade.findMany({\n            where: whereClause,\n            include: {\n                student: {\n                    select: {\n                        id: true,\n                        name: true,\n                        nisn: true\n                    }\n                },\n                subject: {\n                    select: {\n                        id: true,\n                        name: true\n                    }\n                }\n            },\n            orderBy: [\n                {\n                    date: \"desc\"\n                },\n                {\n                    student: {\n                        name: \"asc\"\n                    }\n                }\n            ]\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(grades);\n    } catch (error) {\n        console.error(\"Get grades error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Terjadi kesalahan server\"\n        }, {\n            status: 500\n        });\n    }\n}\n// POST - Tambah nilai baru\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth_config__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const body = await request.json();\n        const { studentId, subjectId, taskName, score, maxScore = 100 } = body;\n        if (!studentId || !subjectId || !taskName || score === undefined) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Semua field harus diisi\"\n            }, {\n                status: 400\n            });\n        }\n        if (score < 0 || score > maxScore) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: `Nilai harus antara 0-${maxScore}`\n            }, {\n                status: 400\n            });\n        }\n        // Verifikasi siswa milik guru yang login\n        const student = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.student.findFirst({\n            where: {\n                id: studentId,\n                teacherId: session.user.id\n            }\n        });\n        if (!student) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Siswa tidak ditemukan\"\n            }, {\n                status: 404\n            });\n        }\n        // Verifikasi mata pelajaran sesuai dengan tingkat kelas\n        const subject = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.subject.findFirst({\n            where: {\n                id: subjectId,\n                classLevel: student.class <= 3 ? 3 : 6\n            }\n        });\n        if (!subject) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Mata pelajaran tidak sesuai dengan tingkat kelas\"\n            }, {\n                status: 400\n            });\n        }\n        const grade = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.grade.create({\n            data: {\n                studentId,\n                subjectId,\n                teacherId: session.user.id,\n                taskName,\n                score: parseFloat(score),\n                maxScore: parseFloat(maxScore)\n            },\n            include: {\n                student: {\n                    select: {\n                        id: true,\n                        name: true,\n                        nisn: true\n                    }\n                },\n                subject: {\n                    select: {\n                        id: true,\n                        name: true\n                    }\n                }\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Nilai berhasil ditambahkan\",\n            grade\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Create grade error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Terjadi kesalahan server\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZW5pbGFpYW4tZ3VydS1zZC8uL3NyYy9hcHAvYXBpL2dyYWRlcy9yb3V0ZS50cz9hNDY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYi9hdXRoLWNvbmZpZydcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJ1xyXG5cclxuLy8gR0VUIC0gQW1iaWwgc2VtdWEgbmlsYWlcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcclxuXHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpXHJcbiAgICBjb25zdCBzdHVkZW50SWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdzdHVkZW50SWQnKVxyXG4gICAgY29uc3Qgc3ViamVjdElkID0gc2VhcmNoUGFyYW1zLmdldCgnc3ViamVjdElkJylcclxuXHJcbiAgICBjb25zdCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgICB0ZWFjaGVySWQ6IHNlc3Npb24udXNlci5pZFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdHVkZW50SWQpIHdoZXJlQ2xhdXNlLnN0dWRlbnRJZCA9IHN0dWRlbnRJZFxyXG4gICAgaWYgKHN1YmplY3RJZCkgd2hlcmVDbGF1c2Uuc3ViamVjdElkID0gc3ViamVjdElkXHJcblxyXG4gICAgY29uc3QgZ3JhZGVzID0gYXdhaXQgcHJpc21hLmdyYWRlLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHdoZXJlQ2xhdXNlLFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgc3R1ZGVudDoge1xyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIGlkOiB0cnVlLFxyXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICBuaXNuOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJqZWN0OiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG5hbWU6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IFtcclxuICAgICAgICB7IGRhdGU6ICdkZXNjJyB9LFxyXG4gICAgICAgIHsgc3R1ZGVudDogeyBuYW1lOiAnYXNjJyB9IH1cclxuICAgICAgXVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZ3JhZGVzKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdHZXQgZ3JhZGVzIGVycm9yOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiAnVGVyamFkaSBrZXNhbGFoYW4gc2VydmVyJyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8vIFBPU1QgLSBUYW1iYWggbmlsYWkgYmFydVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcclxuXHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXHJcbiAgICBjb25zdCB7IHN0dWRlbnRJZCwgc3ViamVjdElkLCB0YXNrTmFtZSwgc2NvcmUsIG1heFNjb3JlID0gMTAwIH0gPSBib2R5XHJcblxyXG4gICAgaWYgKCFzdHVkZW50SWQgfHwgIXN1YmplY3RJZCB8fCAhdGFza05hbWUgfHwgc2NvcmUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogJ1NlbXVhIGZpZWxkIGhhcnVzIGRpaXNpJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNjb3JlIDwgMCB8fCBzY29yZSA+IG1heFNjb3JlKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiBgTmlsYWkgaGFydXMgYW50YXJhIDAtJHttYXhTY29yZX1gIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZmlrYXNpIHNpc3dhIG1pbGlrIGd1cnUgeWFuZyBsb2dpblxyXG4gICAgY29uc3Qgc3R1ZGVudCA9IGF3YWl0IHByaXNtYS5zdHVkZW50LmZpbmRGaXJzdCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IHN0dWRlbnRJZCxcclxuICAgICAgICB0ZWFjaGVySWQ6IHNlc3Npb24udXNlci5pZFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmICghc3R1ZGVudCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogJ1Npc3dhIHRpZGFrIGRpdGVtdWthbicgfSxcclxuICAgICAgICB7IHN0YXR1czogNDA0IH1cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmaWthc2kgbWF0YSBwZWxhamFyYW4gc2VzdWFpIGRlbmdhbiB0aW5na2F0IGtlbGFzXHJcbiAgICBjb25zdCBzdWJqZWN0ID0gYXdhaXQgcHJpc21hLnN1YmplY3QuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogc3ViamVjdElkLFxyXG4gICAgICAgIGNsYXNzTGV2ZWw6IHN0dWRlbnQuY2xhc3MgPD0gMyA/IDMgOiA2XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFzdWJqZWN0KSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnTWF0YSBwZWxhamFyYW4gdGlkYWsgc2VzdWFpIGRlbmdhbiB0aW5na2F0IGtlbGFzJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ3JhZGUgPSBhd2FpdCBwcmlzbWEuZ3JhZGUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN0dWRlbnRJZCxcclxuICAgICAgICBzdWJqZWN0SWQsXHJcbiAgICAgICAgdGVhY2hlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgdGFza05hbWUsXHJcbiAgICAgICAgc2NvcmU6IHBhcnNlRmxvYXQoc2NvcmUpLFxyXG4gICAgICAgIG1heFNjb3JlOiBwYXJzZUZsb2F0KG1heFNjb3JlKVxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgc3R1ZGVudDoge1xyXG4gICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgIGlkOiB0cnVlLFxyXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICBuaXNuOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJqZWN0OiB7XHJcbiAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG5hbWU6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IG1lc3NhZ2U6ICdOaWxhaSBiZXJoYXNpbCBkaXRhbWJhaGthbicsIGdyYWRlIH0sXHJcbiAgICAgIHsgc3RhdHVzOiAyMDEgfVxyXG4gICAgKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdDcmVhdGUgZ3JhZGUgZXJyb3I6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdUZXJqYWRpIGtlc2FsYWhhbiBzZXJ2ZXInIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJHRVQiLCJyZXF1ZXN0Iiwic2Vzc2lvbiIsInVzZXIiLCJpZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsInN0dWRlbnRJZCIsImdldCIsInN1YmplY3RJZCIsIndoZXJlQ2xhdXNlIiwidGVhY2hlcklkIiwiZ3JhZGVzIiwiZ3JhZGUiLCJmaW5kTWFueSIsIndoZXJlIiwiaW5jbHVkZSIsInN0dWRlbnQiLCJzZWxlY3QiLCJuYW1lIiwibmlzbiIsInN1YmplY3QiLCJvcmRlckJ5IiwiZGF0ZSIsImNvbnNvbGUiLCJQT1NUIiwiYm9keSIsInRhc2tOYW1lIiwic2NvcmUiLCJtYXhTY29yZSIsInVuZGVmaW5lZCIsImZpbmRGaXJzdCIsImNsYXNzTGV2ZWwiLCJjbGFzcyIsImNyZWF0ZSIsImRhdGEiLCJwYXJzZUZsb2F0IiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/grades/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth-config.ts":
/*!********************************!*\
  !*** ./src/lib/auth-config.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) {\n                    return null;\n                }\n                const isPasswordValid = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.verifyPassword)(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    assignedClass: user.assignedClass\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.assignedClass = user.assignedClass;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.id = token.sub;\n                session.user.assignedClass = token.assignedClass;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgtY29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDaUU7QUFDNUI7QUFDTTtBQUVwQyxNQUFNRyxjQUEyQjtJQUN0Q0MsV0FBVztRQUNUSiwyRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsT0FBTztnQkFDVDtnQkFFQSxNQUFNRSxPQUFPLE1BQU1YLCtDQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQ0xQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQzFCO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0ssTUFBTTtvQkFDVCxPQUFPO2dCQUNUO2dCQUVBLE1BQU1HLGtCQUFrQixNQUFNYix5REFBY0EsQ0FBQ0ksWUFBWUksUUFBUSxFQUFFRSxLQUFLRixRQUFRO2dCQUVoRixJQUFJLENBQUNLLGlCQUFpQjtvQkFDcEIsT0FBTztnQkFDVDtnQkFFQSxPQUFPO29CQUNMQyxJQUFJSixLQUFLSSxFQUFFO29CQUNYVCxPQUFPSyxLQUFLTCxLQUFLO29CQUNqQkYsTUFBTU8sS0FBS1AsSUFBSTtvQkFDZlksZUFBZUwsS0FBS0ssYUFBYTtnQkFDbkM7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFVixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUlUsTUFBTUwsYUFBYSxHQUFHLEtBQWNBLGFBQWE7WUFDbkQ7WUFDQSxPQUFPSztRQUNUO1FBQ0EsTUFBTUosU0FBUSxFQUFFQSxPQUFPLEVBQUVJLEtBQUssRUFBRTtZQUM5QixJQUFJQSxTQUFTSixRQUFRTixJQUFJLEVBQUU7Z0JBQ3pCTSxRQUFRTixJQUFJLENBQUNJLEVBQUUsR0FBR00sTUFBTUMsR0FBRztnQkFDM0JMLFFBQVFOLElBQUksQ0FBQ0ssYUFBYSxHQUFHSyxNQUFNTCxhQUFhO1lBQ2xEO1lBQ0EsT0FBT0M7UUFDVDtJQUNGO0lBQ0FNLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlbmlsYWlhbi1ndXJ1LXNkLy4vc3JjL2xpYi9hdXRoLWNvbmZpZy50cz8wNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnXHJcbmltcG9ydCB7IHZlcmlmeVBhc3N3b3JkIH0gZnJvbSAnQC9saWIvYXV0aCdcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogQXV0aE9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDogeyBsYWJlbDogJ0VtYWlsJywgdHlwZTogJ2VtYWlsJyB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IHZlcmlmeVBhc3N3b3JkKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxyXG5cclxuICAgICAgICBpZiAoIWlzUGFzc3dvcmRWYWxpZCkge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgYXNzaWduZWRDbGFzczogdXNlci5hc3NpZ25lZENsYXNzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnXHJcbiAgfSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5hc3NpZ25lZENsYXNzID0gKHVzZXIgYXMgYW55KS5hc3NpZ25lZENsYXNzXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgaWYgKHRva2VuICYmIHNlc3Npb24udXNlcikge1xyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnN1YiFcclxuICAgICAgICBzZXNzaW9uLnVzZXIuYXNzaWduZWRDbGFzcyA9IHRva2VuLmFzc2lnbmVkQ2xhc3NcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogJy9sb2dpbicsXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcmlzbWEiLCJ2ZXJpZnlQYXNzd29yZCIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpc1Bhc3N3b3JkVmFsaWQiLCJpZCIsImFzc2lnbmVkQ2xhc3MiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInN1YiIsInBhZ2VzIiwic2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth-config.ts\n");

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