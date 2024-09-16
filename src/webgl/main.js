class GLInstance {
  canvas;
  gl;

  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.gl = this.canvas.getContext("webgl2"); // Get the WebGL2 rendering context
    if (!this.gl) {
      throw new Error("no webgl context") // Throw an error if WebGL context is not available
    }
    this.gl.clearColor(1.0, 1.0, 1.0, 1.0); // Set the clear color to white (RGBA)
  }

  fClear() {
    this.gl.clear(
      this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT // Clear the color and depth buffers
    )
    return this;
  }

  fSetSize(w, h) {
    this.canvas.style.width = w + "px"; // Set the CSS width of the canvas
    this.canvas.style.height = h + "px"; // Set the CSS height of the canvas
    this.canvas.width = w; // Set the internal width of the canvas
    this.canvas.height = h; // Set the internal height of the canvas

    this.gl.viewport(0, 0, w, h); // Set the viewport to match the canvas size
    return this;
  }

  createArrayBuffer(floatArray, isStatic = true) {
    const buf = this.createBuffer();
    this.bindBuffer(this.ARRAY_BUFFER, buf); // Bind the buffer
    this.bufferData(this.ARRAY_BUFFER, floatArray, (isStatic) ? this.STATIC_DRAW : this.DYNAMIC_DRAW); // Upload vertex data to the buffer
    this.bindBuffer(this.ARRAY_BUFFER, null); // Unbind the buffer
    return buf;
  }
}

