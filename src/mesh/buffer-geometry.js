import * as THREE from "three";
import gsap from "gsap";

export const bufferGeometry = () => {// Basic setup of the scene with Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a triangle
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
    });
    material.side = THREE.DoubleSide


    // creating a BufferGeometry
    const positionArray = new Float32Array([
        -1, 0, 0, // vertex 1
        0, 1, 0,  // vertex 2
        1, 0, 0,  // vertex 3
        1, 1, 1   // vertex 4
    ]);
    const positionAttribute = new THREE.BufferAttribute(positionArray, 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', positionAttribute);

    // add indexes, so the 4 coordinates will generate 2 triangles
    // sharing exactly the same vertexes
    const indexArray = new Uint16Array([
        0, 1, 2, // first triangle is made by vertexes of index 0, 1 and 2
        1, 3, 2  // second triangle is made by vertexes of index 1, 3 and 2
    ])
    const indexAttributes = new THREE.BufferAttribute(indexArray, 1);
    geometry.setIndex(indexAttributes);

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh);

    camera.position.z = 5;

    // Use GSAP to animate the triangle (no loop for GSAP animation)
    gsap.to(mesh.rotation, { duration: 2, x: Math.PI * 2, repeat: -1, ease: "linear" });
    gsap.to(mesh.rotation, { duration: 2, z: Math.PI * 2, repeat: -1, ease: "linear" });

    // Rendering loop for the scene
    function animate() {
        requestAnimationFrame(animate);

        // Render the scene (this is where the GSAP animation will be visualized)
        renderer.render(scene, camera);
    }

    animate(); // Starts the loop
}
