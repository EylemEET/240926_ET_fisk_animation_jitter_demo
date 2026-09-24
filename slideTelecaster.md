  /**
   * fil: slideTelecaster.js
   * formål: hvordan lyd kan lægges ind og styres med script
   */

  // Hent lyd-elementet
  const lyd = document.getElementById("baggrundslyd");

/**
  const knap = document.getElementById("startLyd");
  knap.addEventListener("click", () => {
    lyd.play();
    knap.style.display = "none";
  });
*/
// Hent knapperne - copilot + w3 school
  const playBtn = document.getElementById("startLyd");
  const lydloesBtn = document.getElementById("lydloes-btn");
  const stopBtn = document.getElementById("stop-btn");

// Start lyd
playBtn.addEventListener("click", () => {
  lyd.play();
});

// Pause lyd
lydloesBtn.addEventListener("click", () => {
  lyd.pause();
});

// Stop lyd (pause + nulstil)
stopBtn.addEventListener("click", () => {
  lyd.pause();
  lyd.currentTime = 0;
});