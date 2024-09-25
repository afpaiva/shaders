import * as THREE from 'three';

const map = new THREE.TextureLoader()
    .load("./src/materials/textures/marble/albedo.png")
const aoMap = new THREE.TextureLoader()
    .load("./src/materials/textures/marble/ao.png")
const bumpMap = new THREE.TextureLoader()
    .load("./src/materials/textures/marble/height.png")
const metalnessMap = new THREE.TextureLoader()
    .load("./src/materials/textures/marble/metallic.png")
const normalMap = new THREE.TextureLoader()
    .load("./src/materials/textures/marble/normal.png")
const roughnessMap = new THREE.TextureLoader()
    .load("./src/materials/textures/marble/roughness.png")

export const marbleMaterial = new THREE.MeshStandardMaterial({
    map,
    aoMap,
    bumpMap,
    metalnessMap,
    normalMap,
    roughnessMap
});