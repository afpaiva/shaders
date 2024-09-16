class ShaderUtil {

  static domShaderSrc(elementId) {
    const element = document.getElementById(elementId);
    if (!element || element.text == "") {
      console.eror(elementId + "shader not found or no text");
      return null;
    }
    return element.text;
  }

  static createShader(gl, src, type) {
    const shader = gl.createShader(type); // Create a new shader object of the specified type (vertex or fragment)
    gl.shaderSource(shader, src); // Attach the shader source code to the shader object
    gl.compileShader(shader); // Compile the shader

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      // Check if the shader compiled successfully
      console.error("error compinling shader: ", src, gl.getShaderInfoLog(shader)); // Log any compilation errors
      gl.deleteShader(shader); // Delete the shader if it failed to compile
      return null; // Return null to indicate failure
    }
    return shader; // Return the compiled shader
  }

  static createProgram(gl, vShader, fShader, doValidate) {
    const prog = gl.createProgram(); // Create a new shader program
    gl.attachShader(prog, vShader); // Attach the vertex shader to the program
    gl.attachShader(prog, fShader); // Attach the fragment shader to the program
    gl.linkProgram(prog); // Link the shaders into the program

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      // Check if the program linked successfully
      console.error("error creating shader program", gl.getProgramInfoLog(prog)); // Log any linking errors
      gl.deleteProgram(prog); // Delete the program if it failed to link
      return null; // Return null to indicate failure
    }

    if (doValidate) {
      gl.validateProgram(prog); // Validate the program to check for errors
      if (!gl.getProgramParameter(prog, gl.VALIDATE_STATUS)) {
        // Check if the program is valid
        console.error("error validating program", gl.getProgramInfoLog(prog)); // Log any validation errors
        gl.deleteProgram(prog); // Delete the program if it failed validation
        return null; // Return null to indicate failure
      }
    }

    gl.detachShader(prog, vShader); // Detach the vertex shader from the program
    gl.detachShader(prog, fShader); // Detach the fragment shader from the program
    gl.deleteShader(vShader); // Delete the vertex shader
    gl.deleteShader(fShader); // Delete the fragment shader
    return prog; // Return the linked program
  }

  static domShaderProgram(gl, vectId, fragId, doValidate = true) {
    // Load vertex and fragment shader source code
    const vShaderTxt = ShaderUtil.domShaderSrc(vectId);
    if (!vShaderTxt) return null;

    const fShaderTxt = ShaderUtil.domShaderSrc(fragId);
    if (!fShaderTxt) return null;

    // Create shaders
    const vShader = ShaderUtil.createShader(gl, vShaderTxt, gl.VERTEX_SHADER);
    if (!vShader) return null;

    const fShader = ShaderUtil.createShader(gl, fShaderTxt, gl.FRAGMENT_SHADER);
    if (!fShader) return null;

    return ShaderUtil.createProgram(gl, vShader, fShader, doValidate);
  }
}
