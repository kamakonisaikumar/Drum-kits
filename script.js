const kits = ["crash","kick","snare","tom"];
const containerEl = document.querySelector(".container");

const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const changeModeEl = document.getElementById("changemode");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
  if(inputEl.checked){
    bodyEl.style.backgroundColor ="black";
    changeModeEl.style.color = "white";
    changeModeEl.textContent = "Dark Mode";
  }else {
    bodyEl.style.backgroundColor = "white";
    changeModeEl.style.color = "black";
     changeModeEl.textContent = "Light Mode";
  }
}

inputEl.addEventListener("input",() =>{
    updateBody();
    updateLocalStorage();
   
});

function updateLocalStorage(){
  localStorage.setItem("mode",JSON.stringify(inputEl.checked));
}

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
  containerEl.appendChild(btnEl);
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);
  btnEl.addEventListener("click", () => {
    audioEl.play();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});