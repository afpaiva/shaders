import * as THREE from "three"
import vertexShader from "./shaders/main-study.vert" 
import fragmentShader from "./shaders/main-study.frag" 

const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader
})

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, .2, 1000
);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setAnimationLoop(animate)

const geometry = new THREE.BoxGeometry();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight)

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
