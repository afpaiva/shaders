import * as THREE from 'three';

const map = new THREE.TextureLoader()
    .load("./src/materials/textures/grass/albedo.png")
const aoMap = new THREE.TextureLoader()
    .load("./src/materials/textures/grass/ao.png")
const bumpMap = new THREE.TextureLoader()
    .load("./src/materials/textures/grass/height.png")
const metalnessMap = new THREE.TextureLoader()
    .load("./src/materials/textures/grass/metallic.png")
const normalMap = new THREE.TextureLoader()
    .load("./src/materials/textures/grass/normal.png")
const roughnessMap = new THREE.TextureLoader()
    .load("./src/materials/textures/grass/roughness.png")

export const grassMaterial = new THREE.MeshStandardMaterial({
    map,
    aoMap,
    bumpMap,
    metalnessMap,
    normalMap,
    roughnessMap
});