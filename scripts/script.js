// JavaScript Document
console.log("hi");


var deButton = document.querySelector("header nav button");

deButton.onclick = toggleMenu;

function toggleMenu() {  
  var deNav = document.querySelector("header nav");
  deNav.classList.toggle("toonMenu");
}


var actionButton = document.querySelector("button:last-of-type");

actionButton.addEventListener('onclick', selectButton)

function selectButton() {

}