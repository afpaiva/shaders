import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader()

const map = textureLoader
    .load("./src/materials/textures/stone/albedo.png")
const aoMap = textureLoader
    .load("./src/materials/textures/stone/ao.png")
const bumpMap = textureLoader
    .load("./src/materials/textures/stone/height.png")
const metalnessMap = textureLoader
    .load("./src/materials/textures/stone/metallic.png")
const normalMap = textureLoader
    .load("./src/materials/textures/stone/normal.png")
const roughnessMap = textureLoader
    .load("./src/materials/textures/stone/roughness.png")

export const stoneMaterial = new THREE.MeshStandardMaterial({
    map,
    aoMap,
    bumpMap,
    metalnessMap,
    normalMap,
    roughnessMap
});