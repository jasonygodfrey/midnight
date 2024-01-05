import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DeviceOrientationControls } from 'three-stdlib';

export function initializeThreeJS(mountPoint) {
    const clock = new THREE.Clock();
    let mouse = new THREE.Vector2();

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    //camera.position.z = 1;
    //camera.position.y = -2.;
    //camera.rotation.x = 0.4; // Rotate camera slightly upwards


    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1); // Beige color as default

    mountPoint.appendChild(renderer.domElement);

    // Load the GLTF model
    let mixer; // Animation mixer
    const loader = new GLTFLoader();

    // Load the 'planck_kingdom' model
    loader.load('planck_kingdom/scene.gltf', function (gltf) {
        // Set the position for 'planck_kingdom'
        gltf.scene.position.set(0, 0, 0); // Adjust these values as needed
        gltf.scene.scale.set(1, 1, 1); // Adjust scale if needed
    
        // Add to the scene
        scene.add(gltf.scene);
    
    // Create an animation mixer and play the first animation clip
    mixer = new THREE.AnimationMixer(gltf.scene);
    const action = mixer.clipAction(gltf.animations[0]);
    action.play();

    }, undefined, function (error) {
        console.error('Error loading planck_kingdom model:', error);
    });
    
    // Load the 'xalatath' model
    loader.load('xalatath/scene.gltf', function (gltf) {
        // Set the position for 'xalatath'
        gltf.scene.position.set(0, -35, -15); // Adjust these values as needed
        gltf.scene.scale.set(1, 1, 1); // Adjust scale if needed
    
        // Add to the scene
        scene.add(gltf.scene);
    
        // Create an animation mixer and play the animation if exists
        const mixer2 = new THREE.AnimationMixer(gltf.scene);
        if (gltf.animations && gltf.animations.length) {
            const action = mixer2.clipAction(gltf.animations[0]);
            action.play();
        }
    }, undefined, function (error) {
        console.error('Error loading xalatath model:', error);
    });
    


    // Create lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
   scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Post-processing
    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5, 0.4, 0.85
    );
    bloomPass.threshold = 0.1;
    bloomPass.strength = 0.4;
    bloomPass.radius = 0.1;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Handle window resize
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize, false);

    // Device orientation controls for mobile
    let deviceOrientationControls;
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        deviceOrientationControls = new DeviceOrientationControls(camera);
        deviceOrientationControls.connect();
        deviceOrientationControls.update(); // Update to align with the default camera settings
    }

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    if (mixer) {
        mixer.update(delta);
    }
    if (deviceOrientationControls) {
        deviceOrientationControls.update();
        // Manually adjust camera orientation here if needed
        // For example, rotate 180 degrees around the Y axis
        // camera.rotation.y += Math.PI; 
    }
    composer.render();
}

    animate();

    // Mouse and zoom controls
    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    function zoom(direction) {
        camera.position.z += direction;
    }
    window.addEventListener('wheel', (event) => {
        zoom(event.deltaY > 0 ? 1 : -1);
    });
}
