varying vec3 vPosition;
varying vec3 vNormal;
//varying vec2 vUv;

// using flat it will check the nearest vertex color
// and will not interpolate but take the vertex value directly
flat varying vec2 vUv;

void main(){
  vPosition = position;
  vNormal = normal;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
