import * as THREE from 'three';

const map = new THREE.TextureLoader()
    .load("./src/materials/textures/stone/albedo.png")
const aoMap = new THREE.TextureLoader()
    .load("./src/materials/textures/stone/ao.png")
const bumpMap = new THREE.TextureLoader()
    .load("./src/materials/textures/stone/height.png")
const metalnessMap = new THREE.TextureLoader()
    .load("./src/materials/textures/stone/metallic.png")
const normalMap = new THREE.TextureLoader()
    .load("./src/materials/textures/stone/normal.png")
const roughnessMap = new THREE.TextureLoader()
    .load("./src/materials/textures/stone/roughness.png")

export const stoneMaterial = new THREE.MeshStandardMaterial({
    map,
    aoMap,
    bumpMap,
    metalnessMap,
    normalMap,
    roughnessMap
});