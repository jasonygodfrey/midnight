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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 1;\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0x000000, 1); // Black background\n    mountPoint.appendChild(renderer.domElement);\n    // Galaxy Shader Material\n    const shaderMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({\n        uniforms: {\n            time: {\n                value: 1.0\n            },\n            resolution: {\n                value: new three__WEBPACK_IMPORTED_MODULE_0__.Vector2()\n            }\n        },\n        vertexShader: \"varying vec2 vUv;\\n        void main() {\\n            vUv = uv;\\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\\n        }\",\n        fragmentShader: \"uniform float time;\\n        uniform vec2 resolution;\\n        varying vec2 vUv;\\n\\n        void main( void ) {\\n            vec2 p = -1.0 + 2.0 * vUv;\\n            float a = time*40.0;\\n            float d,e,f,g=1.0/40.0,h,i,r,q;\\n            e=400.0*(p.x*0.5+0.5);\\n            f=400.0*(p.y*0.5+0.5);\\n            i=200.0+sin(e*g+a/150.0)*20.0;\\n            d=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\\n            r=sqrt(pow(i-e,2.0)+pow(d-f,2.0));\\n            q=f/r;\\n            e=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\\n            d=sin(e*g)*176.0+sin(e*g)*164.0+r;\\n            h=((f+d)+a/2.0)*g;\\n            i=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*a);\\n            h=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\\n            h=(h+(f-e)*q+sin(r-(a+g/4.0)*7.0)*10.0)/(i+1.0)*2.0;\\n            i+=cos(h*2.3*sin(a/350.0-w)*38.0)*4.0;\\n            i=mod(i/5.6,256.0)/64.0;\\n            if(i<0.0) i+=4.0;\\n            if(i>=2.0) i=4.0-i;\\n            d=r/350.0;\\n            d+=sin(d*d*8.0)*0.52;\\n            f=(sin(a*g)+1.0)/2.0;\\n            gl_FragColor=vec4(vec3(f*i/1.6,i/2.0+0.1,0.5-i/3.0-d/1.7),1.0);\\n        }\"\n    });\n    // Set up the shader resolution\n    shaderMaterial.uniforms.resolution.value.x = window.innerWidth;\n    shaderMaterial.uniforms.resolution.value.y = window.innerHeight;\n    // Create a plane that the shader will act upon\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneBufferGeometry(2, 2);\n    const mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, shaderMaterial);\n    scene.add(mesh);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_1__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_2__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_3__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    composer.addPass(bloomPass);\n    // Resize handler\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n        shaderMaterial.uniforms.resolution.value.x = renderer.domElement.width;\n        shaderMaterial.uniforms.resolution.value.y = renderer.domElement.height;\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        shaderMaterial.uniforms.time.value = clock.getElapsedTime();\n        composer.render();\n    }\n    animate();\n}\n// Call this function to start the Three.js scene\ninitializeThreeJS(document.body); // Replace 'document.body' with the actual mount point in your HTML\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqRGpELGtCQUFrQnFELFNBQVNDLElBQUksR0FBRyxtRUFBbUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBwLmpzP2MyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgRWZmZWN0Q29tcG9zZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvRWZmZWN0Q29tcG9zZXIuanMnO1xuaW1wb3J0IHsgUmVuZGVyUGFzcyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9SZW5kZXJQYXNzLmpzJztcbmltcG9ydCB7IFVucmVhbEJsb29tUGFzcyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9VbnJlYWxCbG9vbVBhc3MuanMnO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyB9IGZyb20gJ3RocmVlLXN0ZGxpYic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVGhyZWVKUyhtb3VudFBvaW50KSB7XG4gICAgY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcblxuICAgIC8vIFNldCB1cCB0aGUgc2NlbmUsIGNhbWVyYSwgYW5kIHJlbmRlcmVyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbHBoYTogdHJ1ZSB9KTtcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHgwMDAwMDAsIDEpOyAvLyBCbGFjayBiYWNrZ3JvdW5kXG4gICAgbW91bnRQb2ludC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIC8vIEdhbGF4eSBTaGFkZXIgTWF0ZXJpYWxcbiAgICBjb25zdCBzaGFkZXJNYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICB0aW1lOiB7IHZhbHVlOiAxLjAgfSxcbiAgICAgICAgICAgIHJlc29sdXRpb246IHsgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfVxuICAgICAgICB9LFxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGB2YXJ5aW5nIHZlYzIgdlV2O1xuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICB2VXYgPSB1djtcbiAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XG4gICAgICAgIH1gLFxuICAgICAgICBmcmFnbWVudFNoYWRlcjogYHVuaWZvcm0gZmxvYXQgdGltZTtcbiAgICAgICAgdW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XG4gICAgICAgIHZhcnlpbmcgdmVjMiB2VXY7XG5cbiAgICAgICAgdm9pZCBtYWluKCB2b2lkICkge1xuICAgICAgICAgICAgdmVjMiBwID0gLTEuMCArIDIuMCAqIHZVdjtcbiAgICAgICAgICAgIGZsb2F0IGEgPSB0aW1lKjQwLjA7XG4gICAgICAgICAgICBmbG9hdCBkLGUsZixnPTEuMC80MC4wLGgsaSxyLHE7XG4gICAgICAgICAgICBlPTQwMC4wKihwLngqMC41KzAuNSk7XG4gICAgICAgICAgICBmPTQwMC4wKihwLnkqMC41KzAuNSk7XG4gICAgICAgICAgICBpPTIwMC4wK3NpbihlKmcrYS8xNTAuMCkqMjAuMDtcbiAgICAgICAgICAgIGQ9MjAwLjArY29zKGYqZy8yLjApKjE4LjArY29zKGUqZykqNy4wO1xuICAgICAgICAgICAgcj1zcXJ0KHBvdyhpLWUsMi4wKStwb3coZC1mLDIuMCkpO1xuICAgICAgICAgICAgcT1mL3I7XG4gICAgICAgICAgICBlPShyKmNvcyhxKSktYS8yLjA7Zj0ocipzaW4ocSkpLWEvMi4wO1xuICAgICAgICAgICAgZD1zaW4oZSpnKSoxNzYuMCtzaW4oZSpnKSoxNjQuMCtyO1xuICAgICAgICAgICAgaD0oKGYrZCkrYS8yLjApKmc7XG4gICAgICAgICAgICBpPWNvcyhoK3IqcC54LzEuMykqKGUrZSthKStjb3MocSpnKmEpO1xuICAgICAgICAgICAgaD1zaW4oZipnKSoxNDQuMC1zaW4oZSpnKSoyMTIuMCpwLng7XG4gICAgICAgICAgICBoPShoKyhmLWUpKnErc2luKHItKGErZy80LjApKjcuMCkqMTAuMCkvKGkrMS4wKSoyLjA7XG4gICAgICAgICAgICBpKz1jb3MoaCoyLjMqc2luKGEvMzUwLjAtdykqMzguMCkqNC4wO1xuICAgICAgICAgICAgaT1tb2QoaS81LjYsMjU2LjApLzY0LjA7XG4gICAgICAgICAgICBpZihpPDAuMCkgaSs9NC4wO1xuICAgICAgICAgICAgaWYoaT49Mi4wKSBpPTQuMC1pO1xuICAgICAgICAgICAgZD1yLzM1MC4wO1xuICAgICAgICAgICAgZCs9c2luKGQqZCo4LjApKjAuNTI7XG4gICAgICAgICAgICBmPShzaW4oYSpnKSsxLjApLzIuMDtcbiAgICAgICAgICAgIGdsX0ZyYWdDb2xvcj12ZWM0KHZlYzMoZippLzEuNixpLzIuMCswLjEsMC41LWkvMy4wLWQvMS43KSwxLjApO1xuICAgICAgICB9YFxuICAgIH0pO1xuXG4gICAgLy8gU2V0IHVwIHRoZSBzaGFkZXIgcmVzb2x1dGlvblxuICAgIHNoYWRlck1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUueCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHNoYWRlck1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUueSA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIC8vIENyZWF0ZSBhIHBsYW5lIHRoYXQgdGhlIHNoYWRlciB3aWxsIGFjdCB1cG9uXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgyLCAyKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIHNoYWRlck1hdGVyaWFsKTtcbiAgICBzY2VuZS5hZGQobWVzaCk7XG5cbiAgICAvLyBQb3N0LXByb2Nlc3NpbmdcbiAgICBjb25zdCByZW5kZXJTY2VuZSA9IG5ldyBSZW5kZXJQYXNzKHNjZW5lLCBjYW1lcmEpO1xuICAgIGNvbnN0IGJsb29tUGFzcyA9IG5ldyBVbnJlYWxCbG9vbVBhc3MobmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksIDEuNSwgMC40LCAwLjg1KTtcbiAgICBibG9vbVBhc3MudGhyZXNob2xkID0gMC4xO1xuICAgIGJsb29tUGFzcy5zdHJlbmd0aCA9IDAuNDtcbiAgICBibG9vbVBhc3MucmFkaXVzID0gMC4xO1xuXG4gICAgY29uc3QgY29tcG9zZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIocmVuZGVyZXIpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MocmVuZGVyU2NlbmUpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MoYmxvb21QYXNzKTtcblxuICAgIC8vIFJlc2l6ZSBoYW5kbGVyXG4gICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgY29tcG9zZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuICAgICAgICBzaGFkZXJNYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnggPSByZW5kZXJlci5kb21FbGVtZW50LndpZHRoO1xuICAgICAgICBzaGFkZXJNYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnkgPSByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodDtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XG5cbiAgICAvLyBBbmltYXRpb24gbG9vcFxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgc2hhZGVyTWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCk7XG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKTtcbn1cblxuLy8gQ2FsbCB0aGlzIGZ1bmN0aW9uIHRvIHN0YXJ0IHRoZSBUaHJlZS5qcyBzY2VuZVxuaW5pdGlhbGl6ZVRocmVlSlMoZG9jdW1lbnQuYm9keSk7IC8vIFJlcGxhY2UgJ2RvY3VtZW50LmJvZHknIHdpdGggdGhlIGFjdHVhbCBtb3VudCBwb2ludCBpbiB5b3VyIEhUTUxcbiJdLCJuYW1lcyI6WyJUSFJFRSIsIkVmZmVjdENvbXBvc2VyIiwiUmVuZGVyUGFzcyIsIlVucmVhbEJsb29tUGFzcyIsIkdMVEZMb2FkZXIiLCJEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIiwiaW5pdGlhbGl6ZVRocmVlSlMiLCJtb3VudFBvaW50IiwiY2xvY2siLCJDbG9jayIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwic2V0U2l6ZSIsInNldENsZWFyQ29sb3IiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzaGFkZXJNYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwidW5pZm9ybXMiLCJ0aW1lIiwidmFsdWUiLCJyZXNvbHV0aW9uIiwiVmVjdG9yMiIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwieCIsInkiLCJnZW9tZXRyeSIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJtZXNoIiwiTWVzaCIsImFkZCIsInJlbmRlclNjZW5lIiwiYmxvb21QYXNzIiwidGhyZXNob2xkIiwic3RyZW5ndGgiLCJyYWRpdXMiLCJjb21wb3NlciIsImFkZFBhc3MiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJ3aWR0aCIsImhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0RWxhcHNlZFRpbWUiLCJyZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});