// Cronometro
let cronometro;
let cronometroDisplay = document.getElementById('cronometroDisplay');

function startCronometro() {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  cronometro = setInterval(() => {
    seconds++;

    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }

    cronometroDisplay.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

// Timer
let timerDisplay = document.getElementById('timerDisplay');

function impostaTimer() {
  let ore = parseInt(document.getElementById('ore').value) || 0;
  let minuti = parseInt(document.getElementById('minuti').value) || 0;
  let secondi = parseInt(document.getElementById('secondi').value) || 0;

  let totaleSecondi = ore * 3600 + minuti * 60 + secondi;

  if (totaleSecondi <= 0) {
    alert('Inserisci un tempo valido');
    return;
  }

  let timer = setInterval(() => {
    totaleSecondi--;

    if (totaleSecondi <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = 'Tempo scaduto!';
    } else {
      let h = Math.floor(totaleSecondi / 3600);
      let m = Math.floor((totaleSecondi % 3600) / 60);
      let s = totaleSecondi % 60;

      timerDisplay.textContent = `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
  }, 1000);
}