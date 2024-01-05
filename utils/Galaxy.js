import * as THREE from "three";

export function createGalaxy(scene) {
    // Improved Galaxy Particle System
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 10000; // Increased particle count
    const posArray = new Float32Array(particlesCnt * 3);

    // Spiral Galaxy Formation
    for (let i = 0; i < particlesCnt; i++) {
        const i3 = i * 3;
        const radius = Math.random() * 5;
        const spinAngle = radius * Math.PI * 4;
        const branchAngle = ((i % 3) / 3) * 2 * Math.PI;

        posArray[i3] = Math.cos(spinAngle + branchAngle) * radius;
        posArray[i3 + 1] = Math.random() - 0.5; // Random height
        posArray[i3 + 2] = Math.sin(spinAngle + branchAngle) * radius;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: 0x8a2be2 // Purple color
    });

    const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleMesh);

    return particleMesh;
}
