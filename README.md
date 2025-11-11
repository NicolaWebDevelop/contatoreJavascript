🧮 Contatore Interattivo in JavaScript

Un contatore moderno, animato e completamente generato via JavaScript DOM, con effetti visivi, animazioni SVG, memoria locale e persino un simpatico popup dei cookie 🍪!
Un piccolo progetto creativo per dimostrare la potenza del vanilla JavaScript e un pizzico di design raffinato ✨

🚀 Demo

👉 Guarda la demo online

(Puoi sostituire il link con la tua GitHub Page o un altro hosting)

🧠 Descrizione del progetto

Questo contatore non è un semplice “+1 / -1”:
è una mini-app interattiva, con:

✅ Incremento e decremento animato

🔁 Reset immediato

💾 Memoria automatica (localStorage) – mantiene il valore dopo il refresh

🚶‍♂️ Omini animati che entrano o escono per rappresentare le operazioni

🍪 Cookie popup con animazione del biscotto “mangiato”

💬 Popup informativo sui diritti d’autore

💅 UI moderna e responsive con transizioni fluide e look elegante

🧩 Struttura del progetto

📂 contatore/
┣ 📜 index.html
┣ 📂 css/
┃ ┗ style.css
┣ 📂 js/
┃ ┗ script.js
┗ 📄 README.md

Tutto il DOM è generato dinamicamente da script.js.
Non usa framework o librerie esterne: funziona ovunque e anche offline.

⚙️ Funzionalità principali
Funzione	Descrizione
➕ Incrementa	Aumenta il contatore e mostra un omino verde che entra
➖ Decrementa	Diminuisce il contatore e mostra un omino rosso che esce
🔁 Reset	Riporta il contatore a zero
💾 Memoria	Salva e mostra l’ultimo valore in localStorage
❌ Cancella memoria	Elimina la memoria salvata
🍪 Cookie Popup	Mostra un popup cookie con animazione “mangiato”
⚖️ Popup diritti	Mostra un messaggio informativo sui diritti d’autore
🧱 Tecnologie utilizzate

HTML5

CSS3 (variabili, keyframes, flexbox, transizioni)

Vanilla JavaScript (ES6+)

LocalStorage API

SVG animato per i personaggi “walkers”

🛠️ Come provarlo

Clona la repo:

git clone https://github.com/tuo-username/contatore-js.git


Entra nella cartella:

cd contatore-js


Avvia il file index.html nel browser:

open index.html


(oppure doppio click sul file)

🎨 Design & Dettagli

Colori principali

--bg-1 e --bg-2: sfondo sfumato blu notte

--green: valori positivi

--red: valori negativi

Font system nativo (nessuna libreria esterna)

Animazioni fluide: bump, stepLeft, stepRight

Effetti visivi con ombre e trasparenze

📦 Estensioni possibili

🧮 Aggiungere input per valori personalizzati

⏱️ Contatore automatico con timer

🌈 Tema chiaro/scuro

🔊 Effetti sonori al click

📊 Salvataggio multiplo di sessioni

👨‍💻 Autore

Realizzato con ❤️ da WebNicolaDesign

© 2025 – Tutti i diritti riservati.

🪪 Licenza

Questo progetto è rilasciato per uso personale o dimostrativo.
La riproduzione, anche parziale, senza autorizzazione è vietata.

⭐ Se ti piace questo progetto, lascia una stella su GitHub!
