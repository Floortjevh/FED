// JavaScript Document

console.log("hi");

var deButton = document.querySelector("header nav button");

deButton.onclick = toggleMenu;

function toggleMenu() {  
  var deNav = document.querySelector("header nav");
  deNav.classList.toggle("toonMenu");
}