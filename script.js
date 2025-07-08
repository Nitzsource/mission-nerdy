const logs = [
  "NASA | MISSION: NERDY PYAAR",
  "Payload: Siya-One 💛",
  "Commander: NiteshCore",
  "Launch Code: 09.08",
  "Status: Preparing for emotional launch...",
  "T-minus 10... 9... 8...",
  "Ignition sequence start 🚀",
  "Launch confirmed.",
  "Trajectory: Forever",
  "Emotional Thrust: Max",
  "Smile Loop: Initiated",
  "System Logs: Trust ✅  Laughter ✅  Overthinking 🌀",
  "Altitude: Rising...",
  "Orbit path: Locked on Siya 💛",
  "Payload glowing...",
  "No anomalies detected.",
  "Stabilizing...",
  "Final Transmission incoming...",
  "",
  "You are not a passenger.",
  "You are the purpose.",
  "Velocity: Love.",
  "Status: Never shutting down.",
  "— Mission Control: NiteshCore",
];

let i = 0;
const log = document.getElementById("log");

function typeNext() {
  if (i < logs.length) {
    log.innerHTML += logs[i] + "\n";
    i++;
    setTimeout(typeNext, 1500);
  }
}

window.onload = typeNext;
