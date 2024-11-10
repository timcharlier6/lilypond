// Define parameters
const bpm = 44;
const beatDuration = 60000 / bpm; // Duration of one beat in milliseconds

// Score definition
const twoVoicesScore = [
  [[0], [0, 0, 1]],
  [[-3], [-1, -1, -1]],
  [[0], [0, 0, 0]],
  [[-1], [1, 1, 1]],
  [[-1], [2, 2, 3]],
  [
    [-1, 1],
    [1, 1, 2],
  ],
  [
    [0, -2],
    [0, 0, 1],
  ],
  [[-3], [-1, -1, -1]],
  [[-5], [0, 0, 1]],
  [[-4], [-1, -1, -1]],
  [[-3], [0, 0, 0]],
  [[-1], [1, 1, 1]],
  [[-1], [2, 2, 3]],
  [[-2], [1, 1, 2]],
  [[-3], [0, 0, 1]],
  [[-3], [-1, -1, -1]],
];

// Function to initialize the score grid
function initScoreGrid() {
  const bassRow = document.getElementById("bass-row");
  const melodyRow = document.getElementById("melody-row");

  // Generate bass lightbulbs from -5 to 0
  for (let i = -5; i <= 0; i++) {
    const bassBulb = document.createElement("div");
    bassBulb.classList.add("lightbulb", `lightbulb${i}`);
    bassRow.appendChild(bassBulb);
  }

  // Generate melody lightbulbs from -1 to 3
  for (let i = -1; i <= 3; i++) {
    const melodyBulb = document.createElement("div");
    melodyBulb.classList.add("lightbulb", `lightbulb${i}`);
    melodyRow.appendChild(melodyBulb);
  }
}

// Function to light up specific notes
async function playScore() {
  for (let bar of twoVoicesScore) {
    const [lowerVoice, upperVoice] = bar;

    // Light up each note in the bar
    for (let i = 0; i < Math.max(lowerVoice.length, upperVoice.length); i++) {
      // Get the specific bass and melody lightbulbs for each note
      const bassNote = lowerVoice[i];
      const melodyNote = upperVoice[i];

      if (bassNote !== undefined) {
        const bassBulb = document.querySelector(`.lightbulb${bassNote}`);
        if (bassBulb) bassBulb.classList.add("on");
      }

      if (melodyNote !== undefined) {
        const melodyBulb = document.querySelector(`.lightbulb${melodyNote}`);
        if (melodyBulb) melodyBulb.classList.add("on");
      }

      // Wait for the beat duration
      await new Promise((resolve) => setTimeout(resolve, beatDuration));

      // Turn off the lightbulbs after the beat
      if (bassNote !== undefined && bassBulb) bassBulb.classList.remove("on");
      if (melodyNote !== undefined && melodyBulb)
        melodyBulb.classList.remove("on");
    }
  }
}

// Initialize the score grid and play the score
initScoreGrid();
playScore();
