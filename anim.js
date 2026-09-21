// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos para "Risk It All"
var lyricsData = [
  { text: "For just a chance to win your heart", time: 26 },
  { text: "You could set the bar beyond the stars", time: 32 },
  { text: "I'll do anything, anything you ask me to", time: 37 },
  { text: "Say you want the moon, watch me learn to fly", time: 47 },
  { text: "Ain't a mountain you could point to I wouldn't climb", time: 53 },
  { text: "It's crazy, but it's true", time: 58 },
  { text: "There's nothing I won't do", time: 61 },
  { text: "I'd risk it all for you", time: 64 },
  { text: "To hold your hand and call you mine", time: 70 },
  { text: "I'm trying to be your man till the end of time, oh", time: 77 },
  { text: "I'll do anything, anything you ask me to", time: 82 },
  { text: "I would run through a fire just to be by your side", time: 92 },
  { text: "If your heart's on the line, you could take mine", time: 98 },
  { text: "It's crazy, but it's true", time: 103 },
  { text: "There's nothing I won't do", time: 105 },
  { text: "I'd risk it all for you", time: 108 },
  { text: "I will swim across the sea just to show you", time: 115 },
  { text: "Sacrifice my life just to hold you", time: 121 },
  { text: "I could go on and on to prove that you belong here in my arms", time: 126 },
  { text: "Say you want the moon, touch me and I'll fly", time: 159 },
  { text: "Ain't a mountain you could point to I wouldn't come down", time: 166 },
  { text: "It's crazy, but it's true", time: 171 },
  { text: "There's nothing I won't do", time: 174 },
  { text: "I'd risk it all for you", time: 177 },
  { text: "It's crazy, but it's true", time: 183 },
  { text: "There's nothing I won't do", time: 186 },
  { text: "I'd risk it all for you", time: 189 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 211 segundos (duración aproximada de la canción con margen)
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}

// Llama a la función después de 211 segundos (211,000 milisegundos)
setTimeout(ocultarTitulo, 211000);