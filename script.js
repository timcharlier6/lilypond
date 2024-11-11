const bpm = 44;
const beatDuration = 60000 / bpm; // Duration of one beat in milliseconds
let clickCount = 0;
const twoVoicesScore = [
  [[0], [0, 0, 1]], // bar 1
  [[-3], [-1, -1, -1]], // bar 2
  [[0], [0, 0, 0]], // bar 3
  [[-1], [1, 1, 1]], // bar 4
  [[-1], [2, 2, 3]], // bar 5
  [[-1], [1, 1, 2]], // bar 6
  [[0], [0, 0, 1]], // bar 7
  [[-3], [-1, -1, -1]], // bar 8
  /*
  [[-5], [0, 0, 1]], // bar 9
  [[-4], [-1, -1, -1]], // bar 10
  [[-3], [0, 0, 0]], // bar 11
  [[-1], [1, 1, 1]], // bar 12
  [[-1], [2, 2, 3]], // bar 13
  [[-2], [1, 1, 2]], // bar 14
  [[-3], [0, 0, 1]], // bar 15
  [[-3], [-1, -1, -1]], // bar 16
  */
];

function initLayout() {
  const bassRow = document.getElementById("bass-row");
  const melodyRow = document.getElementById("melody-row");
  const button = document.getElementById("button");

  button.textContent = "Start".toUpperCase();

  // Create melody lightbulbs (for values -1 to 3)
  for (let i = -1; i <= 4; i++) {
    const melodyBulb = document.createElement("div");
    melodyBulb.classList.add("lightbulb");
    melodyBulb.id = `u${i + 2}`; // Assign id for melody bulbs
    melodyRow.appendChild(melodyBulb);
  }

  // Create bass lightbulbs (for values -5 to 0)
  for (let i = -5; i <= 0; i++) {
    const bassBulb = document.createElement("div");
    bassBulb.classList.add("lightbulb");
    bassBulb.id = `b${i + 6}`; // Assign id for bass bulbs
    bassRow.appendChild(bassBulb);
  }
}

initLayout();

async function loadAndPlayMIDI() {
  // Load the MIDI file
  const midiUrl = "./my_first_score.midi"; // Replace with the path or URL to your MIDI file
  const response = await fetch(midiUrl);
  const arrayBuffer = await response.arrayBuffer();

  // Parse the MIDI file
  const midi = new Midi(arrayBuffer);

  // Create a synth for each track in the MIDI file
  const synths = midi.tracks.map((track) => {
    return new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: "square" }, // Choose a waveform, like 'sine' for smoother sound
      envelope: {
        attack: 0.000001, // Short attack for immediate note onset
        decay: 3.0, // Short decay for more piano-like effect
        sustain: 0.0, // Sustain level for body of the note
        release: 0.5, // Long release to naturally fade out
      },
    }).toDestination();
  });

  // Schedule the notes to play with Tone.js
  midi.tracks.forEach((track, trackIndex) => {
    track.notes.forEach((note) => {
      synths[trackIndex].triggerAttackRelease(
        note.name,
        note.duration,
        note.time,
      );
    });
  });

  // Function to light up a bulb by id
  function lightUpBulb(id) {
    const bulb = document.getElementById(id);
    if (bulb) {
      bulb.classList.add("on");
    }
  }

  // Function to turn off a bulb by id
  function turnOffBulb(id) {
    const bulb = document.getElementById(id);
    if (bulb) {
      bulb.classList.remove("on");
    }
  }

  // Function to play the score in real time
  async function playScore() {
    for (let bar of twoVoicesScore) {
      const [lowerVoice, upperVoice] = bar;

      // Light up each note in the bar
      for (let i = 0; i < Math.max(lowerVoice.length, upperVoice.length); i++) {
        const bassNote = lowerVoice[i];
        const melodyNote = upperVoice[i];

        // Light up the corresponding bass and melody bulbs
        if (melodyNote !== undefined) lightUpBulb(`u${melodyNote + 2}`);
        if (bassNote !== undefined) lightUpBulb(`b${bassNote + 6}`);

        // Wait for the beat duration
        let delay = 100;

        await new Promise((resolve) =>
          setTimeout(resolve, beatDuration - delay),
        );

        // Turn off the bulbs after the beat
        if (melodyNote !== undefined) turnOffBulb(`u${melodyNote + 2}`);
        if (bassNote !== undefined) turnOffBulb(`b${bassNote + 6}`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  playScore();

  // Start the Tone.js context and play the MIDI
  await Tone.start();
  Tone.Transport.start();
}

document.addEventListener("click", () => {
  clickCount++;
  if (clickCount % 2 !== 0) {
    loadAndPlayMIDI();
    button.textContent = "Stop".toUpperCase();
  } else if (clickCount % 2 === 0) {
    location.reload();
  }
});
