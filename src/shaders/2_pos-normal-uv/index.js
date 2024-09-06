import { VertexNormalsHelper } from 'three/addons/helpers/VertexNormalsHelper.js';
import * as THREE from "three"
import vertexShader from "./pos-normal-uv.glsl.vert"
import fragmentShader from "./pos-normal-uv.glsl.frag"
import { Color } from 'three';

/**
 * This study is to show how to use THREE.ShaderMaterial focusing on
 * sending values from uniforms to fragment shader and applying a color
 */
export const posNormalUv = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, .2, 1000
  );
  camera.position.z = 5;

  // material stores uniforms 
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader
  })
  const uniformColor = new Color(0xff0077);
  material.uniforms.uColor = { value: uniformColor };

  // geometry stores attributes
  const geometry = new THREE.PlaneGeometry(2, 2);

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const ambientLight = new THREE.AmbientLight();
  scene.add(ambientLight)

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  renderer.render(scene, camera);
}