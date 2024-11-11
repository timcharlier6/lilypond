const bpm = 44;
const beatDuration = 60000 / bpm; // Duration of one beat in milliseconds
let clickCount = 0;

const bassRow = document.getElementById("bass-row");
const melodyRow = document.getElementById("melody-row");
//const button = document.getElementById("button");

//button.textContent = "Start".toUpperCase();

for (let i = 0; i <= 5; i++) {
  const melodyBulb = document.createElement("div");
  const bassBulb = document.createElement("div");
  melodyBulb.classList.add("lightbulb");
  bassBulb.classList.add("lightbulb");
  melodyBulb.id = `u${i}`;
  bassBulb.id = `b${i}`;
  bassRow.appendChild(bassBulb);
  melodyRow.appendChild(melodyBulb);
}

async function load() {
  let random_num = Math.floor(Math.random() * 9);
  const jsonPath = `./score_${random_num}.json`;
  const jsonResponse = await fetch(jsonPath);
  const jsonData = await jsonResponse.json();
  const upperVoiceData = jsonData.upper;
  const lowerVoiceData = jsonData.lower;

  const midiUrl = `./score_${random_num}.midi`;
  const response = await fetch(midiUrl);
  const arrayBuffer = await response.arrayBuffer();
  const midi = new Midi(arrayBuffer);
  const synths = midi.tracks.map((track) => {
    return new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: "square" },
      envelope: {
        attack: 0.000001,
        decay: 3.0,
        sustain: 0.0,
        release: 0.5,
      },
    }).toDestination();
  });

  midi.tracks.forEach((track, trackIndex) => {
    track.notes.forEach((note) => {
      synths[trackIndex].triggerAttackRelease(
        note.name,
        note.duration,
        note.time,
      );
    });
  });

  function lightUpBulb(id) {
    const bulb = document.getElementById(id);
    if (bulb) {
      bulb.classList.add("on");
    }
  }

  function turnOffBulb(id) {
    const bulb = document.getElementById(id);
    if (bulb) {
      bulb.classList.remove("on");
    }
  }

  for (let i = 0; i < upperVoiceData.length; i++) {
    for (let j = 0; j < upperVoiceData[i].length; j++) {
      const bassNote = lowerVoiceData[i][j];
      const melodyNote = upperVoiceData[i][j];
      let incrementUpIfSong0 = 1;
      let incrementDownIfSong0 = 1;
      if (random_num === 0) {
        incrementUpIfSong0 = 2;
        incrementDownIfSong0 = 6;
      }

      if (melodyNote !== undefined) {
        lightUpBulb(`u${melodyNote + incrementUpIfSong0}`);
      }
      if (bassNote !== undefined) {
        lightUpBulb(`b${bassNote + incrementDownIfSong0}`);
      }

      let delay = 100;

      await new Promise((resolve) => setTimeout(resolve, beatDuration - delay));

      if (melodyNote !== undefined)
        turnOffBulb(`u${melodyNote + incrementUpIfSong0}`);
      if (bassNote !== undefined)
        turnOffBulb(`b${bassNote + incrementDownIfSong0}`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  await Tone.start();
  Tone.Transport.start();
}

document.addEventListener("click", () => {
  clickCount++;
  if (clickCount % 2 !== 0) {
    load();
    //button.textContent = "Stop".toUpperCase();
  } else if (clickCount % 2 === 0) {
    location.reload();
  }
});
