void main(){
  // It is always necessary to declare position value to be able to see
  // the rendered geometry.
  // This will determine the position of the vertex in clip space.
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
