/**
 * fil: jitterAnimation.js
 * formål: eksperiment - kan Js styre en Jitter-json?
 */

//<!--jeg tilføjer flere fisk med hjælp fra copilot-->



//CSS styrer udseende. JS styrer adfærd.

// er vi på?
console.log("Der er kontakt til jitterAnimation.js");

// --- FISKEN (den ene) ---
animation = lottie.loadAnimation({
  container: document.getElementById('jitter-container'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'billeder/jitterframe.json'
});

// dette script loader filen
// CP = fjerner const til const animation = lottie.loadAnimation({ for at lave den en global variabel
// Find alle fisk i HTML

/** Når animationen er klar: gå til frame 0 og stop
animation.addEventListener('DOMLoaded', () => {
  animation.goToAndStop(0, true);
}); VIRKER IKKE*/

// --- LYD OG KNAPPER ---

// --- LYD ---
const audio = new Audio("lyd/pixabay_indoor_nice_fish_tank_ambience_0031.mp3");
audio.loop = true;

let lydAktiv = false; // vores egen status

// --- KNAPPER ---
const startBtn = document.getElementById("startBtn");
const muteBtn = document.getElementById("muteBtn");
const stopBtn = document.getElementById("stopBtn");

// START
startBtn.addEventListener("click", () => {
    animation.play();
    audio.play();
    lydAktiv = true;
    muteBtn.textContent = "Lydløs"; // fordi lyden nu er aktiv
});

// LYD / LYDLØS (toggle/skifter mellem to tilstande on off)
muteBtn.addEventListener("click", () => {
    if (lydAktiv) {
        audio.pause(); //LYDEN MUTES
        lydAktiv = false;
        muteBtn.textContent = "Lyd";
    } else {
        audio.play(); //STARTER/FORTSÆTTER LYD
        lydAktiv = true;
        muteBtn.textContent = "Lydløs";
    }
});

// STOP
stopBtn.addEventListener("click", () => {
    animation.stop();
    audio.pause();
    audio.currentTime = 0;

    // VIGTIGT: Stop må IKKE ændre teksten på mute-knappen!
    // lydAktiv = false;  <-- denne linje skal FJERNES
});

// FISKENS proportioner styres i css ikke i js, derfor arbejder jeg videre der 
// sæt størrelsen på containeren har lavet den i css
// const container = document.getElementById('jitter-container');
// container.style.width = '72px';
// container.style.height = '72px';

