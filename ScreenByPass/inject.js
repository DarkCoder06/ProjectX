
(
  function () {
  try {
    const addjs = (js) =>
      (document.head.appendChild(document.createElement("script")).innerHTML =
        js);
    addjs(
      `
      console.log("Activated");

      (function() {
      console.log("function::SANAT");
      const originalGetSettings = MediaStreamTrack.prototype.getSettings;
        MediaStreamTrack.prototype.getSettings = function() {
          const settings = originalGetSettings.apply(this, arguments);
          if (settings.displaySurface) {
            settings.displaySurface = 'monitor';
          }
          return settings;
        };
      })()
    `
    );
  } catch (err) {
    console.log("error while running");
    console.log(err);
  }
})();
