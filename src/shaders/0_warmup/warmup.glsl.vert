/*

// variables types and syntax:
float, double, int, uint, bool
vec3 -> x, y, z
vec2 -> x, y
vec4

ivec3 is a vec3 of int
uvec3 is a vec3 of uint
bvec3, dvec3 and so on

// struct example:
struct vec5 {
    float x;
    float y;
    float z;
    float w;
    float q;
}

// casting from int to float
vec color = vec3(1, 0, 1);
color.x = 0             <- will throw error
color.x = float(0)      <- solution
color.x = 0.0           <- solution
color.x = 0.f           <- solution

color.x == color.r == color.u and so on...

// swizzling syntax
color.rg = vec2(1.0, 0.0);

// operators and functions
= += ++ ...
mod(value, 2); <- % doesn't work
abs(number);
min(a, b);
max(a, b);
sin(n);
cos(n);
tan(n);
atan(n);
dot(a, b);
cross(a, b);
clamp(number, clampMin, clampMax);
step(); smoothstep(); fract(); ... and so on...
equal(vec, vec);
 __________________ */

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
    // MVP -> Model View Projection - https://jsantell.com/model-view-projection/
    vec4 modelViewPosition =  modelViewMatrix * vec4(position, 1.0);
    vec4 projectedPosition = projectionMatrix * modelViewPosition;
    gl_Position = projectedPosition;
    
    vPosition = position;
    vNormal = normal;
    vUv = uv;
}
