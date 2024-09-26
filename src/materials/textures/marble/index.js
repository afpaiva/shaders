import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader()

const map = textureLoader
    .load("./src/materials/textures/marble/albedo.png")
const aoMap = textureLoader
    .load("./src/materials/textures/marble/ao.png")
const bumpMap = textureLoader
    .load("./src/materials/textures/marble/height.png")
const metalnessMap = textureLoader
    .load("./src/materials/textures/marble/metallic.png")
const normalMap = textureLoader
    .load("./src/materials/textures/marble/normal.png")
const roughnessMap = textureLoader
    .load("./src/materials/textures/marble/roughness.png")

export const marbleMaterial = new THREE.MeshStandardMaterial({
    map,
    aoMap,
    bumpMap,
    metalnessMap,
    normalMap,
    roughnessMap
});