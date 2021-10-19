"use strict";

let loader;

function loading() {
  loader = setTimeout(showPage, 1900);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
}
