/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("funciona");
  let excuse = getExcuse();
  document.getElementById("excusas").innerHTML = excuse;
};
function getRandomInt(number) {
  return Math.floor(Math.random() * number);
}
function getWho() {
  let who = ["Mi perro", "La vecina", "Mi hermano", "El alcalde"];
  let index = getRandomInt(4);
  return who[index];
}
function getAcction() {
  let acction = ["ha comido", "ha perdido", "ha roto", "ha atropellado"];
  let index = getRandomInt(4);
  return acction[index];
}
function getWhat() {
  let what = ["mis deberes", "mi telefono", "al vecino", "el coche"];
  let index = getRandomInt(4);
  return what[index];
}
function getWhen() {
  let when = [
    "despues de clase",
    "al atardecer",
    "en mi cumpleaños",
    "en navidad"
  ];
  let index = getRandomInt(4);
  return when[index];
}
function getExcuse() {
  let who = getWho();
  let acction = getAcction();
  let what = getWhat();
  let when = getWhen();
  let excusas = who + " " + acction + " " + what + " " + when;
  return excusas;
}
