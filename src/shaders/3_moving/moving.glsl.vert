uniform float uTime;
varying vec3 vColor;

void main(){
  vec3 newPosition = vec3(position.x * sin(uTime), position.y * sin(uTime), sin(uTime) * 2.0);
  vColor = newPosition;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
