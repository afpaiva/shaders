uniform float uTime;
varying vec3 vColor;

void main(){
  gl_FragColor = vec4(vColor.x * sin(uTime), vColor.y * sin(uTime), .5 * sin(uTime), 1.0);
}
