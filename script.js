function prlx() {
  stock1.style.top = -(window.pageYOffset/5)+"px";
  whiteLayer.style.top = -(window.pageYOffset/2)+"px";
}

function start() {
  stock1 = document.querySelector("#stock1");
  whiteLayer = document.querySelector("#whiteLayer");
}

window.addEventListener("scroll", prlx);
window.addEventListener("load", start);
