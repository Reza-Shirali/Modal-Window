"use strict";

const modal = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const hidden = document.querySelector(".hidden");


const showHandler = () =>{
    hidden.style.display = "block"
    overlay.style.display = "block"
}
const closeHandler = () =>{
    hidden.style.display = "none"
    overlay.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == overlay) {
        closeHandler()
    }
}
window.onkeydown = function(event) {
    if (event.key === "Escape" && hidden.style.display === "block") {
        closeHandler()
    }
}


modal.forEach((el) => {
  el.addEventListener("click", showHandler);
});
closeModal.addEventListener("click",closeHandler)
