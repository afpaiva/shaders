import * as THREE from "three"
import vertexShader from "./moving.glsl.vert"
import fragmentShader from "./moving.glsl.frag"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * This study is about moving vertexes and something else
 */
export const moving = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, .2, 1000
  );
  camera.position.z = 5;

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
  })

  const clock = new THREE.Clock()

  const geometry = new THREE.PlaneGeometry(2, 2, 10, 10);

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const ambientLight = new THREE.AmbientLight();
  scene.add(ambientLight)

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  new OrbitControls(camera, renderer.domElement)

  const animate = () => {
    material.uniforms.uTime = { value: clock.getElapsedTime(), type: 'f', itemSize: 1 }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}