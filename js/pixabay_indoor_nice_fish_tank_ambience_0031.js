  /**
   * fil: pixabay_indoor_nice_fish_tank_ambience_0031.js
   * formål: hvordan lyd kan lægges ind og styres med script
   */

  // Hent lyd-elementet
  const lyd = document.getElementById("baggrundslyd");
  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const stopBtn = document.getElementById("stop-btn");
  const lydOnBtn = document.getElementById("startLyd");

/**
  const knap = document.getElementById("startLyd");
  knap.addEventListener("click", () => {
    lyd.play();
    knap.style.display = "none";
  });
*/

// Start animation + lyd
playBtn.addEventListener("click", () => {
  animation.play();
  lyd.play();
});

// Pause animation + lyd
pauseBtn.addEventListener("click", () => {
  animation.pause();
  lyd.pause();
});

// Stop animation + lyd
stopBtn.addEventListener("click", () => {
  animation.stop();
  lyd.pause();
  lyd.currentTime = 0;
});

// Lyd til/fra
lydOnBtn.addEventListener("click", () => {
  lyd.muted = !lyd.muted;
  lydOnBtn.textContent = lyd.muted ? "Lyd" : "Lydløs";
});