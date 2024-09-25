import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const materials = () => {
  const { innerWidth: width, innerHeight: height } = window;
  
  const scene = new THREE.Scene();
  
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.width = width;
  canvas.height = height;

  const camera = new THREE.PerspectiveCamera(50, width / height);
  camera.position.set(0, 0, -15);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  const ambientLight = new THREE.AmbientLight("lightblue", 1);

  const directLight = new THREE.DirectionalLight("orange", 2);
  directLight.position.set(1, 2, 1)

  const material = new THREE.MeshStandardMaterial({ color: "white" });

  const sphereGeometry = new THREE.SphereGeometry();
  const sphereMesh = new THREE.Mesh(sphereGeometry, material);
  sphereMesh.position.set(-4, 0, 0)

  const torusGeometry = new THREE.TorusGeometry();
  const torusMesh = new THREE.Mesh(torusGeometry, material)
  torusMesh.position.set(4, 0, 0)

  const planeGeometry = new THREE.PlaneGeometry(2, 2);
  const planeMesh = new THREE.Mesh(planeGeometry, material);
  planeMesh.rotation.set(0, Math.PI, 0)

  scene.add(
    camera,
    ambientLight,
    directLight,
    sphereMesh,
    torusMesh,
    planeMesh
  )

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  const pixelRatio = window.devicePixelRatio;
  renderer.setPixelRatio(pixelRatio)
  renderer.setSize(width, height)
  renderer.setClearColor(0x000000)

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}
