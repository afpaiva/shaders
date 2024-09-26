import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader()

const map = textureLoader
    .load("./src/materials/textures/grass/albedo.png")
const aoMap = textureLoader
    .load("./src/materials/textures/grass/ao.png")
const bumpMap = textureLoader
    .load("./src/materials/textures/grass/height.png")
const metalnessMap = textureLoader
    .load("./src/materials/textures/grass/metallic.png")
const normalMap = textureLoader
    .load("./src/materials/textures/grass/normal.png")
const roughnessMap = textureLoader
    .load("./src/materials/textures/grass/roughness.png")

export const grassMaterial = new THREE.MeshStandardMaterial({
    map,
    aoMap,
    bumpMap,
    metalnessMap,
    normalMap,
    roughnessMap
});