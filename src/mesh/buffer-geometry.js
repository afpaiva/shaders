import * as THREE from "three";
import gsap from "gsap";
import { Object3D } from "three";

export const bufferGeometry = () => {// Basic setup of the scene with Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a triangle
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    material.side = THREE.DoubleSide


    // creating a BufferGeometry
    const positionArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);
    const positionAttribute = new THREE.BufferAttribute(positionArray, 3);
    const triangleGeometry = new THREE.BufferGeometry();
    triangleGeometry.setAttribute('position', positionAttribute);

    const triangle = new THREE.Mesh(triangleGeometry, material)

    scene.add(triangle);

    camera.position.z = 5;

    // Use GSAP to animate the triangle (no loop for GSAP animation)
    gsap.to(triangle.rotation, { duration: 2, x: Math.PI * 2, repeat: -1, ease: "linear" });
    gsap.to(triangle.rotation, { duration: 2, z: Math.PI * 2, repeat: -1, ease: "linear" });

    // Rendering loop for the scene
    function animate() {
        requestAnimationFrame(animate);

        // Render the scene (this is where the GSAP animation will be visualized)
        renderer.render(scene, camera);
    }

    animate(); // Starts the loop
}
