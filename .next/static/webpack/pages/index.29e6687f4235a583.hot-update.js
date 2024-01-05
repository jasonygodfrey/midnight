"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/app.js":
/*!**********************!*\
  !*** ./utils/app.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-stdlib */ \"./node_modules/three-stdlib/index.js\");\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    //camera.position.z = 1;\n    //camera.position.y = -2.;\n    //camera.rotation.x = 0.4; // Rotate camera slightly upwards\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0x000000, 1); // Beige color as default\n    mountPoint.appendChild(renderer.domElement);\n    // Load the GLTF model\n    let mixer; // Animation mixer\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();\n    loader.load(\"xalatath/scene.gltf\", function(gltf) {\n        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n        const texture = textureLoader.load(\"phantom_rings/textures/material_baseColor.png\");\n        gltf.scene.traverse(function(node) {\n            if (node.isMesh) {\n                node.material.map = texture;\n                node.material.needsUpdate = true;\n            }\n        });\n        scene.add(gltf.scene);\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create lights\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.5);\n    scene.add(ambientLight);\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 0.5);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    composer.addPass(bloomPass);\n    // Handle window resize\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Device orientation controls for mobile\n    let deviceOrientationControls;\n    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {\n        deviceOrientationControls = new three_stdlib__WEBPACK_IMPORTED_MODULE_5__.DeviceOrientationControls(camera);\n        deviceOrientationControls.connect();\n        deviceOrientationControls.update(); // Update to align with the default camera settings\n    }\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        const delta = clock.getDelta();\n        if (mixer) {\n            mixer.update(delta);\n        }\n        if (deviceOrientationControls) {\n            deviceOrientationControls.update();\n        // Manually adjust camera orientation here if needed\n        // For example, rotate 180 degrees around the Y axis\n        // camera.rotation.y += Math.PI; \n        }\n        composer.render();\n    }\n    animate();\n    // Mouse and zoom controls\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n    function zoom(direction) {\n        camera.position.z += direction;\n    }\n    window.addEventListener(\"wheel\", (event)=>{\n        zoom(event.deltaY > 0 ? 1 : -1);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUNzRDtBQUNSO0FBQ1U7QUFDakI7QUFDYjtBQUVsRCxTQUFTTSxrQkFBa0JDLFVBQVU7SUFDeEMsTUFBTUMsUUFBUSxJQUFJUix3Q0FBVztJQUM3QixJQUFJVSxRQUFRLElBQUlWLDBDQUFhO0lBRTdCLHlDQUF5QztJQUN6QyxNQUFNWSxRQUFRLElBQUlaLHdDQUFXO0lBQzdCLE1BQU1jLFNBQVMsSUFBSWQsb0RBQXVCLENBQUMsSUFBSWdCLE9BQU9DLFVBQVUsR0FBR0QsT0FBT0UsV0FBVyxFQUFFLEtBQUs7SUFFNUYsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQiw0REFBNEQ7SUFHNUQsTUFBTUMsV0FBVyxJQUFJbkIsZ0RBQW1CLENBQUM7UUFBRXFCLE9BQU87SUFBSztJQUN2REYsU0FBU0csT0FBTyxDQUFDTixPQUFPQyxVQUFVLEVBQUVELE9BQU9FLFdBQVc7SUFDdERDLFNBQVNJLGFBQWEsQ0FBQyxVQUFVLElBQUkseUJBQXlCO0lBRTlEaEIsV0FBV2lCLFdBQVcsQ0FBQ0wsU0FBU00sVUFBVTtJQUUxQyxzQkFBc0I7SUFDdEIsSUFBSUMsT0FBTyxrQkFBa0I7SUFDN0IsTUFBTUMsU0FBUyxJQUFJdkIsZ0ZBQVVBO0lBSTdCdUIsT0FBT0MsSUFBSSxDQUFDLHVCQUF1QixTQUFVQyxJQUFJO1FBQzdDLE1BQU1DLGdCQUFnQixJQUFJOUIsZ0RBQW1CO1FBQzdDLE1BQU1nQyxVQUFVRixjQUFjRixJQUFJLENBQUM7UUFDbkNDLEtBQUtqQixLQUFLLENBQUNxQixRQUFRLENBQUMsU0FBVUMsSUFBSTtZQUM5QixJQUFJQSxLQUFLQyxNQUFNLEVBQUU7Z0JBQ2JELEtBQUtFLFFBQVEsQ0FBQ0MsR0FBRyxHQUFHTDtnQkFDcEJFLEtBQUtFLFFBQVEsQ0FBQ0UsV0FBVyxHQUFHO1lBQ2hDO1FBQ0o7UUFDQTFCLE1BQU0yQixHQUFHLENBQUNWLEtBQUtqQixLQUFLO0lBQ3hCLEdBQUc0QixXQUFXLFNBQVVDLEtBQUs7UUFDekJDLFFBQVFELEtBQUssQ0FBQ0E7SUFDbEI7SUFHQSxnQkFBZ0I7SUFDaEIsTUFBTUUsZUFBZSxJQUFJM0MsK0NBQWtCLENBQUMsVUFBVTtJQUN2RFksTUFBTTJCLEdBQUcsQ0FBQ0k7SUFFVCxNQUFNRSxtQkFBbUIsSUFBSTdDLG1EQUFzQixDQUFDLFVBQVU7SUFDOUQ2QyxpQkFBaUJFLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsR0FBRztJQUNwQ3BDLE1BQU0yQixHQUFHLENBQUNNO0lBRVYsa0JBQWtCO0lBQ2xCLE1BQU1JLGNBQWMsSUFBSS9DLHVGQUFVQSxDQUFDVSxPQUFPRTtJQUUxQyxNQUFNb0MsWUFBWSxJQUFJL0MsaUdBQWVBLENBQ2pDLElBQUlILDBDQUFhLENBQUNnQixPQUFPQyxVQUFVLEVBQUVELE9BQU9FLFdBQVcsR0FDdkQsS0FBSyxLQUFLO0lBRWRnQyxVQUFVQyxTQUFTLEdBQUc7SUFDdEJELFVBQVVFLFFBQVEsR0FBRztJQUNyQkYsVUFBVUcsTUFBTSxHQUFHO0lBRW5CLE1BQU1DLFdBQVcsSUFBSXJELCtGQUFjQSxDQUFDa0I7SUFDcENtQyxTQUFTQyxPQUFPLENBQUNOO0lBQ2pCSyxTQUFTQyxPQUFPLENBQUNMO0lBRWpCLHVCQUF1QjtJQUN2QixTQUFTTTtRQUNMMUMsT0FBTzJDLE1BQU0sR0FBR3pDLE9BQU9DLFVBQVUsR0FBR0QsT0FBT0UsV0FBVztRQUN0REosT0FBTzRDLHNCQUFzQjtRQUM3QnZDLFNBQVNHLE9BQU8sQ0FBQ04sT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO1FBQ3REb0MsU0FBU2hDLE9BQU8sQ0FBQ04sT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO0lBQzFEO0lBQ0FGLE9BQU8yQyxnQkFBZ0IsQ0FBQyxVQUFVSCxnQkFBZ0I7SUFFbEQseUNBQXlDO0lBQ3pDLElBQUlJO0lBQ0osSUFBSSx1QkFBdUJDLElBQUksQ0FBQ0MsVUFBVUMsU0FBUyxHQUFHO1FBQ2xESCw0QkFBNEIsSUFBSXZELG1FQUF5QkEsQ0FBQ1M7UUFDMUQ4QywwQkFBMEJJLE9BQU87UUFDakNKLDBCQUEwQkssTUFBTSxJQUFJLG1EQUFtRDtJQUMzRjtJQUVKLGlCQUFpQjtJQUNqQixTQUFTQztRQUNMQyxzQkFBc0JEO1FBQ3RCLE1BQU1FLFFBQVE1RCxNQUFNNkQsUUFBUTtRQUM1QixJQUFJM0MsT0FBTztZQUNQQSxNQUFNdUMsTUFBTSxDQUFDRztRQUNqQjtRQUNBLElBQUlSLDJCQUEyQjtZQUMzQkEsMEJBQTBCSyxNQUFNO1FBQ2hDLG9EQUFvRDtRQUNwRCxvREFBb0Q7UUFDcEQsaUNBQWlDO1FBQ3JDO1FBQ0FYLFNBQVNnQixNQUFNO0lBQ25CO0lBRUlKO0lBRUEsMEJBQTBCO0lBQzFCbEQsT0FBTzJDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQ1k7UUFDbEM3RCxNQUFNOEQsQ0FBQyxHQUFHLE1BQU9DLE9BQU8sR0FBR3pELE9BQU9DLFVBQVUsR0FBSSxJQUFJO1FBQ3BEUCxNQUFNZ0UsQ0FBQyxHQUFHLENBQUVILENBQUFBLE1BQU1JLE9BQU8sR0FBRzNELE9BQU9FLFdBQVcsSUFBSSxJQUFJO0lBQzFEO0lBRUEsU0FBUzBELEtBQUtDLFNBQVM7UUFDbkIvRCxPQUFPaUMsUUFBUSxDQUFDK0IsQ0FBQyxJQUFJRDtJQUN6QjtJQUNBN0QsT0FBTzJDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQ1k7UUFDOUJLLEtBQUtMLE1BQU1RLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQztJQUNqQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2FwcC5qcz9jMjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgRWZmZWN0Q29tcG9zZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJQYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9SZW5kZXJQYXNzLmpzXCI7XG5pbXBvcnQgeyBVbnJlYWxCbG9vbVBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1VucmVhbEJsb29tUGFzcy5qc1wiO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyB9IGZyb20gJ3RocmVlLXN0ZGxpYic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVGhyZWVKUyhtb3VudFBvaW50KSB7XG4gICAgY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcbiAgICBsZXQgbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgLy8gU2V0IHVwIHRoZSBzY2VuZSwgY2FtZXJhLCBhbmQgcmVuZGVyZXJcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgXG4gICAgLy9jYW1lcmEucG9zaXRpb24ueiA9IDE7XG4gICAgLy9jYW1lcmEucG9zaXRpb24ueSA9IC0yLjtcbiAgICAvL2NhbWVyYS5yb3RhdGlvbi54ID0gMC40OyAvLyBSb3RhdGUgY2FtZXJhIHNsaWdodGx5IHVwd2FyZHNcblxuXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFscGhhOiB0cnVlIH0pO1xuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCwgMSk7IC8vIEJlaWdlIGNvbG9yIGFzIGRlZmF1bHRcblxuICAgIG1vdW50UG9pbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAvLyBMb2FkIHRoZSBHTFRGIG1vZGVsXG4gICAgbGV0IG1peGVyOyAvLyBBbmltYXRpb24gbWl4ZXJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuXG5cbiAgICBcbiAgICBsb2FkZXIubG9hZCgneGFsYXRhdGgvc2NlbmUuZ2x0ZicsIGZ1bmN0aW9uIChnbHRmKSB7XG4gICAgICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKCdwaGFudG9tX3JpbmdzL3RleHR1cmVzL21hdGVyaWFsX2Jhc2VDb2xvci5wbmcnKTtcbiAgICAgICAgZ2x0Zi5zY2VuZS50cmF2ZXJzZShmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUuaXNNZXNoKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5tYXRlcmlhbC5tYXAgPSB0ZXh0dXJlO1xuICAgICAgICAgICAgICAgIG5vZGUubWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2NlbmUuYWRkKGdsdGYuc2NlbmUpO1xuICAgIH0sIHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBDcmVhdGUgbGlnaHRzXG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMC41KTtcbiAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAwLjUpO1xuICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KDEsIDEsIDEpO1xuICAgIHNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KTtcblxuICAgIC8vIFBvc3QtcHJvY2Vzc2luZ1xuICAgIGNvbnN0IHJlbmRlclNjZW5lID0gbmV3IFJlbmRlclBhc3Moc2NlbmUsIGNhbWVyYSk7XG5cbiAgICBjb25zdCBibG9vbVBhc3MgPSBuZXcgVW5yZWFsQmxvb21QYXNzKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KSxcbiAgICAgICAgMS41LCAwLjQsIDAuODVcbiAgICApO1xuICAgIGJsb29tUGFzcy50aHJlc2hvbGQgPSAwLjE7XG4gICAgYmxvb21QYXNzLnN0cmVuZ3RoID0gMC40O1xuICAgIGJsb29tUGFzcy5yYWRpdXMgPSAwLjE7XG5cbiAgICBjb25zdCBjb21wb3NlciA9IG5ldyBFZmZlY3RDb21wb3NlcihyZW5kZXJlcik7XG4gICAgY29tcG9zZXIuYWRkUGFzcyhyZW5kZXJTY2VuZSk7XG4gICAgY29tcG9zZXIuYWRkUGFzcyhibG9vbVBhc3MpO1xuXG4gICAgLy8gSGFuZGxlIHdpbmRvdyByZXNpemVcbiAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBjb21wb3Nlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcblxuICAgIC8vIERldmljZSBvcmllbnRhdGlvbiBjb250cm9scyBmb3IgbW9iaWxlXG4gICAgbGV0IGRldmljZU9yaWVudGF0aW9uQ29udHJvbHM7XG4gICAgaWYgKC9Nb2JpfEFuZHJvaWR8aVBob25lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzID0gbmV3IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMoY2FtZXJhKTtcbiAgICAgICAgZGV2aWNlT3JpZW50YXRpb25Db250cm9scy5jb25uZWN0KCk7XG4gICAgICAgIGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMudXBkYXRlKCk7IC8vIFVwZGF0ZSB0byBhbGlnbiB3aXRoIHRoZSBkZWZhdWx0IGNhbWVyYSBzZXR0aW5nc1xuICAgIH1cblxuLy8gQW5pbWF0aW9uIGxvb3BcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcbiAgICBpZiAobWl4ZXIpIHtcbiAgICAgICAgbWl4ZXIudXBkYXRlKGRlbHRhKTtcbiAgICB9XG4gICAgaWYgKGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMpIHtcbiAgICAgICAgZGV2aWNlT3JpZW50YXRpb25Db250cm9scy51cGRhdGUoKTtcbiAgICAgICAgLy8gTWFudWFsbHkgYWRqdXN0IGNhbWVyYSBvcmllbnRhdGlvbiBoZXJlIGlmIG5lZWRlZFxuICAgICAgICAvLyBGb3IgZXhhbXBsZSwgcm90YXRlIDE4MCBkZWdyZWVzIGFyb3VuZCB0aGUgWSBheGlzXG4gICAgICAgIC8vIGNhbWVyYS5yb3RhdGlvbi55ICs9IE1hdGguUEk7IFxuICAgIH1cbiAgICBjb21wb3Nlci5yZW5kZXIoKTtcbn1cblxuICAgIGFuaW1hdGUoKTtcblxuICAgIC8vIE1vdXNlIGFuZCB6b29tIGNvbnRyb2xzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICBtb3VzZS54ID0gKGV2ZW50LmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiAyIC0gMTtcbiAgICAgICAgbW91c2UueSA9IC0oZXZlbnQuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAyICsgMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHpvb20oZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ICs9IGRpcmVjdGlvbjtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHpvb20oZXZlbnQuZGVsdGFZID4gMCA/IDEgOiAtMSk7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiVEhSRUUiLCJFZmZlY3RDb21wb3NlciIsIlJlbmRlclBhc3MiLCJVbnJlYWxCbG9vbVBhc3MiLCJHTFRGTG9hZGVyIiwiRGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsImluaXRpYWxpemVUaHJlZUpTIiwibW91bnRQb2ludCIsImNsb2NrIiwiQ2xvY2siLCJtb3VzZSIsIlZlY3RvcjIiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwibWl4ZXIiLCJsb2FkZXIiLCJsb2FkIiwiZ2x0ZiIsInRleHR1cmVMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwidGV4dHVyZSIsInRyYXZlcnNlIiwibm9kZSIsImlzTWVzaCIsIm1hdGVyaWFsIiwibWFwIiwibmVlZHNVcGRhdGUiLCJhZGQiLCJ1bmRlZmluZWQiLCJlcnJvciIsImNvbnNvbGUiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsInBvc2l0aW9uIiwic2V0IiwicmVuZGVyU2NlbmUiLCJibG9vbVBhc3MiLCJ0aHJlc2hvbGQiLCJzdHJlbmd0aCIsInJhZGl1cyIsImNvbXBvc2VyIiwiYWRkUGFzcyIsIm9uV2luZG93UmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNvbm5lY3QiLCJ1cGRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVsdGEiLCJnZXREZWx0YSIsInJlbmRlciIsImV2ZW50IiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsInpvb20iLCJkaXJlY3Rpb24iLCJ6IiwiZGVsdGFZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});