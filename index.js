let dwnldBtn = document.getElementById("dwnld");
let clearBtn = document.getElementById("clear");
let reloadBtn = document.getElementById("reload");
let div = document.getElementById("div");

div.innerHTML = localStorage.getItem("key");

dwnldBtn.addEventListener("click", () => {
  localStorage.setItem("key", "12");
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
});

reloadBtn.addEventListener("click", () => {
  window.location.reload();
});
