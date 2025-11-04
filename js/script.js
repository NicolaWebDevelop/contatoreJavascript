// --- COSTRUZIONE DOM ---
// Card e contatore
const card=document.createElement("div"); card.className="card"; document.body.appendChild(card);
const title=document.createElement("h1"); title.textContent="Contatore".toUpperCase(); card.appendChild(title);
const counter=document.createElement("div"); counter.id="counter"; counter.className="counter zero"; card.appendChild(counter);

// Pulsanti
const controls=document.createElement("div"); controls.className="controls"; card.appendChild(controls);
const btnDec=document.createElement("button"); btnDec.id="decrement"; btnDec.className="btn"; btnDec.textContent="−"; controls.appendChild(btnDec);
const btnReset=document.createElement("button"); btnReset.id="reset"; btnReset.className="btn"; btnReset.textContent="Reset"; controls.appendChild(btnReset);
const btnInc=document.createElement("button"); btnInc.id="increment"; btnInc.className="btn"; btnInc.textContent="+"; controls.appendChild(btnInc);

// Memoria
const memoryRow=document.createElement("div"); memoryRow.className="memory-row"; card.appendChild(memoryRow);
const label=document.createElement("span"); label.textContent="Memoria:"; memoryRow.appendChild(label);
const memoryBadge=document.createElement("span"); memoryBadge.id="memoryValue"; memoryBadge.className="memory-badge"; memoryRow.appendChild(memoryBadge);
const btnClear=document.createElement("button"); btnClear.id="clearMemory"; btnClear.className="btn"; btnClear.textContent="Cancella"; memoryRow.appendChild(btnClear);

// Scena
const scene=document.createElement("div"); scene.className="ground"; card.appendChild(scene);
const door=document.createElement("div"); door.className="door"; scene.appendChild(door);

// Footer
const footer=document.createElement("footer");
const text1=document.createTextNode("Realizzato con tanto amore ❤️ e un po’ di codice 💻 © 2025 ");
const link=document.createElement("a"); link.href="https://nicolawebdevelop.github.io/WebNicolaDesign/"; link.target="_blank"; link.textContent="WebNicolaDesign";
const space=document.createTextNode(". "); 
const popupLink=document.createElement("span"); popupLink.textContent="Tutti i diritti riservati."; popupLink.classList.add("popup-trigger");
footer.appendChild(text1); footer.appendChild(link); footer.appendChild(space); footer.appendChild(popupLink);
document.body.appendChild(footer);

// Popup diritti
const popup=document.createElement("div"); popup.classList.add("popup");
const closeBtn=document.createElement("span"); closeBtn.classList.add("popup-close"); closeBtn.textContent="✖";
const popupText=document.createElement("p"); popupText.textContent="Tutti i contenuti di questo sito, inclusi testi, codice e grafica, sono di proprietà del creatore. È vietata la riproduzione, anche parziale, senza autorizzazione. 💻❤️";
popup.appendChild(closeBtn); popup.appendChild(popupText); document.body.appendChild(popup);
popupLink.addEventListener("click",()=>{popup.classList.add("visible");});
closeBtn.addEventListener("click",()=>{popup.classList.remove("visible");});

// Contatore logica
let count=0; const memory=localStorage.getItem("memory"); if(memory!==null) memoryBadge.textContent=memory;
function updateCounter(){ counter.textContent=count; counter.className="counter "+(count>0?"positive":count<0?"negative":"zero"); }
function updateMemoryDisplay(){ const saved=localStorage.getItem("memory"); memoryBadge.textContent=saved??"—"; }

// Walker SVG
function walkerSVG(color="#000"){ return `<div class="shadow"></div><svg viewBox="0 0 100 140" width="100%" height="100%"><circle class="silhouette-head" cx="50" cy="20" r="10" fill="${color}"></circle><rect class="silhouette-body" x="44" y="30" width="12" height="38" rx="4" fill="${color}"></rect><rect class="silhouette-body" x="32" y="36" width="8" height="26" rx="4" transform-origin="36 36" style="animation: stepLeft 420ms linear infinite; fill:${color};"></rect><rect class="silhouette-body" x="60" y="36" width="8" height="26" rx="4" transform-origin="64 36" style="animation: stepRight 420ms linear infinite; fill:${color};"></rect><rect class="silhouette-body" x="44" y="68" width="8" height="34" rx="4" transform-origin="48 68" style="animation: stepRight 420ms linear infinite; fill:${color};"></rect><rect class="silhouette-body" x="52" y="68" width="8" height="34" rx="4" transform-origin="56 68" style="animation: stepLeft 420ms linear infinite; fill:${color};"></rect></svg>`;}
function createWalker(direction,color){ const walker=document.createElement("div"); walker.className="walker"; walker.innerHTML=walkerSVG(color);
if(direction==="enter"){ walker.style.left="-60px"; } else { walker.style.left="200px"; walker.style.transform="scaleX(-1)"; }
scene.appendChild(walker); setTimeout(()=>{ walker.style.transition="left 2.2s linear, opacity 0.5s ease"; walker.style.left=direction==="enter"?"180px":"-80px"; },30);
setTimeout(()=>walker.remove(),2400);}

// Eventi pulsanti
btnInc.addEventListener("click",()=>{ count++; createWalker("enter","var(--green)"); localStorage.setItem("memory",count); updateCounter(); updateMemoryDisplay(); counter.classList.add("increase"); setTimeout(()=>counter.classList.remove("increase"),300); });
btnDec.addEventListener("click",()=>{ count--; createWalker("exit","var(--red)"); localStorage.setItem("memory",count); updateCounter(); updateMemoryDisplay(); counter.classList.add("decrease"); setTimeout(()=>counter.classList.remove("decrease"),300); });
btnReset.addEventListener("click",()=>{ count=0; updateCounter(); });
btnClear.addEventListener("click",()=>{ localStorage.removeItem("memory"); updateMemoryDisplay(); });

updateCounter(); updateMemoryDisplay();

// --- COOKIE POPUP ---
const cookiePopup = document.createElement("div");
cookiePopup.className = "cookie-popup";

// BISCOTTO
const cookieEmoji = document.createElement("span");
cookieEmoji.textContent = "🍪"; // Emoji biscotto
cookieEmoji.style.fontSize = "24px";
cookiePopup.appendChild(cookieEmoji);

// TESTO
const cookieText = document.createElement("span");
cookieText.textContent = "Questo sito utilizza cookie per migliorare l'esperienza.";
cookiePopup.appendChild(cookieText);

// BOTTONE
const cookieBtn = document.createElement("button");
cookieBtn.textContent = "Ho capito!";
cookiePopup.appendChild(cookieBtn);

// APPEND AL BODY
document.body.appendChild(cookiePopup);

// Mostra sempre
cookiePopup.style.display = "flex";

// CLICK per mangiare il biscotto e chiudere popup
cookieBtn.addEventListener("click", () => {
  // Animazione biscotto "mangiato"
  cookieEmoji.style.transition = "transform 0.6s ease, opacity 0.6s ease";
  cookieEmoji.style.transform = "scale(0) rotate(30deg)";
  cookieEmoji.style.opacity = 0;

  // Svanire popup
  cookiePopup.style.transition = "opacity 0.6s ease";
  cookiePopup.style.opacity = 0;

  setTimeout(() => cookiePopup.remove(), 600);
});

cookieBtn.addEventListener("click", () => {
  cookie.classList.add("mangiato"); // aggiunge effetto morso

  cookiePopup.style.transition = "opacity 0.6s ease";
  cookiePopup.style.opacity = 0;

  setTimeout(() => cookiePopup.remove(), 600);
});
