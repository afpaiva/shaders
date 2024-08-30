// uniforms is also for fragment
// for Raw needs to specify the precision
precision mediump float;
uniform float myValue;
varying vec3 vPosition;
varying vec3 vNormal;
flat varying vec2 vUv;

void main(){
    // creates a simple gradient
    gl_FragColor = vec4(vUv, 1, 1);
}
