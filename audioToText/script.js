// Obtener referencias a los elementos del DOM
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const outputDiv = document.getElementById('output');

// Crear un objeto de reconocimiento de voz
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

// Configurar opciones del reconocimiento de voz
recognition.lang = 'es-ES'; // Establecer el idioma (puedes cambiarlo según tus necesidades)

// Al hacer clic en el botón "Iniciar"
startBtn.addEventListener('click', () => {
  recognition.start();
  startBtn.disabled = true;
  stopBtn.disabled = false;
  outputDiv.innerHTML = '';
});

// Al hacer clic en el botón "Detener"
stopBtn.addEventListener('click', () => {
  recognition.stop();
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

// Manejar los resultados del reconocimiento de voz
recognition.addEventListener('result', (event) => {
  const transcript = Array.from(event.results)
    .map(result => result[0].transcript)
    .join('');

  outputDiv.innerHTML += `<p>${transcript}</p>`;
});

// Manejar el evento de finalización del reconocimiento de voz
recognition.addEventListener('end', () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

// Manejar errores del reconocimiento de voz
recognition.addEventListener('error', (event) => {
  outputDiv.innerHTML += `<p>Error: ${event.error}</p>`;
});
