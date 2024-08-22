// attribute vec3 position; -- only for Raw

// uniform is the same for all vertices
// uniform mat4 modelViewMatrix; -- only for Raw
uniform float myValue;

// transform from the model
// uniform mat4 modelMatrix; -- only for Raw

// transform from the camera (position and orientation)
// uniform mat4 viewMatrix; -- only for Raw

// projects the object onto screen (aspect ratio and perspective)
// uniform mat4 projectionMatrix; -- only for Raw

varying vec3 vPosition;
varying vec3 vNormal;
// use flat to add hard edges
flat varying vec2 vUv;

void main() {
    // modelViewMatrix = viewMatrix * modelMatrix;
    // MVP -> Model View Projection
    vec4 modelViewPosition =  modelViewMatrix * vec4(position, 1.0);
    vec4 projectedPosition = projectionMatrix * modelViewPosition;
    gl_Position = projectedPosition;
    
    vPosition = position;
    vNormal = normal;
    vUv = uv;
}
