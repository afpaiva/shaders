varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main(){
  // gl_FragColor = vec4(vPosition, 1.0);
  // gl_FragColor = vec4(vNormal, 1.0);
  // gl_FragColor = vec4(vUv, 0.0, 1.0);
  gl_FragColor = vec4(vUv.xyy, 1.0);
}
