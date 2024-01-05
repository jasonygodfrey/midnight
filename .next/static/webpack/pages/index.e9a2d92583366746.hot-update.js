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

/***/ "./utils/Galaxy.js":
/*!*************************!*\
  !*** ./utils/Galaxy.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGalaxy: function() { return /* binding */ createGalaxy; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nfunction createGalaxy(scene) {\n    // Improved Galaxy Particle System\n    const particlesGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n    const particlesCnt = 10000; // Increased particle count\n    const posArray = new Float32Array(particlesCnt * 3);\n    // Spiral Galaxy Formation\n    for(let i = 0; i < particlesCnt; i++){\n        const i3 = i * 3;\n        const radius = Math.random() * 5;\n        const spinAngle = radius * Math.PI * 4;\n        const branchAngle = i % 3 / 3 * 2 * Math.PI;\n        posArray[i3] = Math.cos(spinAngle + branchAngle) * radius;\n        posArray[i3 + 1] = Math.random() - 0.5; // Random height\n        posArray[i3 + 2] = Math.sin(spinAngle + branchAngle) * radius;\n    }\n    particlesGeometry.setAttribute(\"position\", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(posArray, 3));\n    const particlesMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({\n        size: 0.005,\n        color: 0x8a2be2 // Purple color\n    });\n    const particleMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Points(particlesGeometry, particlesMaterial);\n    scene.add(particleMesh);\n    return particleMesh;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9HYWxheHkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0I7QUFFeEIsU0FBU0MsYUFBYUMsS0FBSztJQUM5QixrQ0FBa0M7SUFDbEMsTUFBTUMsb0JBQW9CLElBQUlILGlEQUFvQjtJQUNsRCxNQUFNSyxlQUFlLE9BQU8sMkJBQTJCO0lBQ3ZELE1BQU1DLFdBQVcsSUFBSUMsYUFBYUYsZUFBZTtJQUVqRCwwQkFBMEI7SUFDMUIsSUFBSyxJQUFJRyxJQUFJLEdBQUdBLElBQUlILGNBQWNHLElBQUs7UUFDbkMsTUFBTUMsS0FBS0QsSUFBSTtRQUNmLE1BQU1FLFNBQVNDLEtBQUtDLE1BQU0sS0FBSztRQUMvQixNQUFNQyxZQUFZSCxTQUFTQyxLQUFLRyxFQUFFLEdBQUc7UUFDckMsTUFBTUMsY0FBYyxJQUFNLElBQUssSUFBSyxJQUFJSixLQUFLRyxFQUFFO1FBRS9DUixRQUFRLENBQUNHLEdBQUcsR0FBR0UsS0FBS0ssR0FBRyxDQUFDSCxZQUFZRSxlQUFlTDtRQUNuREosUUFBUSxDQUFDRyxLQUFLLEVBQUUsR0FBR0UsS0FBS0MsTUFBTSxLQUFLLEtBQUssZ0JBQWdCO1FBQ3hETixRQUFRLENBQUNHLEtBQUssRUFBRSxHQUFHRSxLQUFLTSxHQUFHLENBQUNKLFlBQVlFLGVBQWVMO0lBQzNEO0lBQ0FQLGtCQUFrQmUsWUFBWSxDQUFDLFlBQVksSUFBSWxCLGtEQUFxQixDQUFDTSxVQUFVO0lBRS9FLE1BQU1jLG9CQUFvQixJQUFJcEIsaURBQW9CLENBQUM7UUFDL0NzQixNQUFNO1FBQ05DLE9BQU8sU0FBUyxlQUFlO0lBQ25DO0lBRUEsTUFBTUMsZUFBZSxJQUFJeEIseUNBQVksQ0FBQ0csbUJBQW1CaUI7SUFDekRsQixNQUFNd0IsR0FBRyxDQUFDRjtJQUVWLE9BQU9BO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvR2FsYXh5LmpzP2Y0YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FsYXh5KHNjZW5lKSB7XHJcbiAgICAvLyBJbXByb3ZlZCBHYWxheHkgUGFydGljbGUgU3lzdGVtXHJcbiAgICBjb25zdCBwYXJ0aWNsZXNHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgY29uc3QgcGFydGljbGVzQ250ID0gMTAwMDA7IC8vIEluY3JlYXNlZCBwYXJ0aWNsZSBjb3VudFxyXG4gICAgY29uc3QgcG9zQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHBhcnRpY2xlc0NudCAqIDMpO1xyXG5cclxuICAgIC8vIFNwaXJhbCBHYWxheHkgRm9ybWF0aW9uXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0NudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaTMgPSBpICogMztcclxuICAgICAgICBjb25zdCByYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogNTtcclxuICAgICAgICBjb25zdCBzcGluQW5nbGUgPSByYWRpdXMgKiBNYXRoLlBJICogNDtcclxuICAgICAgICBjb25zdCBicmFuY2hBbmdsZSA9ICgoaSAlIDMpIC8gMykgKiAyICogTWF0aC5QSTtcclxuXHJcbiAgICAgICAgcG9zQXJyYXlbaTNdID0gTWF0aC5jb3Moc3BpbkFuZ2xlICsgYnJhbmNoQW5nbGUpICogcmFkaXVzO1xyXG4gICAgICAgIHBvc0FycmF5W2kzICsgMV0gPSBNYXRoLnJhbmRvbSgpIC0gMC41OyAvLyBSYW5kb20gaGVpZ2h0XHJcbiAgICAgICAgcG9zQXJyYXlbaTMgKyAyXSA9IE1hdGguc2luKHNwaW5BbmdsZSArIGJyYW5jaEFuZ2xlKSAqIHJhZGl1cztcclxuICAgIH1cclxuICAgIHBhcnRpY2xlc0dlb21ldHJ5LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc0FycmF5LCAzKSk7XHJcblxyXG4gICAgY29uc3QgcGFydGljbGVzTWF0ZXJpYWwgPSBuZXcgVEhSRUUuUG9pbnRzTWF0ZXJpYWwoe1xyXG4gICAgICAgIHNpemU6IDAuMDA1LFxyXG4gICAgICAgIGNvbG9yOiAweDhhMmJlMiAvLyBQdXJwbGUgY29sb3JcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBhcnRpY2xlTWVzaCA9IG5ldyBUSFJFRS5Qb2ludHMocGFydGljbGVzR2VvbWV0cnksIHBhcnRpY2xlc01hdGVyaWFsKTtcclxuICAgIHNjZW5lLmFkZChwYXJ0aWNsZU1lc2gpO1xyXG5cclxuICAgIHJldHVybiBwYXJ0aWNsZU1lc2g7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiY3JlYXRlR2FsYXh5Iiwic2NlbmUiLCJwYXJ0aWNsZXNHZW9tZXRyeSIsIkJ1ZmZlckdlb21ldHJ5IiwicGFydGljbGVzQ250IiwicG9zQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJpIiwiaTMiLCJyYWRpdXMiLCJNYXRoIiwicmFuZG9tIiwic3BpbkFuZ2xlIiwiUEkiLCJicmFuY2hBbmdsZSIsImNvcyIsInNpbiIsInNldEF0dHJpYnV0ZSIsIkJ1ZmZlckF0dHJpYnV0ZSIsInBhcnRpY2xlc01hdGVyaWFsIiwiUG9pbnRzTWF0ZXJpYWwiLCJzaXplIiwiY29sb3IiLCJwYXJ0aWNsZU1lc2giLCJQb2ludHMiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/Galaxy.js\n"));

/***/ }),

/***/ "./utils/app.js":
/*!**********************!*\
  !*** ./utils/app.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three-stdlib */ \"./node_modules/three-stdlib/index.js\");\n/* harmony import */ var _Galaxy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Galaxy.js */ \"./utils/Galaxy.js\");\n\n\n\n\n\n\n // Import the createGalaxy function\nfunction initializeThreeJS(mountPoint) {\n    const clock = new three__WEBPACK_IMPORTED_MODULE_1__.Clock();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_1__.Vector2();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 1;\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0x000000, 1); // Black background\n    mountPoint.appendChild(renderer.domElement);\n    // Improved Galaxy Particle System\n    const particlesGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry();\n    const particlesCnt = 10000; // Increased particle count\n    const posArray = new Float32Array(particlesCnt * 3);\n    // Spiral Galaxy Formation\n    for(let i = 0; i < particlesCnt; i++){\n        const i3 = i * 3;\n        const radius = Math.random() * 5;\n        const spinAngle = radius * Math.PI * 4;\n        const branchAngle = i % 3 / 3 * 2 * Math.PI;\n        posArray[i3] = Math.cos(spinAngle + branchAngle) * radius;\n        posArray[i3 + 1] = Math.random() - 0.5; // Random height\n        posArray[i3 + 2] = Math.sin(spinAngle + branchAngle) * radius;\n    }\n    particlesGeometry.setAttribute(\"position\", new three__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(posArray, 3));\n    const particlesMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({\n        size: 0.005,\n        color: 0x8a2be2 // Purple color\n    });\n    const particleMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Points(particlesGeometry, particlesMaterial);\n    scene.add(particleMesh);\n    // Load the GLTF models\n    let mixer1, mixer2;\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n    // Load 'planck_kingdom' model\n    loader.load(\"planck_kingdom/scene.gltf\", function(gltf) {\n        gltf.scene.position.set(0, 0, 0);\n        scene.add(gltf.scene);\n        mixer1 = new three__WEBPACK_IMPORTED_MODULE_1__.AnimationMixer(gltf.scene);\n        if (gltf.animations.length) {\n            const action = mixer1.clipAction(gltf.animations[0]);\n            action.play();\n        }\n    }, undefined, function(error) {\n        console.error(\"Error loading planck_kingdom model:\", error);\n    });\n    // Load 'xalatath' model\n    loader.load(\"xalatath/scene.gltf\", function(gltf) {\n        gltf.scene.position.set(0, -35, -15);\n        scene.add(gltf.scene);\n        mixer2 = new three__WEBPACK_IMPORTED_MODULE_1__.AnimationMixer(gltf.scene);\n        if (gltf.animations.length) {\n            const action = mixer2.clipAction(gltf.animations[0]);\n            action.play();\n        }\n    }, undefined, function(error) {\n        console.error(\"Error loading xalatath model:\", error);\n    });\n    // Lighting\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0xffffff, 1);\n    scene.add(ambientLight);\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff, 5);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_1__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_5__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    composer.addPass(bloomPass);\n    // Resize handler\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Device orientation controls\n    let deviceOrientationControls;\n    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {\n        deviceOrientationControls = new three_stdlib__WEBPACK_IMPORTED_MODULE_6__.DeviceOrientationControls(camera);\n        deviceOrientationControls.connect();\n    }\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        const delta = clock.getDelta();\n        if (mixer1) mixer1.update(delta);\n        if (mixer2) mixer2.update(delta);\n        if (deviceOrientationControls) deviceOrientationControls.update();\n        particleMesh.rotation.y += 0.001; // Rotate the galaxy\n        composer.render();\n    }\n    animate();\n    // Mouse and zoom controls\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n    window.addEventListener(\"wheel\", (event)=>{\n        camera.position.z += event.deltaY > 0 ? 1 : -1;\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsRUFBRUQsT0FBT0UsV0FBVztRQUN0RHlELFNBQVNuRCxPQUFPLENBQUNSLE9BQU9DLFVBQVUsRUFBRUQsT0FBT0UsV0FBVztJQUMxRDtJQUNBRixPQUFPZ0UsZ0JBQWdCLENBQUMsVUFBVUgsZ0JBQWdCO0lBRWxELDhCQUE4QjtJQUM5QixJQUFJSTtJQUNKLElBQUksdUJBQXVCQyxJQUFJLENBQUNDLFVBQVVDLFNBQVMsR0FBRztRQUNsREgsNEJBQTRCLElBQUk3RSxtRUFBeUJBLENBQUNVO1FBQzFEbUUsMEJBQTBCSSxPQUFPO0lBQ3JDO0lBRUEsaUJBQWlCO0lBQ2pCLFNBQVNDO1FBQ0xDLHNCQUFzQkQ7UUFDdEIsTUFBTUUsUUFBUWhGLE1BQU1pRixRQUFRO1FBQzVCLElBQUlyQyxRQUFRQSxPQUFPc0MsTUFBTSxDQUFDRjtRQUMxQixJQUFJbkMsUUFBUUEsT0FBT3FDLE1BQU0sQ0FBQ0Y7UUFDMUIsSUFBSVAsMkJBQTJCQSwwQkFBMEJTLE1BQU07UUFDL0R6QyxhQUFhMEMsUUFBUSxDQUFDQyxDQUFDLElBQUksT0FBTyxvQkFBb0I7UUFDdERqQixTQUFTa0IsTUFBTTtJQUNuQjtJQUVBUDtJQUVBLDBCQUEwQjtJQUMxQnRFLE9BQU9nRSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUNjO1FBQ2xDcEYsTUFBTXFGLENBQUMsR0FBRyxNQUFPQyxPQUFPLEdBQUdoRixPQUFPQyxVQUFVLEdBQUksSUFBSTtRQUNwRFAsTUFBTWtGLENBQUMsR0FBRyxDQUFFRSxDQUFBQSxNQUFNRyxPQUFPLEdBQUdqRixPQUFPRSxXQUFXLElBQUksSUFBSTtJQUMxRDtJQUNBRixPQUFPZ0UsZ0JBQWdCLENBQUMsU0FBUyxDQUFDYztRQUM5QmhGLE9BQU9LLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFLMEUsTUFBTUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDO0lBQ2xEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBwLmpzP2MyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBFZmZlY3RDb21wb3NlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvRWZmZWN0Q29tcG9zZXIuanNcIjtcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1JlbmRlclBhc3MuanNcIjtcbmltcG9ydCB7IFVucmVhbEJsb29tUGFzcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvVW5yZWFsQmxvb21QYXNzLmpzXCI7XG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgeyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIH0gZnJvbSAndGhyZWUtc3RkbGliJztcbmltcG9ydCB7IGNyZWF0ZUdhbGF4eSB9IGZyb20gJy4vR2FsYXh5LmpzJzsgLy8gSW1wb3J0IHRoZSBjcmVhdGVHYWxheHkgZnVuY3Rpb25cblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVRocmVlSlMobW91bnRQb2ludCkge1xuICAgIGNvbnN0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG4gICAgbGV0IG1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIC8vIFNldCB1cCB0aGUgc2NlbmUsIGNhbWVyYSwgYW5kIHJlbmRlcmVyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbHBoYTogdHJ1ZSB9KTtcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHgwMDAwMDAsIDEpOyAvLyBCbGFjayBiYWNrZ3JvdW5kXG5cbiAgICBtb3VudFBvaW50LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4vLyBJbXByb3ZlZCBHYWxheHkgUGFydGljbGUgU3lzdGVtXG5jb25zdCBwYXJ0aWNsZXNHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuY29uc3QgcGFydGljbGVzQ250ID0gMTAwMDA7IC8vIEluY3JlYXNlZCBwYXJ0aWNsZSBjb3VudFxuY29uc3QgcG9zQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHBhcnRpY2xlc0NudCAqIDMpO1xuXG4vLyBTcGlyYWwgR2FsYXh5IEZvcm1hdGlvblxuZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNDbnQ7IGkrKykge1xuICAgIGNvbnN0IGkzID0gaSAqIDM7XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIDU7XG4gICAgY29uc3Qgc3BpbkFuZ2xlID0gcmFkaXVzICogTWF0aC5QSSAqIDQ7XG4gICAgY29uc3QgYnJhbmNoQW5nbGUgPSAoKGkgJSAzKSAvIDMpICogMiAqIE1hdGguUEk7XG5cbiAgICBwb3NBcnJheVtpM10gPSBNYXRoLmNvcyhzcGluQW5nbGUgKyBicmFuY2hBbmdsZSkgKiByYWRpdXM7XG4gICAgcG9zQXJyYXlbaTMgKyAxXSA9IE1hdGgucmFuZG9tKCkgLSAwLjU7IC8vIFJhbmRvbSBoZWlnaHRcbiAgICBwb3NBcnJheVtpMyArIDJdID0gTWF0aC5zaW4oc3BpbkFuZ2xlICsgYnJhbmNoQW5nbGUpICogcmFkaXVzO1xufVxucGFydGljbGVzR2VvbWV0cnkuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zQXJyYXksIDMpKTtcblxuICAgIGNvbnN0IHBhcnRpY2xlc01hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKHtcbiAgICAgICAgc2l6ZTogMC4wMDUsXG4gICAgICAgIGNvbG9yOiAweDhhMmJlMiAvLyBQdXJwbGUgY29sb3JcbiAgICB9KTtcbiAgICBjb25zdCBwYXJ0aWNsZU1lc2ggPSBuZXcgVEhSRUUuUG9pbnRzKHBhcnRpY2xlc0dlb21ldHJ5LCBwYXJ0aWNsZXNNYXRlcmlhbCk7XG4gICAgc2NlbmUuYWRkKHBhcnRpY2xlTWVzaCk7XG5cbiAgICAvLyBMb2FkIHRoZSBHTFRGIG1vZGVsc1xuICAgIGxldCBtaXhlcjEsIG1peGVyMjtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuXG4gICAgLy8gTG9hZCAncGxhbmNrX2tpbmdkb20nIG1vZGVsXG4gICAgbG9hZGVyLmxvYWQoJ3BsYW5ja19raW5nZG9tL3NjZW5lLmdsdGYnLCBmdW5jdGlvbiAoZ2x0Zikge1xuICAgICAgICBnbHRmLnNjZW5lLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICAgICAgc2NlbmUuYWRkKGdsdGYuc2NlbmUpO1xuICAgICAgICBtaXhlcjEgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIoZ2x0Zi5zY2VuZSk7XG4gICAgICAgIGlmIChnbHRmLmFuaW1hdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBtaXhlcjEuY2xpcEFjdGlvbihnbHRmLmFuaW1hdGlvbnNbMF0pO1xuICAgICAgICAgICAgYWN0aW9uLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH0sIHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgcGxhbmNrX2tpbmdkb20gbW9kZWw6JywgZXJyb3IpO1xuICAgIH0pO1xuXG4gICAgLy8gTG9hZCAneGFsYXRhdGgnIG1vZGVsXG4gICAgbG9hZGVyLmxvYWQoJ3hhbGF0YXRoL3NjZW5lLmdsdGYnLCBmdW5jdGlvbiAoZ2x0Zikge1xuICAgICAgICBnbHRmLnNjZW5lLnBvc2l0aW9uLnNldCgwLCAtMzUsIC0xNSk7XG4gICAgICAgIHNjZW5lLmFkZChnbHRmLnNjZW5lKTtcbiAgICAgICAgbWl4ZXIyID0gbmV3IFRIUkVFLkFuaW1hdGlvbk1peGVyKGdsdGYuc2NlbmUpO1xuICAgICAgICBpZiAoZ2x0Zi5hbmltYXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gbWl4ZXIyLmNsaXBBY3Rpb24oZ2x0Zi5hbmltYXRpb25zWzBdKTtcbiAgICAgICAgICAgIGFjdGlvbi5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9LCB1bmRlZmluZWQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHhhbGF0YXRoIG1vZGVsOicsIGVycm9yKTtcbiAgICB9KTtcblxuICAgIC8vIExpZ2h0aW5nXG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMSk7XG4gICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG4gICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCA1KTtcbiAgICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCgxLCAxLCAxKTtcbiAgICBzY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XG5cbiAgICAvLyBQb3N0LXByb2Nlc3NpbmdcbiAgICBjb25zdCByZW5kZXJTY2VuZSA9IG5ldyBSZW5kZXJQYXNzKHNjZW5lLCBjYW1lcmEpO1xuICAgIGNvbnN0IGJsb29tUGFzcyA9IG5ldyBVbnJlYWxCbG9vbVBhc3MobmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksIDEuNSwgMC40LCAwLjg1KTtcbiAgICBibG9vbVBhc3MudGhyZXNob2xkID0gMC4xO1xuICAgIGJsb29tUGFzcy5zdHJlbmd0aCA9IDAuNDtcbiAgICBibG9vbVBhc3MucmFkaXVzID0gMC4xO1xuXG4gICAgY29uc3QgY29tcG9zZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIocmVuZGVyZXIpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MocmVuZGVyU2NlbmUpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MoYmxvb21QYXNzKTtcblxuICAgIC8vIFJlc2l6ZSBoYW5kbGVyXG4gICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgY29tcG9zZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XG5cbiAgICAvLyBEZXZpY2Ugb3JpZW50YXRpb24gY29udHJvbHNcbiAgICBsZXQgZGV2aWNlT3JpZW50YXRpb25Db250cm9scztcbiAgICBpZiAoL01vYml8QW5kcm9pZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMgPSBuZXcgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyhjYW1lcmEpO1xuICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmNvbm5lY3QoKTtcbiAgICB9XG5cbiAgICAvLyBBbmltYXRpb24gbG9vcFxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xuICAgICAgICBpZiAobWl4ZXIxKSBtaXhlcjEudXBkYXRlKGRlbHRhKTtcbiAgICAgICAgaWYgKG1peGVyMikgbWl4ZXIyLnVwZGF0ZShkZWx0YSk7XG4gICAgICAgIGlmIChkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKSBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgICBwYXJ0aWNsZU1lc2gucm90YXRpb24ueSArPSAwLjAwMTsgLy8gUm90YXRlIHRoZSBnYWxheHlcbiAgICAgICAgY29tcG9zZXIucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpO1xuXG4gICAgLy8gTW91c2UgYW5kIHpvb20gY29udHJvbHNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG1vdXNlLnggPSAoZXZlbnQuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDIgLSAxO1xuICAgICAgICBtb3VzZS55ID0gLShldmVudC5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDIgKyAxO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4ge1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiArPSAoZXZlbnQuZGVsdGFZID4gMCA/IDEgOiAtMSk7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiVEhSRUUiLCJFZmZlY3RDb21wb3NlciIsIlJlbmRlclBhc3MiLCJVbnJlYWxCbG9vbVBhc3MiLCJHTFRGTG9hZGVyIiwiRGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsImNyZWF0ZUdhbGF4eSIsImluaXRpYWxpemVUaHJlZUpTIiwibW91bnRQb2ludCIsImNsb2NrIiwiQ2xvY2siLCJtb3VzZSIsIlZlY3RvcjIiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwicGFydGljbGVzR2VvbWV0cnkiLCJCdWZmZXJHZW9tZXRyeSIsInBhcnRpY2xlc0NudCIsInBvc0FycmF5IiwiRmxvYXQzMkFycmF5IiwiaSIsImkzIiwicmFkaXVzIiwiTWF0aCIsInJhbmRvbSIsInNwaW5BbmdsZSIsIlBJIiwiYnJhbmNoQW5nbGUiLCJjb3MiLCJzaW4iLCJzZXRBdHRyaWJ1dGUiLCJCdWZmZXJBdHRyaWJ1dGUiLCJwYXJ0aWNsZXNNYXRlcmlhbCIsIlBvaW50c01hdGVyaWFsIiwic2l6ZSIsImNvbG9yIiwicGFydGljbGVNZXNoIiwiUG9pbnRzIiwiYWRkIiwibWl4ZXIxIiwibWl4ZXIyIiwibG9hZGVyIiwibG9hZCIsImdsdGYiLCJzZXQiLCJBbmltYXRpb25NaXhlciIsImFuaW1hdGlvbnMiLCJsZW5ndGgiLCJhY3Rpb24iLCJjbGlwQWN0aW9uIiwicGxheSIsInVuZGVmaW5lZCIsImVycm9yIiwiY29uc29sZSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwicmVuZGVyU2NlbmUiLCJibG9vbVBhc3MiLCJ0aHJlc2hvbGQiLCJzdHJlbmd0aCIsImNvbXBvc2VyIiwiYWRkUGFzcyIsIm9uV2luZG93UmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNvbm5lY3QiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVsdGEiLCJnZXREZWx0YSIsInVwZGF0ZSIsInJvdGF0aW9uIiwieSIsInJlbmRlciIsImV2ZW50IiwieCIsImNsaWVudFgiLCJjbGllbnRZIiwiZGVsdGFZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});