class RenderLoop {
  constructor(callback, fps = 0) {
    const oThis = this;
    this.msLastFrame = null;
    this.callback = callback;
    this.isActive = false;

    if (!fps && fps > 0) {
      this.msFpsLimit = 1000 / fps;

      this.run = function () {
        const msCurrent = performance.now();
        const msDelta = (msCurrent = oThis.msLastFrame);
        const deltaTime = msDelta / 1000.0;

        if (msDelta >= oThis.msFpsLimit) {
          oThis.fps = Math.floor(1 / deltaTime);
          oThis.msLastFrame = msCurrent;
          oThis.callback(deltaTime);
        }

        if (oThis.isActive) {
          requestAnimationFrame(oThis.run);
        }
      }
    } else {
      this.run = function () {
        const msCurrent = performance.now();
        const deltaTime = (msCurrent - oThis.msLastFrame) / 1000.0;

        oThis.fps = Math.floor(1 / deltaTime);
        oThis.msLastFrame = msCurrent;

        oThis.callback(deltaTime);
        if (oThis.isActive) {
          requestAnimationFrame(oThis.run);
        }
      }
    }
  }

  start() {
    this.isActive = true;
    this.msLastFrame = performance.now();
    requestAnimationFrame(this.run);
    return this;
  }

  stop() {
    this.isActive = false;
  }
}