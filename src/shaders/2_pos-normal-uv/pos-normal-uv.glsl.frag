varying vec3 vPosition;
varying vec3 vNormal;
//varying vec2 vUv;

// using flat it will check the nearest vertex color
// and will not interpolate but take the vertex value directly
flat varying vec2 vUv;

void main(){
  // gl_FragColor = vec4(vPosition, 1.0);
  // gl_FragColor = vec4(vNormal, 1.0);
  // gl_FragColor = vec4(vUv, 0.0, 1.0);
  gl_FragColor = vec4(vUv.xxx, 1.0);
}
