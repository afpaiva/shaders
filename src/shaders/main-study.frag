// uniforms is also for fragment
// for Raw needs to specify the precision
precision mediump float;
uniform float myValue;
varying vec3 vPosition;

void main(){
    // creates a simple gradient
    gl_FragColor = vec4(vPosition, 1);
}
