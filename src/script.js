const navbar = document.querySelector("#navbar");
const btn = document.querySelector("#btn-navbar");
const box_transparentBlack = document.querySelector("#box-transparent");
function openNavbar() {
  navbar.classList.toggle("open-close-navbar");
  box_transparentBlack.classList.toggle("box-black");
}

btn.addEventListener("click", openNavbar);
