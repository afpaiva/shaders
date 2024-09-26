import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { stoneMaterial, marbleMaterial, grassMaterial } from "./textures";
import GUI from 'lil-gui';

export const materials = () => {

  const { innerWidth: width, innerHeight: height } = window;

  const scene = new THREE.Scene();

  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.width = width;
  canvas.height = height;

  const camera = new THREE.PerspectiveCamera(50, width / height);
  camera.position.set(0, 1, -8);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  const ambientLight = new THREE.HemisphereLight("lightblue", "#365726", 1);

  const directLight = new THREE.DirectionalLight("white", 2);
  directLight.position.set(1, 2, 1)
  directLight.castShadow = true;

  const sphereGeometry = new THREE.SphereGeometry();
  const sphereMesh = new THREE.Mesh(sphereGeometry, stoneMaterial);
  sphereMesh.castShadow = true
  sphereMesh.position.set(-1.1, 0, 0)

  const torusGeometry = new THREE.TorusKnotGeometry(1, 0.4, 70, 20);
  const torusMesh = new THREE.Mesh(torusGeometry, marbleMaterial)
  torusMesh.castShadow = true
  torusMesh.position.set(1.7, 0.8, 0)

  const planeGeometry = new THREE.PlaneGeometry(10, 10);
  const planeMesh = new THREE.Mesh(planeGeometry, grassMaterial);
  planeMesh.receiveShadow = true;
  planeMesh.rotation.set(-Math.PI / 2, 0, 0);
  planeMesh.position.set(0, -1, 0);

  scene.add(
    camera,
    ambientLight,
    directLight,
    sphereMesh,
    torusMesh,
    planeMesh
  )

  // const gui = new GUI();
  // gui.add(sphereMesh.position, "y", 0, 2)
  // gui.add(sphereMesh.position, "x", -5, 2)

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  const pixelRatio = window.devicePixelRatio;
  renderer.shadowMap.enabled = true
  renderer.setPixelRatio(pixelRatio)
  renderer.setSize(width, height)
  renderer.setClearColor(0x000000)

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    // gui.update();
  }
  animate();
}
