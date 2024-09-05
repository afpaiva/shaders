import { VertexNormalsHelper } from 'three/addons/helpers/VertexNormalsHelper.js';
import * as THREE from "three"
import vertexShader from "./warmup.glsl.vert"
import fragmentShader from "./warmup.glsl.frag"

/**
 * This study contains notes and examples to show how to use THREE.ShaderMaterial
 */
export const warmup = () => {
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
  material.uniforms.myValue = { value: 0 };
  console.log(material.uniforms)

  // geometry stores attributes
  const geometry = new THREE.TorusKnotGeometry();
  console.log(geometry.attributes) // -> position, normal, uv

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const vertexNormalsHelper = new VertexNormalsHelper(mesh, .2, 0xff0000);
  mesh.add(vertexNormalsHelper);

  const ambientLight = new THREE.AmbientLight();
  scene.add(ambientLight)

  const renderer = new THREE.WebGLRenderer();
  renderer.setAnimationLoop(animate)
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  function animate() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

}