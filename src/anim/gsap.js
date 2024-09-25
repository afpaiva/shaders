import * as THREE from "three";
import gsap from "gsap";

export const gsapTest = () => {// Basic setup of the scene with Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Use GSAP to animate the cube (no loop for GSAP animation)
    gsap.to(cube.rotation, { duration: 2, x: Math.PI * 2, repeat: -1, ease: "linear" });

    // Rendering loop for the scene
    function animate() {
        requestAnimationFrame(animate);

        // Render the scene (this is where the GSAP animation will be visualized)
        renderer.render(scene, camera);
    }

    animate(); // Starts the loop
}
