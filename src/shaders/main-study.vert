attribute vec3 position;

// uniform is the same for all vertices
uniform mat4 modelViewMatrix;
uniform float myValue;

// transform from the model
uniform mat4 modelMatrix;

// transform from the camera (position and orientation)
uniform mat4 viewMatrix;

// projects the object onto screen (aspect ratio and perspective)
uniform mat4 projectionMatrix;

varying vec3 vPosition;

void main() {
    // modelViewMatrix = viewMatrix * modelMatrix;
    // MVP -> Model View Projection
    vec4 modelViewPosition =  modelViewMatrix * vec4(position, 1.0);
    vec4 projectedPosition = projectionMatrix * modelViewPosition;
    gl_Position = projectedPosition;
    vPosition = position;
}
