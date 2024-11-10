// Define parameters
const bpm = 44;
const beatDuration = 60000 / bpm; // Duration of one beat in milliseconds

// Score definition
const twoVoicesScore = [
  [[0], [0, 0, 1]], // bar 1
  [[-3], [-1, -1, -1]], // bar 2
  [[0], [0, 0, 0]], // bar 3
  [[-1], [1, 1, 1]], // bar 4
  [[-1], [2, 2, 3]], // bar 5
  [
    [-1, 1],
    [1, 1, 2],
  ], // bar 6
  [
    [0, -2],
    [0, 0, 1],
  ], // bar 7
  [[-3], [-1, -1, -1]], // bar 8
  [[-5], [0, 0, 1]], // bar 9
  [[-4], [-1, -1, -1]], // bar 10
  [[-3], [0, 0, 0]], // bar 11
  [[-1], [1, 1, 1]], // bar 12
  [[-1], [2, 2, 3]], // bar 13
  [[-2], [1, 1, 2]], // bar 14
  [[-3], [0, 0, 1]], // bar 15
  [[-3], [-1, -1, -1]], // bar 16
];

// Function to print the bass and melody notes
function printNotes(bassNote, melodyNote) {
  // Format the notes to ensure alignment
  const bassFormatted = bassNote !== undefined ? bassNote : "     ";
  const melodyFormatted = melodyNote !== undefined ? melodyNote : "     ";

  console.log(`Bass: ${bassFormatted} | Melody: ${melodyFormatted}`);
}

// Function to play the score in real time
async function playScore() {
  for (let bar of twoVoicesScore) {
    const [lowerVoice, upperVoice] = bar;

    // Light up each note in the bar
    for (let i = 0; i < Math.max(lowerVoice.length, upperVoice.length); i++) {
      const bassNote = lowerVoice[i];
      const melodyNote = upperVoice[i];

      // Print the current notes for both hands simultaneously
      printNotes(bassNote, melodyNote);

      // Wait for the beat duration
      await new Promise((resolve) => setTimeout(resolve, beatDuration));
    }
  }
}

// Run the score playback function
playScore();
