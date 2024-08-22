// uniforms is also for fragment
// for Raw needs to specify the precision
precision mediump float;
uniform float myValue;

void main(){
    // creates a simple gradient
    gl_FragColor = vec4(1, 1, 0, 1);
}
