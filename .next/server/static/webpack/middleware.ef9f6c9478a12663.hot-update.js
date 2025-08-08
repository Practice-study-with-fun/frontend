"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   clerk: () => (/* binding */ clerk),\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/index.js\");\n\n\nconst clerk = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.clerkMiddleware)();\nconst auth = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__.authMiddleware)({});\nconst config = {\n    matcher: [\n        \"/dashboard\",\n        // Skip Next.js internals and all static files, unless found in search params\n        '/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\n        // Always run for API routes\n        '/(api|trpc)(.*)'\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1RDtBQUNSO0FBQ3hDLE1BQU1FLFFBQVFGLHFFQUFlQSxHQUFHO0FBQ2hDLE1BQU1HLE9BQU9GLDZEQUFjQSxDQUFDLENBQUMsR0FBRztBQUVoQyxNQUFNRyxTQUFTO0lBQ3BCQyxTQUFTO1FBQ1A7UUFDQSw2RUFBNkU7UUFDN0U7UUFDQSw0QkFBNEI7UUFDNUI7S0FDRDtBQUNILEVBQUUiLCJzb3VyY2VzIjpbIkQ6XFxCaXB1bFxcd2ViLWRldmVsb3BtZW50XFxwcmFjdGljZVxccmVhZGR5X0ZpcnN0X1NpdGVcXG1pZGRsZXdhcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlcmtNaWRkbGV3YXJlIH0gZnJvbSAnQGNsZXJrL25leHRqcy9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBhdXRoTWlkZGxld2FyZSB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XHJcbmV4cG9ydCBjb25zdCBjbGVyayA9IGNsZXJrTWlkZGxld2FyZSgpO1xyXG5leHBvcnQgY29uc3QgYXV0aCA9IGF1dGhNaWRkbGV3YXJlKHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogW1xyXG4gICAgXCIvZGFzaGJvYXJkXCIsXHJcbiAgICAvLyBTa2lwIE5leHQuanMgaW50ZXJuYWxzIGFuZCBhbGwgc3RhdGljIGZpbGVzLCB1bmxlc3MgZm91bmQgaW4gc2VhcmNoIHBhcmFtc1xyXG4gICAgJy8oKD8hX25leHR8W14/XSpcXFxcLig/Omh0bWw/fGNzc3xqcyg/IW9uKXxqcGU/Z3x3ZWJwfHBuZ3xnaWZ8c3ZnfHR0Znx3b2ZmMj98aWNvfGNzdnxkb2N4P3x4bHN4P3x6aXB8d2VibWFuaWZlc3QpKS4qKScsXHJcbiAgICAvLyBBbHdheXMgcnVuIGZvciBBUEkgcm91dGVzXHJcbiAgICAnLyhhcGl8dHJwYykoLiopJyxcclxuICBdLFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNsZXJrTWlkZGxld2FyZSIsImF1dGhNaWRkbGV3YXJlIiwiY2xlcmsiLCJhdXRoIiwiY29uZmlnIiwibWF0Y2hlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});