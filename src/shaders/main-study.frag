varying vec3 vPosition;

void main(){
    // creates a simple gradient
    gl_FragColor = vec4(vPosition * 0.5 + 0.5, 1.0);
}
