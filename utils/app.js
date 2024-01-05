import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DeviceOrientationControls } from 'three-stdlib';
import { createGalaxy } from './Galaxy.js'; // Import the createGalaxy function


export function initializeThreeJS(mountPoint) {
    const clock = new THREE.Clock();
    let mouse = new THREE.Vector2();

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Black background

    mountPoint.appendChild(renderer.domElement);
    // Use the createGalaxy function
    const galaxy = createGalaxy(scene);

    // Load the GLTF models
    let mixer1, mixer2;
    const loader = new GLTFLoader();

    // Load 'planck_kingdom' model
    loader.load('planck_kingdom/scene.gltf', function (gltf) {
        gltf.scene.position.set(0, 0, 0);
        scene.add(gltf.scene);
        mixer1 = new THREE.AnimationMixer(gltf.scene);
        if (gltf.animations.length) {
            const action = mixer1.clipAction(gltf.animations[0]);
            action.play();
        }
    }, undefined, function (error) {
        console.error('Error loading planck_kingdom model:', error);
    });

    // Load 'xalatath' model
    loader.load('xalatath/scene.gltf', function (gltf) {
        gltf.scene.position.set(0, -35, -15);
        scene.add(gltf.scene);
        mixer2 = new THREE.AnimationMixer(gltf.scene);
        if (gltf.animations.length) {
            const action = mixer2.clipAction(gltf.animations[0]);
            action.play();
        }
    }, undefined, function (error) {
        console.error('Error loading xalatath model:', error);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Post-processing
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.1;
    bloomPass.strength = 0.4;
    bloomPass.radius = 0.1;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Resize handler
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize, false);

    // Device orientation controls
    let deviceOrientationControls;
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        deviceOrientationControls = new DeviceOrientationControls(camera);
        deviceOrientationControls.connect();
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (mixer1) mixer1.update(delta);
        if (mixer2) mixer2.update(delta);
        if (deviceOrientationControls) deviceOrientationControls.update();
        galaxy.rotation.y += 0.001; // Rotate the galaxy
        composer.render();
    }

    animate();

    // Mouse and zoom controls
    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    window.addEventListener('wheel', (event) => {
        camera.position.z += (event.deltaY > 0 ? 1 : -1);
    });
}
